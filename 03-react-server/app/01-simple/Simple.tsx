export function Simple() {
  let now = new Date().toLocaleTimeString();
  console.log("rendering Simple");
  return (
    <div>
      <h1>Display of Greeter.</h1>
      <p>{now}</p>
    </div>
  );
}
