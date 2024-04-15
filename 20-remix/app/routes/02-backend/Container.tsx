type ContainerProps = { data: string };

export function Container({ data }: ContainerProps) {
  return (
    <div>
      <h2>Display of Container.</h2>
      <h1>{data}</h1>
    </div>
  );
}
