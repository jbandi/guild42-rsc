"use server";

import { revalidatePath } from "next/cache";
import {getCount, updateCount} from '@/app/db/db';

export async function loadCountFromDb() {
  console.log("Querying DB ...");
  const dbCount = await getCount();
  let number = parseInt(dbCount);
  if (isNaN(number)) {
    number = 0;
  }
  return number;
}

export async function updateCountServerState(prevState: any, formData: FormData) {
  // when called from a client component we need "use server" at the top of the file
  // const newValue = formData.get("val") as string;
  // // data should be validated here ... ie using Zod ..
  console.log("updating count ...", formData, prevState);
  // const val = parseInt(newValue);
  // let newVal = val + 1;
  const dbCount = await getCount();
  let number = parseInt(dbCount);
  const newVal = number + 1;
  await updateCount(newVal);
  revalidatePath("/");

  // random delay
  // const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  // await new Promise((resolve) => setTimeout(resolve, delay));
  return `(incremented ${new Date().toLocaleTimeString()})`
}
