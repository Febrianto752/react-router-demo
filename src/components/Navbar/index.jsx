import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  const auth = useAuth();
  console.log(auth);

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={navLinkStyles} to={"/"} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to={"/profile"} end>
            Profile
          </NavLink>
        </li>
        {!auth.user ? (
          <li>
            <NavLink style={navLinkStyles} to={"/login"} end>
              Login
            </NavLink>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
