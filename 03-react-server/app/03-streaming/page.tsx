import { Suspense } from "react";
import { Backend } from "./Backend";
import { Spinner } from "@/app/Spinner";

export default function BackendPage() {
  return (
    <>
      <h3>Server Data:</h3>
      <Suspense fallback={<Spinner />}>
        <Backend messageId={1} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Backend messageId={2} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Backend messageId={3} />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <Backend messageId={5} />
      </Suspense>
    </>
  );
}
