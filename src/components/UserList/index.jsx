import { Link, Outlet } from "react-router-dom";

const UserList = () => {
  return (
    <>
      <h1>User List</h1>
      <ul>
        <li>
          <Link to="/users/1">Febrianto</Link>
        </li>
        <li>
          <Link to="/users/2">Leonardo</Link>
        </li>
      </ul>
      <Link to={"/users/admin"}>Go To Admin Page</Link>

      <Outlet />
    </>
  );
};

export default UserList;
