import { Suspense, useState } from "react";
import "./App.css";
import { Greeter } from "./Greeter.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React SSR</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Greeter />
      </Suspense>

    </>
  );
}

export default App;
