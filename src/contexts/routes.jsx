import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Login from "../components/login";
import Signup from "../components/signup";

export default function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}
