import { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";


const TransactionTabs = () => {
  const [activeTab, setActiveTab] = useState("Tranzaksiya");
  const tabs = ["Tranzaksiya", "Ilova Orqali To'lov"];

  return (
    <div className="flex justify-between items-center">
      <div className="flex p-1 rounded-lg mt-4 ml-4 mb-6 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-sm transition-colors duration-200  ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-black"
              }`}
          > 
            {tab}
          </button>
        ))}
      </div>
      <div className="flex mr-6 gap-6">
        <IoNotificationsOutline
          className="text-gray-500 hover:text-blue-500 bg-transparent hover:bg-blue-100 transition duration-300 cursor-pointer rounded-sm"
          style={{ fontSize: 30 }}
        />
        <IoEyeOutline
          className="text-gray-500 hover:text-blue-500 bg-transparent hover:bg-blue-100 transition duration-300 cursor-pointer rounded-sm"
          style={{ fontSize: 30 }}
        />
      </div>
    </div>
  );
};
export default TransactionTabs;
// defe