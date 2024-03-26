import Child from "./Child";
import { queryFromDB } from "@/app/02-backend/serverData";
import { Suspense } from "react";
import { Spinner } from "@/app/Spinner";

export default async function Container() {
  // const dataFromDb = await queryFromDB(5);
  console.log("rendering Container");
  return (
    <div
      style={{
        border: "5px solid black",
        padding: 30,
        backgroundColor: "pink",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1 style={{ margin: 0 }}>Container</h1>
      <p style={{ marginTop: 0 }}>Rendering on server</p>
      <Child />
    </div>
  );
}

// Demo: Show spinner while waiting for data
// export async function Content() {
//   const dataFromDb = await queryFromDB(5);
//   return <Child backendData={dataFromDb} />;
// }
