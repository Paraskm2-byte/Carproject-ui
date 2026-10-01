import { useState } from "react";
import RevenueChart from "./RevenueChart";
import Sidebar from "./Sidebar";
import Activity from "./Activity";
import QuickActions from "./QuickActions";
import Topbar from "./Topbar";
import StatCards from "./StatCards";
import Footer from "./Footeradmin";
import RecentBookings from "./RecentBookings";
import RecentUsers from "./RecentUsers";
import LatestCars from "./LatestCars";
const Dashboard = () => {

  return (
    <div className="flex min-h-screen bg-slate-950">

   

      {/* Main Content */}
      <div className={`transition-all duration-300  ? "lg:ml-72" : "ml-0"
        `}
      >

        {/* Topbar */}

        <Topbar/>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 lg:p-8">

          {/* Statistics */}
          <StatCards />

          {/* RevenueChart */}
          <RevenueChart />
          {/* Activity */}
          <Activity />
          {/* LatestCars */}
          <LatestCars />
          {/* RecentUsers */}
          <RecentUsers />

          {/* RecentBookings */}
          <RecentBookings />
          {/* QuickActions */}
          <QuickActions />
          {/*Footer */}
          <Footer />
        </main>

      </div>

    </div>
  );
};

export default Dashboard;