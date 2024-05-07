import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  //Method1 to get api data.
  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, [url]);
  //method1 end here

  //method2 to get api data
  useEffect(() => {
    getApiData();
  }, []);

  async function getApiData() {
    let res = await fetch(url);
    let apiData = await res.json();
    setData(apiData);
  }
  //method 2 end here

  return [data];
};

export default useFetch;
