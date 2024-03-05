import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login.js";
export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
