import {useEffect, useState} from "react";

export function useApiData() {
  const [data, setData] = useState("");
  useEffect(() => {
    async function fetchData() {
      const messageText = await fetchDataFromApi();
      setData(messageText);
    }
    fetchData();
  }, []);
  return data;
}

export async function fetchDataFromApi() {
  
  const response = await fetch("http://localhost:3000/");
  const message = await response.json();
  console.log("loaded message from api", message.text);
  return message.text;
}
