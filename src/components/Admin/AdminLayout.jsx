import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      
      <Sidebar
        isOpen={isOpen}
        closeSidebar={() => setIsOpen(false)}
      />

      {/* Main Content */}
      <main className="min-h-screen lg:ml-64">
        
        {/* Mobile Header */}
        <div className="flex h-16 items-center border-b border-slate-200 bg-white px-4 lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg bg-slate-900 px-3 py-2 text-white"
          >
            ☰
          </button>

          <h1 className="ml-4 font-bold text-slate-800">
            CarPoint Admin
          </h1>
        </div>

        <div className="">
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default AdminLayout;