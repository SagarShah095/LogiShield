import React from "react";
import Navbar from './../../Components/Admin Components/Dashboard/Navbar';
import Filter from './../../Components/Admin Components/Dashboard/Filter';
import Section1 from './../../Components/Admin Components/Dashboard/Section1';
import Chart from './../../Components/Admin Components/Dashboard/Chart';
import Summary from './../../Components/Admin Components/Dashboard/Summary';



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
