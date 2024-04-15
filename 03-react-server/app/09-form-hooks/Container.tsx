
import { Suspense } from "react";
import { useFormState } from "react-dom";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import styles from "./Container.module.css";
import Child from "./Child";
import { Spinner } from "@/app/Spinner";
import {loadCountFromDb} from '@/app/09-form-hooks/serverAction';

export default async function Container() {
  const dataFromDb = await loadCountFromDb();
  
  console.log("rendering Container", dataFromDb);
  return (
    <div className={styles.wrapper}>
      <h1 style={{ margin: 0 }}>Container</h1>
      <p style={{ marginTop: 0 }}>Rendering on server</p>
      <h1>{dataFromDb}</h1>
      <Child initialState={dataFromDb}/>
    </div>
  );
}
