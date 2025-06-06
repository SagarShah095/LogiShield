import React from "react";
import NavbarShipment from './../../Components/Admin Components/Shipment/NavbarShipment';
import Export from './../../Components/Admin Components/Shipment/Export';
import ShipFilter from './../../Components/Admin Components/Shipment/ShipFilter';
import Date from './../../Components/Admin Components/Shipment/Date';
import Table from '../../Components/Admin Components/Shipment/Table';




const Shipment = () => {
  return (
    <div className="md:container md:mx-auto w-fit md:w-full px-1 md:px-4">
      <NavbarShipment />
      <Export />
      {/* <div className="bg-white mt-10 p-4 rounded-xl"> */}
        <ShipFilter />
        <Date />
        <Table />
      {/* </div> */}
    </div>
  );
};

export default Shipment;
