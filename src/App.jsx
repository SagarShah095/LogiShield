import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./Common/Sidebar";
import Dashboard from "./Pages/Admin/Dashboard";
import Shipment from "./Pages/Admin/Shipment";
import Management from "./Pages/Admin/Management";
import AlertCenter from "./Pages/Admin/AlertCenter";
import Home from "./Pages/Employee/Home";
import { useEffect } from "react";
import Services from "./Pages/Employee/Services";
import About from "./Pages/Employee/About";
import Track from "./Pages/Employee/Track";
import ContactUs from "./Pages/Employee/ContactUs";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebarRoutes = ["/home"]; // List of routes where sidebar should be hidden

  const shouldHideSidebar = hideSidebarRoutes.includes(location.pathname);

  return (
    <div className="flex bg-[#F9F9F9] w-full">
      {!shouldHideSidebar && <Sidebar />}
      <div className={`w-full mt-14 md:mt-0 p-4`}>{children}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/shipment" element={<Shipment />} />
        <Route path="/management" element={<Management />} />
        <Route path="/alert-center" element={<AlertCenter />} />
      </Routes>
      {/* Add more routes as needed */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/track-shipment" element={<Track />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
