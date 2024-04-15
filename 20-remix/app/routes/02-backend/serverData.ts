import { readFile } from "fs/promises";
import { DATA_PATH, getCount, getData, updateCount } from "~/db/db";

export async function readServerData() {
  // read data from database
  const serverData = await getCount();

  // // random delay
  // const delay = (Math.floor(Math.random() * 3) + 2) * 1000;
  // await new Promise((resolve) => setTimeout(resolve, delay));

  console.log("Server Data: ", serverData);
  return serverData;
}

export async function writeServerData(count: number) {
  // write data to database
  await updateCount(count + 1);
}
