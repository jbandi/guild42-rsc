"use server";
import { AsyncDatabase } from "promised-sqlite3";
import { revalidatePath } from "next/cache";
import { MessageRow } from "@/app/api/model";

export async function myAction(newValue: string) {
  console.log("Received", newValue);

  const db = await AsyncDatabase.open("./db/db.sqlite");
  console.log("Connected to Database");

  await db.run(`insert into message(text) values ('${newValue}');`);
  const rows = await db.all<MessageRow>("SELECT * FROM MESSAGE");
  console.log("Values in DB", rows);
  revalidatePath("/");
}
