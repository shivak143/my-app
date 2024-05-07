import { MemoHook } from "./Concepts/memoHook/memoHook";
import { FilterProductsUsingMemoHook } from "./Concepts/memoHook/filterProducts";
import { Parent } from "./Concepts/childToParent/parent";
import { Mounting } from "./Concepts/lifeCycle/mounting";
import ParentA from "./Concepts/lifeCycle/ParentA";
function About() {
  return (
    <>
      <div style={{ margin: 5 }}>
        <h1>This is About Component.</h1>
        <MemoHook />
        <h2>Filtered Products Using Memo Hook</h2>
        <FilterProductsUsingMemoHook />
        <h2>Pass Data from Child to Parent </h2>
        <Parent />
        <h2>Component Life Cycle</h2>
        <Mounting />
        <ParentA/>
      </div>
    </>
  );
}
export default About;
