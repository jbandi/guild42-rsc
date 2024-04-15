import {useState} from 'react';
import styles from "./Counter.module.css";


export function Counter() {
  const [count, setCount] = useState(0)
  
  
  console.log("rendering Counter")
  return (
    <div className={styles.wrapper}>
      <h2>Dynamic Island</h2>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
