import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}></div>
    </div>
  );
}
