import React from "react";
import SideNavbar from "../components/SideNavbar";

const Dashboard = () => {
  return (
    <div className="flex">
      <SideNavbar className="w-[15%]" />

      <section className="w-full">
        <div className="flex justify-between p-4 items-center">
          <h2 className="text-2xl font-serif">Dashboard</h2>
          <p>Time goes here</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
