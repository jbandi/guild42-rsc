import { queryFromDB } from "@/app/02-backend/serverData";

export async function Backend({ messageId }: { messageId: number }) {
  const serverData = await queryFromDB(messageId);
  let now = new Date().toLocaleTimeString();

  return (
    <div>
      <h1>{serverData}</h1>
      <p>{now}</p>
    </div>
  );
}
