import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import LoanInterface from "./Pages/LoanInterface";
import "./App.scss";
import { SuccessPage } from "./Pages/SuccessPage";
import Lender from "./Pages/Lender";
import LoanDetails from "./Pages/LoanDetails";
import { LoanApproval } from "./Pages/LoanApproval";
import LoanList from "./Pages/LoanList";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="loan-interface" element={<LoanInterface />} />
        <Route path="success-page" element={<SuccessPage />} />
        <Route path="lender" element={<Lender />} />
        <Route path="loan-details" element={<LoanDetails />} />
        <Route path="loan-approval" element={<LoanApproval />} />
        <Route path="loan-list" element={<LoanList />} />
      </Routes>
    </>
  );
}
export default App;
