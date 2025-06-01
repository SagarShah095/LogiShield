import { useState } from "react";
import Sidebar from "./Common/Sidebar";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <>
      <div className="flex bg-[#F9F9F9] w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
