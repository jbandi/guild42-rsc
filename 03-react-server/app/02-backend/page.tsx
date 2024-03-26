import { Backend } from "@/app/02-backend/Backend";
import { Suspense } from "react";
import { Spinner } from "@/app/Spinner";

export default function BackendPage() {
  return (
    <>
      <h3>Server Data:</h3>
      <Backend />
    </>
  );
}
