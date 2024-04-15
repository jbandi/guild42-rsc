"use server";

// import "server-only";

import { getCount, getData, updateCount } from "@/_api/api";
import { revalidatePath } from "next/cache";

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
  return `(incremented ${new Date().toLocaleTimeString()})`
}
