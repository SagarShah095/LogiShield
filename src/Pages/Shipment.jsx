import React from "react";
import NavbarShipment from "./../Components/Shipment/NavbarShipment";
import Export from "../Components/Shipment/Export";
import ShipFilter from "../Components/Shipment/ShipFilter";
import Date from "./../Components/Shipment/Date";
import Table from './../Components/Shipment/Table';

const Shipment = () => {
  return (
    <div>
      <NavbarShipment />
      <Export />
      <div className="bg-white mt-10 p-4 rounded-xl">
        <ShipFilter />
        <Date />
        <Table />
      </div>
    </div>
  );
};

export default Shipment;
