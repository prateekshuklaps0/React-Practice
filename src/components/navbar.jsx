import { Link, NavLink } from "react-router-dom";

const style = {
  display: "flex",
  alignItem: "center",
  justifyContent: "space-evenly",
  border: "1px solid grey",
  padding: "10px",
};

const links = [
  { to: "/", text: "Home" },
  { to: "./about", text: "About" },
  { to: "./login", text: "LogIn" },
  { to: "./signup", text: "SignUp" },
];

const inactveLinkStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  color: "blue",
};

const actveLinkStyle = {
  textDecoration: "none",
  fontWeight: "bold",
  color: "red",
};

function Nav() {
  return (
    <div style={style}>
      {links.map((item, ind) => (
        <NavLink
          className="navLinks"
          style={({ isActive }) => {
            return isActive ? actveLinkStyle : inactveLinkStyle;
          }}
          key={item.to}
          to={item.to}
        >
          {item.text}
        </NavLink>
      ))}
    </div>
  );
}

export default Nav;
