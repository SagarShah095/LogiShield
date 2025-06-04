import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from './Common/Sidebar';
import Dashboard from './Pages/Dashboard';
import Shipment from './Pages/Shipment';
import Management from "./Pages/Management";
import AlertCenter from "./Pages/AlertCenter";

function App() {
  return (
    <Router>
      <div className="flex bg-[#F9F9F9] w-full">
        <Sidebar />
        <div className="w-full mt-14 md:mt-0 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/shipment" element={<Shipment />} />
            <Route path="/management" element={<Management />} />
            <Route path="/alert-center" element={<AlertCenter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
