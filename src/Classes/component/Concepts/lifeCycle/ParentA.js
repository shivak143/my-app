import React from "react";
import { ChildA } from "./ChildA";
class ParentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 10,
      show: true,
    };
  }
  render() {
    return (
      <>
        <h2>This is getDerivedStateFromProps Example</h2>
        <h5>This is Parent Component</h5>
        {this.state.show && <ChildA data={this.state.x} />}
        <button
          onClick={() => {
            this.setState({ show: false });
          }}
        >
          hide
        </button>
        <button
          onClick={() => {
            this.setState({ show: true });
          }}
        >
          show
        </button>

        <button
          onClick={() => {
            this.setState({ x: this.state.x + 10 });
          }}
        >
          Click
        </button>
      </>
    );
  }
}
export default ParentA;
