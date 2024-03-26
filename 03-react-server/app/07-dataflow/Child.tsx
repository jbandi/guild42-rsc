"use client";

type ChildProps = { backendData?: string };
export default function Child({ backendData }: ChildProps) {
  console.log("rendering Child");
  return (
    <div
      style={{
        border: "3px solid black",
        padding: 30,
        backgroundColor: "cyan",
      }}
    >
      <h2 style={{ margin: 0 }}>Display of Child.</h2>
      <p style={{ marginTop: 0 }}>Rendering on client</p>
      <h3>Backend data:</h3>
      <h1>{backendData}</h1>
    </div>
  );
}
