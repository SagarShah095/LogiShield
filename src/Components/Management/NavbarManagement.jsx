import React, { useState, useRef, useEffect } from "react";

const NavbarManagement = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container mx-auto relative">
      <div className="my-4 flex items-center justify-between w-full">
        <div className="flex">
          <h1 className="text-2xl font-bold">Fleet & Driver Managment</h1>
        </div>

        <div className="flex gap-2 relative">
          {/* Bell Icon */}
          <div
            className="bg-white p-2 cursor-pointer hover:bg-gray-500/10 duration-200 rounded-lg"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <img src="/assets/Bell.png" alt="bell" />
          </div>

          {/* Settings Icon */}
          <div className="bg-white p-2 cursor-pointer hover:bg-gray-500/10 duration-200 rounded-lg">
            <img src="/assets/Setting.png" alt="settings" />
          </div>
        </div>
      </div>

      {/* Full-screen Notification Overlay */}
      {showNotifications && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-start justify-end p-4">
          <div
            ref={notifRef}
            className="w-[350px] bg-white rounded-xl shadow-xl p-4 text-sm mt-8 z-50"
          >
            <h2 className="text-base font-semibold mb-2">Notification</h2>

            <div className="mb-2">
              <h3 className="font-medium ">Critical Alerts</h3>
              <p className="text-gray-700">
                Alert: Cargo in Container #A12 exceeded safe temperature
                threshold (8°C &gt; 4°C). Immediate action required to prevent
                spoilage.
              </p>
            </div>

            <div className="mb-2">
              <h3 className="font-medium ">Route Incidents</h3>
              <p className="text-gray-700">
                Emergency: A major accident has been reported on Highway A47
                near Mile Marker 102. Shipments using this route will experience
                delays. Please reroute affected vehicles immediately.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-medium ">Maintenance Flags</h3>
              <p className="text-gray-700">
                Reminder: Truck #TX-90B is due for routine maintenance tomorrow
                at 10:00 AM. Please ensure the vehicle is routed to the service
                center to avoid future breakdowns.
              </p>
            </div>

            <div className="flex justify-end gap-4 pt-2 border-t mt-2  font-medium text-sm">
              <button
                onClick={() => setShowNotifications(false)}
                className="hover:underline text-[#0D47A1]"
              >
                Clear all
              </button>
              <div className="bg-[#0D47A1] p-2 rounded-lg">
                <button className="hover:underline text-white">View all</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarManagement;
