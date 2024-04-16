import { AsyncDatabase } from "promised-sqlite3";

// export const db = new Database("./db/db.sqlite");
// export const query = promisify<string, MessageRow>(db.get.bind(db));

export const db = await AsyncDatabase.open("./db/db.sqlite");
console.log("Connected to Database");
