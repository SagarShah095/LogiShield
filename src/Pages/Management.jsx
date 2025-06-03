import React from "react";
import NavbarManagement from "../Components/Management/NavbarManagement";
import Schedule from "../Components/Management/Schedule";
import MultipleBtn from "../Components/Management/MultipleBtn";

const Management = () => {
  return (
    <div>
      <NavbarManagement />
      <Schedule />
      <MultipleBtn/>
    </div>
  );
};

export default Management;
