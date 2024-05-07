import { useContext } from "react";
import { context } from "./parent";
export function ChildC() {
  const data = useContext(context);
  return (
    <>
      <h3>This is Child - C Component</h3>
      <p>isAdmin : {data.name}</p>
    </>
  );
}
