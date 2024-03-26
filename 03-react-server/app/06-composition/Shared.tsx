/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

export default function Shared() {
  //<editor-fold desc="Hiding crazy demo stuff ...">
  const isClient = typeof window === "object";
  const [env, setEnv] = isClient
    ? React.useState("server")
    : ["server", () => {}];

  if (isClient) {
    React.useEffect(() => {
      setInterval(() => {
        setEnv("client");
      }, 1000);
    }, []);
  }
  //</editor-fold>
  console.log("rendering Shared on", env);
  return (
    <div
      style={{
        border: "1px solid black",
        padding: 10,
        backgroundColor: "gold",
      }}
    >
      <h3>Shared Component</h3>
      <p>Rendering on {env}</p>
    </div>
  );
}
