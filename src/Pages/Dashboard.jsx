import React from "react";
import Navbar from "../Components/Navbar";
import Filter from "../Components/Filter";
import Section1 from "../Components/Section1";
import Chart from "../Components/Chart";
import Summary from "../Components/Summary";

const Dashboard = () => {
  return (
    <div className="container mx-auto w-full px-4 ">
      <Navbar />
      <Filter />
      <Section1/>
      <Chart/>
      <Summary />
    </div>
  );
};

export default Dashboard;
