// @ts-nocheck
import { getData } from "./db.ts";

const server = Bun.serve({
  port: 3000,
  async fetch(request) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await getData();
    return new Response(data, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
      },
    });
  },
});

console.log(`Listening on localhost:${server.port}`);
