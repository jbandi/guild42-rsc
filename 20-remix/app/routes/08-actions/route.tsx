import { Container } from "./Container";
import {
  readServerData,
  writeServerData,
} from "~/routes/02-backend/serverData";
import { Await, Form, useFetcher, useLoaderData } from "@remix-run/react";
import { ActionFunctionArgs, defer, json } from "@remix-run/node";
import { Suspense } from "react";

export async function loader() {
  const serverData = readServerData();
  console.log("Loading data on the server:", serverData);
  return defer({ serverData });
}

export async function action({ request }: ActionFunctionArgs) {
  const data = await request.formData();
  console.log("Action on the server", data.get("count"));
  // Validate and parse Data i.e. with Zod
  const count = parseInt(data.get("count") as string);

  await writeServerData(count);
  return json({ action: "Action on the server" });
}
export default function BackendPage() {
  const { serverData } = useLoaderData<typeof loader>();
  // const fetcher = useFetcher();
  //
  // function incrementCount(count: number) {
  //   fetcher.submit({ count }, { method: "post" });
  // }

  console.log("Rendering the backend route:", serverData);
  return (
    <div>
      <h1>Streaming Page</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={serverData}>
          {(data) => (
            <div>
              <Container data={data} />
              <Form method="post">
                <input type="hidden" name="count" value={data} />
                <button type="submit">Increment</button>
              </Form>
              {/*<button onClick={() => incrementCount(data)}>Inc</button>*/}
            </div>
          )}
        </Await>
      </Suspense>
    </div>
  );
}
