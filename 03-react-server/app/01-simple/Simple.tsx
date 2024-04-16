export function Simple() {
  let now = new Date().toLocaleTimeString();
  console.log("rendering Simple");
  return (
    <div>
      <h1>Simple Component</h1>
      <p>{now}</p>
    </div>
  );
}
