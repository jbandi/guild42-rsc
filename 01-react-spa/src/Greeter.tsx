import { suspend } from "suspend-react";
import { fetchDataFromApi, useApiData } from "../_api/useApiData.ts";
import styles from "./Greeter.module.css";

export function Greeter() {
  // fetching with effect and state
  const messageText = useApiData();

  // fetching with suspense
  // const messageText = suspend(fetchDataFromApi);

  console.log("rendering Gereeter with messageText", messageText);
  return (
    <div className={styles.wrapper}>
      <h2>Greeter Component</h2>
      <h1>{messageText}</h1>
    </div>
  );
}
