import React, { useState, useEffect, useContext } from "react";
import { useParams, useSearchParams, NavLink } from "react-router-dom";
import { Context } from "./ContextApi";

const ActiveStyle = {
  textDecoration: "none",
  color: "red",
};
const InActiveStyle = {
  textDecoration: "none",
  color: "black",
};

const NavDir = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
];

function NavBar() {
  const { isAuth, setIsAuth, setToken } = useContext(Context);

  return (
    <div
      style={{
        marginBottom: "20px",
        border: "1px solid grey",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      {NavDir.map((item, ind) => (
        <NavLink
          style={({ isActive }) => (isActive ? ActiveStyle : InActiveStyle)}
          to={item.to}
          key={item.label}
        >
          {item.label}
        </NavLink>
      ))}

      {!isAuth ? (
        <NavLink
          style={({ isActive }) => (isActive ? ActiveStyle : InActiveStyle)}
          to="/login"
        >
          Log In
        </NavLink>
      ) : (
        <button
          onClick={() => {
            setIsAuth((prev) => false);
            setToken((prev) => "");
          }}
        >
          Log Out
        </button>
      )}
    </div>
  );
}
export default NavBar;
