import { createContext } from "react";
import { ChildA } from "./childA";
export const context = createContext();

export function Parents() {
  let isAdmin = "true";
  let product = {
    name: "Apple",
    price: 125000,
  };
  return (
    <>
      <context.Provider value={product}>
        <ChildA></ChildA>
      </context.Provider>
    </>
  );
}
