import {
  OneWay,
  OneWayBinding,
  TwoWay,
  TwoWayBinding,
} from "./Concepts/dataBinding";
import ProductApp from "./Concepts/product/productApp";
import {
  Example,
  HookCounterOne,
  RefHook,
  MultipleUseRefHook,
} from "./Concepts/testuseEffect";
import { Home } from "./Concepts/customHooks";
import { Parent } from "./Concepts/propsDrilling/parent";
import { Parents } from "./Concepts/contextHook/parent";
function Classes() {
  return (
    <>
      <div style={{ margin: 15 }}>
        <h1>This is Classes Component.</h1>
        <h4>Props Destructuring</h4>
        <ProductApp />
        <OneWayBinding />
        <TwoWayBinding />
        <h2>Data binding using based Component</h2>
        <OneWay />
        <TwoWay />
        <Example />
        <HookCounterOne />

        <h2>Use Ref Hook</h2>
        <RefHook />
        <h2>Multiple Elements Use Ref Hook</h2>
        <MultipleUseRefHook />

        <h2>Custom Hooks</h2>
        <Home />

        <h2>Props Drilling</h2>
        <Parent />

        <h2>Context Hook</h2>
        <Parents/>
      </div>
    </>
  );
}
export default Classes;
