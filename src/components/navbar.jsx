import { Link, NavLink } from "react-router-dom";
import styles from "../moduleCss/nav.module.css";

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

function Nav() {
  return (
    <div style={style}>
      {links.map((item, ind) => (
        <NavLink
          className={({ isActive }) => {
            return isActive ? styles.activeLinkStyle : styles.inactiveLinkStyle;
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
