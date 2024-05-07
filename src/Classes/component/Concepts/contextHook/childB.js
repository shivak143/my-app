import { useContext } from "react";
import { ChildC } from "./childC";
import { context } from "./parent";
export function ChildB() {
    let data = useContext(context);
  return (
    <>
      <h3>This is Child - B Component</h3>
      <p>product name : {data.name}</p>
      <ChildC></ChildC>
    </>
  );
}
