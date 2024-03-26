import Child from "./Child";
import Shared from "./Shared";

export default async function Container() {
  console.log("rendering Container");
  return (
    <div
      style={{
        border: "5px solid black",
        padding: 30,
        backgroundColor: "pink",
      }}
    >
      <h1 style={{ margin: 0 }}>Container</h1>
      <p style={{ marginTop: 0 }}>Rendering on server</p>
    </div>
  );
}
