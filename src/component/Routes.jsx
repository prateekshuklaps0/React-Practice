import { useState, useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import LogIn from "./LogIn";
import SingleProduct from "./SingleProduct";
import NotFound from "./NotFound";
import PrivateRoute from "./PrivateRoute";

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/about"
        element={
          <PrivateRoute>
            <About />
          </PrivateRoute>
        }
      />
      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<LogIn />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}
export default RoutesPages;
