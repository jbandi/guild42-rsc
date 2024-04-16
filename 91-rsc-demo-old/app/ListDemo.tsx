import { fetchAllData } from "@/app/api/fetchData";

export async function ListDemo() {
  const messages = await fetchAllData();

  return (
    <div className="m-3 min-w-full gap-x-4 gap-y-12 border-4 border-cyan-500 p-4">
      <ul className="list-inside list-disc">
        {messages.map((message) => (
          <li key={message.id}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
}
