"use client";

import { updateCountServerWithValue } from "@/app/02-backend/serverData";
import styles from "./Child.module.css";
// type ChildProps = { updateFn: () => Promise<void> };

export default function Child() {
  async function handleClick() {
    console.log("handling click ...");
  }

  console.log("rendering Child");
  return (
    <div className={styles.wrapper}>
      <h2 style={{ margin: 0 }}>Display of Child.</h2>
      <p style={{ marginTop: 0 }}>Rendering on client</p>
      <button onClick={handleClick}>Update</button>
    </div>
  );
}
