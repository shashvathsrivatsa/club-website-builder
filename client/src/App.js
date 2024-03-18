import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
import Home from "./components/home.js";
export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
