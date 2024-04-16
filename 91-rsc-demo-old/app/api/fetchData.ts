import { db } from "@/app/api/db";
import { MessageRow } from "@/app/api/model";

const QUERY = "SELECT * FROM MESSAGE WHERE ID = 1";
//
export async function fetchData(): Promise<string> {
  const row = await db.get<MessageRow>(QUERY);
  return row.text;
}

export async function fetchAllData(): Promise<MessageRow[]> {
  const rows = await db.all<MessageRow>("SELECT * FROM MESSAGE");
  return rows;
}

// Initial demo code
// export async function fetchData(): Promise<string> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Hello from Backend!");
//     }, 1000);
//   });
// }
