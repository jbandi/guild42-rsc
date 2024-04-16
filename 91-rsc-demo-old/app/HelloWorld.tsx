import { fetchData } from "@/app/api/fetchData";
import { FormDemo } from "@/app/FormDemo";
import { ListDemo } from "@/app/ListDemo";
import { ChartDemo } from "@/app/ChartDemo";

export async function HelloWorld() {
  const data = await fetchData();

  console.log("rendering HelloWorld");

  return (
    <div>
      <div className="flex w-screen flex-col items-center p-5 text-4xl">
        <p>Hello World!</p>
        <p>{data}</p>
        <FormDemo initalMessage={data} />
        <ListDemo />
        <ChartDemo />
      </div>
    </div>
  );
}
