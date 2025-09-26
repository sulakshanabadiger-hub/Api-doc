import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import InitiateState from "./pages/InitiateState";
import GAApproval from "./pages/GAApproval";
import GAApprovalPurchase from "./pages/GAApprovalPurchase";
import Report from "./pages/Report";   // ✅ added

function App() {
  const location = useLocation();

  // Map each path to a title
  const pageTitles = {
    "/": "Employee Initiate",
    "/initiatestate": "Employee Initiate",
    "/GAApproval": "GA Approval",
    "/GAApprovalPurchase": "GA Approval Purchase",
    "/report": "Report",   // ✅ added
  };

  const currentTitle =
    pageTitles[location.pathname.toLowerCase()] || "My App";

  return (
    <>
      <h1
        className="title"
        style={{ fontWeight: "700", fontSize: "20px", fontStyle: "bold" }}
      >
        <Header title={currentTitle} />
      </h1>
      <Navbar />
      <div className="app-container">
        <Routes>
          {/* Default route should open InitiateState1 */}
          <Route path="/" element={<InitiateState />} />
          <Route path="/initiatestate" element={<InitiateState />} />
          <Route path="/GAApproval" element={<GAApproval />} />
          <Route path="/GAApprovalPurchase" element={<GAApprovalPurchase />} />
          <Route path="/report" element={<Report />} />   {/* ✅ added */}
        </Routes>
      </div>
    </>
  );
}

export default App;
