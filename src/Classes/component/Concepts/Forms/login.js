import { useRef, useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  // const [password,setPassword] = useState('')

  const pwd = useRef();

  return (
    <>
      <div className="border w-100 mt-5 m-auto p-3">
        <h2 className="text-primary text-center">Login Form</h2>
        <div className="mt-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-3">
          <label>Password</label>
          <input ref={pwd} type="password" className="form-control" />
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary w-100"
            onClick={() => {
              console.log("Email : ", email);
              console.log("Password :", pwd.current.value);
            }}
          >
            login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
