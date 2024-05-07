import { GrandChild } from "./grandChild";
export const Children = ({ data }) => {
  return (
    <>
      <h4>This is children component</h4>
      <GrandChild data={data}></GrandChild>
    </>
  );
};
