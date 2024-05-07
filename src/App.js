import Garage from "./Classes/Garage";
import { Tab } from "./Tab";
import ClassState from "./Classes/ClassState";
import FunctionalState from "./Classes/FunctionalState";
import BackgroundColor from "./Classes/BackgroundColor";
import CounterApp from "./Classes/CounterApp/counterApp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Classes/component/Home";
import About from "./Classes/component/About";
import Classes, { Products } from "./Classes/component/Classes";
import Header from "./Classes/component/Header";
import User, { Orders, Profile } from "./Classes/component/User";
import Login from "./Classes/component/Concepts/Forms/login";

export function App() {
  return (
    <>
      {/* <Garage>Functional Components</Garage>
    <ClassState/>
    <FunctionalState/> */}
      {/* <BackgroundColor/> */}
      {/* <CounterApp/> */}
      <BrowserRouter>
      <div className="w-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/classes" element={<Classes />}>
            {/* <Route path="product" element={<ProductApp />} />
            <Route path="prod" element={<Products />} /> */}
          </Route>
          <Route path="/user/:id/:name" element={<User />}>
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
