import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import LoanInterface from "./Pages/LoanInterface";
import "./App.scss";
import { SuccessPage } from "./Pages/SuccessPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loan-interface" element={<LoanInterface />} />
        <Route path="success-page" element={<SuccessPage />} />
      </Routes>
    </>
  );
}
export default App;
