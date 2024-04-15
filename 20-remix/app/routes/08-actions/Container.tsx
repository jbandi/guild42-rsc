type ContainerProps = { data: string };

export function Container({ data }: ContainerProps) {
  return (
    <div>
      <h2>Container.</h2>
      <h1>DB Count: {data}</h1>
    </div>
  );
}
