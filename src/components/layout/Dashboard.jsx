import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  //logica
  const navigate = useNavigate();
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          sidebarToggle ? "ml-0" : "ml-64"
        }`}
      >
        {/* Navbar fijo */}
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />

        {/* Contenido desplazable */}
        <div className="flex-1 overflow-auto p-1 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
