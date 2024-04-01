import Child from "./Child";
import { queryFromDB } from "@/app/02-backend/serverData";
import { Suspense } from "react";
import { Spinner } from "@/app/Spinner";
import styles from './Container.module.css';

export default async function Container() {
  // const dataFromDb = await queryFromDB(5);
  console.log("rendering Container");
  return (
    <div className={styles.wrapper}>
      <h1>Container</h1>
      <p>Rendering on server</p>
      <Child/>
    </div>
  );
}

// Demo: Show spinner while waiting for data
// export async function Content() {
//   const dataFromDb = await queryFromDB(5);
//   return <Child backendData={dataFromDb} />;
// }
