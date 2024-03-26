import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Greeter } from "./Greeter.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React SPA</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Greeter />
      </Suspense>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
