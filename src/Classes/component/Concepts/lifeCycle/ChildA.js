import React from "react";
export class ChildA extends React.Component {
  constructor(props) {
    super(props);
    console.log("Inside Constructor");
    this.state = {
      count: this.props.data + 10,
      product: "Dummy",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps");
    return { count: props.data + 10 };
  }
  shouldComponentUpdate() {
    console.log("Inside shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Inside getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Did update");
  }

  componentDidMount() {
    console.log("Did mount");
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products/1")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({ ...this.state, product: json.title });
        });
    }, 1000);
  }

  componentWillUnmount(){
    console.log("Inside unmount")
  }
  render() {
    console.log("render");
    return (
      <>
        <h6>This is ChildA Component</h6>
        <p>Props : {this.props.data}</p>
        <p>Count : {this.state.count}</p>
        <p>Product Title : {this.state.product}</p>
      </>
    );
  }
}
