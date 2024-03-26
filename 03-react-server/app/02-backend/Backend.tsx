import { readServerData } from "@/app/02-backend/serverData";

export function Backend() {
  const serverData = readServerData();
  let now = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>{serverData}</h1>
      <p>{now}</p>
    </div>
  );
}
