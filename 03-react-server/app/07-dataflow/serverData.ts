// "use server";

import { readFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { timestampWithMillis } from "@/app/util";
import { getCount, getData, updateCount} from "@/app/db/db";
import {DATA_PATH} from '@/app/db/constants';


export async function queryFromDB(messageId: number) {
  console.log(
    `Querying DB for id ${messageId} (${timestampWithMillis(new Date())})`,
  );
  const dbData = await getData(messageId);

  const delay = (Math.floor(Math.random() * 3) + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  console.log(
    `Loaded data for id ${messageId} from the DB (${timestampWithMillis(new Date())}): `,
    dbData,
  );
  return dbData;
}

export async function loadCountFromDb() {
  console.log("Querying DB ...");
  const dbCount = await getCount();
  return parseInt(dbCount);
}

export async function updateCountInDb(val: number) {
  console.log("Updating DB ...");
  await updateCount(val);
}

export async function updateCountServer(data: FormData) {
  "use server";
  const newValue = data.get("val") as string;
  // data should be validated here ... ie using Zod ...

  console.log("updating count ...", newValue);
  await updateCountInDb(parseInt(newValue));
  revalidatePath("/");
}

export async function updateCountServerWithValue(newValue: number) {
  // when called from a client component we need "use server" at the top of the file
  console.log("updating count ...", newValue, typeof newValue);
  await updateCountInDb(newValue);
  revalidatePath("/");
}
