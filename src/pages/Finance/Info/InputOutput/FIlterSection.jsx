import { useState } from "react";

const FilterSection = () => {
  const [activeTab, setActiveTab] = useState("Kirim");

  const tabs = ["Kirim", "Chiqim", "Vaucher"];

  return (
    <div>
      {/* Tablar */}
      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl transition-colors duration-200 ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Export</button>
        <div className="flex items-center justify-center p-4 bg-white shadow-md rounded-md">
          <select className="px-4 py-2 border rounded">
            <option>Kassa</option>
          </select>
          <input type="date" className="px-4 py-2 border rounded" />
          <select className="px-4 py-2 border rounded">
            <option>Plastik</option>
          </select>
        </div>
      </div>
  );
};

export default FilterSection;
