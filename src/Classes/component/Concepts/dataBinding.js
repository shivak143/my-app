import { TextField } from "@mui/material";
import { Component, useState } from "react";
import "./textField.css";


// funtion example
export function OneWayBinding() {
  const [subject, setSubject] = useState("Core Java");
  return (
    <div>
      <h2>Data Binding one-way</h2>
      <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
      <p>
        <b>{subject}</b> Tutorial
      </p>
    </div>
  );
}

//class example
export class OneWay extends Component {
  constructor() {
    super();
    this.state = {
      subject: "ReactJS",
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Data Binding one-way</h2>
        <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
        <p>
          <b>{this.state.subject}</b> Tutorial
        </p>
      </div>
    );
  }
}

// funtion example
export function TwoWayBinding() {
  const [subject, setSubject] = useState("Core Java");

  const handleChange = (e) => {
    setSubject(e.target.value);
  };
  return (
    <div>
      <h2>Data Binding two-way</h2>
      <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
      <p>Input Value : {subject}</p>
      <TextField className="customTextField" value={subject} onChange={(e) => handleChange(e)} />
    </div>
  );
}

//class example for two-way binding
export class TwoWay extends Component {
  constructor() {
    super();
    this.state = {
      subject: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      subject: event.target.value,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center",margin: 20}}>
        <h2>Data Binding two-way</h2>

        <h4 style={{ color: "#68cf48" }}>GeeksForGeeks</h4>
        <p>Input value : {this.state.subject}</p>
        <TextField className="customTextField" variant='standard' label = "Input Value" value={this.state.subject} onChange={this.handleChange} />
        
      </div>
    );
  }
}
