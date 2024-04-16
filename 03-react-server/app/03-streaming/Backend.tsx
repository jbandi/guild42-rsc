import { queryFromDB } from "./serverData";

export async function Backend({ messageId }: { messageId: number }) {
  const serverData = await queryFromDB(messageId);
  let now = new Date().toLocaleTimeString();

  return (
    <div style={{minHeight: 155}}>
      <h1>{serverData}</h1>
      <p>{now}</p>
    </div>
  );
}
