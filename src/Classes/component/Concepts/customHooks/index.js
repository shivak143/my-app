import useFetch from "./useFetch";

export const Home = () => {
//   const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
const [data] = useFetch('https://fakestoreapi.com/products')

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>title : {item.title}</p>;
        })}
    </>
  );
};
