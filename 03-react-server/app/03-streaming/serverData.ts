import {getData} from '@/app/db/db';
import {timestampWithMillis} from '@/app/util';

const fs = require("fs").promises;

export async function queryFromDB(messageId: number) {
  console.log(
    `Querying DB for id ${messageId} (${timestampWithMillis(new Date())})`,
  );
  const dbData = await getData(messageId);

  const delay = Math.floor(Math.random() * (3000 - 1000 + 1)) + 1000;
  await new Promise((resolve) => setTimeout(resolve, delay));

  console.log(
    `Loaded data for id ${messageId} from the DB (${timestampWithMillis(new Date())}): `,
    dbData,
  );
  return dbData;
}