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
