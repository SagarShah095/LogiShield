import React from "react";
import Navbar from "../Components/Dashboard/Navbar";
import Filter from "../Components/Dashboard/Filter";
import Section1 from "../Components/Dashboard/Section1";
import Chart from "../Components/Dashboard/Chart";
import Summary from "../Components/Dashboard/Summary";

const Dashboard = () => {
  return (
    <div className="md:container md:mx-auto w-fit md:w-full px-1 md:px-4">
      <Navbar />
      <Filter />
      <Section1/>
      <Chart/>
      <Summary />
    </div>
  );
};

export default Dashboard;
