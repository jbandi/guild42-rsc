import { suspend } from "suspend-react";
import { fetchDataFromApi, useApiData } from "../_api/useApiData.ts";
import styles from "./Greeter.module.css";

export function Greeter() {
  // fetching with effect and state
  const messageText = useApiData();

  // In this demo Suspense does not work on the server ... 
  // ... so the Greeter component is not rendered on the server when using `suspend` andn we get a warning
  // const messageText = suspend(fetchDataFromApi);

  console.log("rendering Greeter with messageText", messageText);
  return (
    <div className={styles.wrapper}>
      <h2>Greeter Component</h2>
      <h1>{messageText}</h1>
    </div>
  );
}
