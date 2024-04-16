
import { readFile } from "fs/promises";
import { revalidatePath } from "next/cache";
import { timestampWithMillis } from "@/app/util";
import { getCount, getData, updateCount} from "@/app/db/db";
import {DATA_PATH} from '@/app/db/constants';


export function readServerData() {
  let serverData = "";
  serverData = "This is Server Data.";

  // // read current server path
  // serverData = process.cwd();
  //
  // // read data from file
  // serverData = await fs.readFile("./_api/SERVER_DATA.txt", "utf8");
  //
  // // read data from database
  // serverData = await getData();
  //
  // // random delay
  // const delay = (Math.floor(Math.random() * 3) + 2) * 1000;
  // await new Promise((resolve) => setTimeout(resolve, delay));
  //
  console.log("Server Data: ", serverData);
  return serverData;
}
