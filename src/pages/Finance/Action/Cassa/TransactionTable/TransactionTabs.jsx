import { useState } from "react";

const TransactionTabs = () => {
  const [activeTab, setActiveTab] = useState("Tranzaksiya");
  const tabs = ["Tranzaksiya", "Ilova Orqali To'lov"];
  
  return (
    <div className="flex p-1 rounded-lg mt-4 ml-4 mb-6 ">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 rounded-sm transition-colors duration-200  ${
            activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-black"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TransactionTabs;
