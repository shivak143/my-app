import { Link } from "react-router-dom";
import "../../App.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'#e3f2fd'}}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              {/* <a class="nav-link active" aria-current="page" href="#">Home</a> */}
              <Link class="nav-link active" to="/login">
                login
              </Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Features</a> */}
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#">Pricing</a> */}
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              {/* <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a> */}
              <Link class="nav-link" to="/classes">Classes</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/user">User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <ul>
    //   <li>
    //     <Link to="/login">login</Link>
    //   </li>
    //   <li>
    //     <Link to="/">Home</Link>
    //   </li>
    //   <li>
    //     <Link to="/about">About</Link>
    //   </li>
    //   <li>
    //     <Link to="/classes">Classes</Link>
    //   </li>
    //   <li>
    //     <Link to="/user">User</Link>
    //   </li>
    // </ul>
  );
}
export default Header;
