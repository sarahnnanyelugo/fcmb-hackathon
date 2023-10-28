import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import LoanInterface from "./Pages/LoanInterface";
import "./App.scss";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loan-interface" element={<LoanInterface />} />
      </Routes>
    </>
  );
}
export default App;
