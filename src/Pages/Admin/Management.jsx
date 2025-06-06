import React from "react";
import NavbarManagement from './../../Components/Admin Components/Management/NavbarManagement';
import Schedule from './../../Components/Admin Components/Management/Schedule';
import MultipleBtn from './../../Components/Admin Components/Management/MultipleBtn';


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
