import { Container } from "./Container";
import { readServerData } from "~/routes/02-backend/serverData";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  const serverData = await readServerData();
  console.log("Loading data on the server:", serverData);
  return serverData;
}
export default function BackendPage() {
  const serverData = useLoaderData();
  console.log("Rendering the backend route:", serverData);
  return <Container data={serverData} />;
}
