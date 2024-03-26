export function Home() {
  let now = new Date().toLocaleTimeString();
  console.log("rendering Home");
  return (
    <div>
      <h1>React Server</h1>
      <p>{now}</p>
    </div>
  );
}
