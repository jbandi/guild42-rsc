/* eslint-disable react-hooks/rules-of-hooks */

import React from "react";

export default function Clock() {
  //<editor-fold desc="Hiding crazy demo stuff ...">
  const isClient = typeof window === "object";
  const [time, setTime] = isClient
    ? React.useState(new Date())
    : [new Date(), () => {}];

  if (isClient) {
    React.useEffect(() => {
      setInterval(() => {
        setTime(new Date());
      }, 1000);
    }, []);
  }
  //</editor-fold>

  console.log("rendering Clock", time);
  return (
    <div>
      <h3>Current Time:</h3>
      <h1 suppressHydrationWarning>{time.toLocaleTimeString("de-CH")}</h1>
    </div>
  );
}
