import React, { useState, useEffect, useRef } from "react";
import "./textField.css";
const styles = {
  button: {
    margin: 5,
    padding: 5,
  },
};
export function Example() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  // useEffect(() => {
  //   console.log("Inside useEffect");
  // });

  // useEffect(() => {
  //   console.log("Inside useEffect");
  // },[]);

  useEffect(() => {
    console.log("Inside useEffect");
  }, [timer]);

  return (
    <div>
      {/* {console.log("Inside component")} */}
      <p>You clicked {count} times</p>
      <p>Timer : {timer} </p>
      <button style={styles.button} onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button style={styles.button} onClick={() => setTimer(timer + 1)}>
        update timer
      </button>
    </div>
  );
}

export function HookCounterOne() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `you clicked ${count} times`;
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click {count} times
      </button>
    </>
  );
}

export function RefHook() {
  const h1ele = useRef(null);
  const x = useRef(10);
  const [y, setY] = useState(0);
  let z = 1000;
  return (
    <>
      <h1 ref={h1ele}>This is heading Tag</h1>
      <button
        onClick={() => {
          console.log(h1ele);
          console.log(h1ele.current);
          console.dir(h1ele.current);
        }}
      >
        Click
      </button>

      <h1>x value : {x.current}</h1>
      <button
        onClick={() => {
          console.log(x);
          console.log(x.current);
          x.current = x.current + 10;
          setY(y + 10);
          z = z + 100;
          console.log(z);
        }}
      >
        Click
      </button>
    </>
  );
}

export function MultipleUseRefHook() {
  let arr = new Array(10).fill(null);
  let headings = useRef([]);
  function changeHeadingStyle(e) {
    for (let ele of headings.current) {
      ele.classList.remove("primary");
    }
    e.target.classList.add("primary");
  }
  return (
    <>
      {arr.map((ele, index) => {
        return (
          <h1
            ref={(h1) => {
              headings.current[index] = h1;
            }}
            onClick={(e) => {
              changeHeadingStyle(e);
            }}
          >
            This is heading {index + 1}
          </h1>
        );
      })}
    </>
  );
}
