import Child from "./Child";
import Shared from "./Shared";
import styles from "./Container.module.css";

export default async function Container() {
  console.log("rendering Container");
  return (
    <div className={styles.wrapper}>
      <h1>Container</h1>
      <p>Rendering on server</p>
    </div>
  );
}
