import { Container } from "./Container";
import { readServerData } from "~/routes/02-backend/serverData";
import { Await, useLoaderData } from "@remix-run/react";
import { defer } from "@remix-run/node";
import { Suspense } from "react";

export async function loader() {
  const serverData = readServerData();
  console.log("Loading data on the server:", serverData);
  return defer({ serverData });
}
export default function BackendPage() {
  const { serverData } = useLoaderData<typeof loader>();
  console.log("Rendering the backend route:", serverData);
  return (
    <div>
      <h1>Streaming Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={serverData}>
          {(data) => <Container data={data} />}
        </Await>
      </Suspense>
    </div>
  );
}
