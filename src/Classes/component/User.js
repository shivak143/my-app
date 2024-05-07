import { Link, Outlet } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
function User() {
  let { id,name } = useParams();
  let queryParams = useLocation();
  queryParams = new URLSearchParams(queryParams.search);

  let category = queryParams.get('category');
  let posts = queryParams.get('posts');

  return (
    <>
      <h2>This is user Component</h2>

      <h4>Route paramters</h4>
      <h4>Query paramters</h4>
      <h6>id : {id}</h6>
      <h6>name : {name}</h6>
      <h6>category : {category}</h6>
      <h6>posts : {posts}</h6>

      {/* <button>
        <Link to="orders">Orders</Link>
      </button>
      <button>
        <Link to="profile">profile</Link>
      </button>
      <Outlet /> */}
    </>
  );
}
export default User;

export function Orders() {
  return <h3>This is orders component.</h3>;
}
export function Profile() {
  return <h3>This is profiles component.</h3>;
}
