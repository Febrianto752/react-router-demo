import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    console.log(isActive);
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={navLinkStyles} to={"/"} end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/about" end>
            About
          </NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} to="/about/contacts" end>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
