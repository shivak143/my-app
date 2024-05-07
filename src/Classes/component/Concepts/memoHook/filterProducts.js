import { useEffect, useMemo, useState } from "react";
import "./table.css";

export function FilterProductsUsingMemoHook() {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const [products, setProducts] = useState([
    { id: 1, name: "Iphone 15 pro max", price: 150000 },
    { id: 2, name: "Samsung Galaxy S20 Pro", price: 140000 },
    { id: 3, name: "One Plus 12", price: 80000 },
  ]);

  const [searchText, updateSearchText] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      return p.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }, [searchText, products]);

  return (
    <>
      <div class="app">
        <div>{timer}</div>
        <label>Input : </label>
        <input
          type="text"
          value={searchText}
          onChange={(e) => updateSearchText(e.target.value)}
          placeholder="searchText..."
          style={{ margin: "5px" }}
        />
        <table>
          <tr>
            <td> S.No</td>
            <td>Name</td>
            <td>Price</td>
          </tr>
          {filteredProducts.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
