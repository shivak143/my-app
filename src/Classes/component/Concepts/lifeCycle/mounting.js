import React from "react";
export class Mounting extends React.Component {
  //construtor is used to define state of the component
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <>
        <h4>constructor method</h4>
        <p>Counter : {this.state.count}</p>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click
        </button>
      </>
    );
  }
}
