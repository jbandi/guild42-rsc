"use client";

import styles from "./Child.module.css";

type ChildProps = { backendData?: string };
export default function Child({ backendData }: ChildProps) {
  console.log("rendering Child");
  return (
    <div className={styles.wrapper}>
      <h2>Display of Child.</h2>
      <p>Rendering on client</p>
      <h3>Backend data:</h3>
      <h1>{backendData}</h1>
    </div>
  );
}
