import { useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

const FilterSection = () => {
  const [activeTab, setActiveTab] = useState("Kirim");
  // const [kassa, setKassa] = useState("");
  // const [plastik, setPlastik] = useState("");

  // const handleKassaChange = (event) => {
  //   setKassa(event.target.value);
  // };

  // const handlePlastikChange = (event) => {
  //   setPlastik(event.target.value);
  // };

  const tabs = ["Kirim", "Chiqim", "Vaucher"];

  return (
    <div>
      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl transition-colors duration-200 ${activeTab === tab
              ? "bg-blue-600 text-white"
              : "bg-white text-black"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 p-4 bg-white shadow-md rounded-md">
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Export
        </button>
        <Select
          placeholder="Select a pet…"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>

        <input
          style={{ minWidth: 300 }}
          type="date"
          className="px-4 py-2 border rounded bg-gray-100"
        />
        <Select
          placeholder="Select a pet…"
          indicator={<KeyboardArrowDown />}
          disablePortal // <-- Bu select ochilganda joyida qolishini ta'minlaydi
          sx={{
            width: 240,
            [`& .${selectClasses.indicator}`]: {
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
          slotProps={{
            listbox: {
              sx: {
                position: "absolute", // <-- Bu select opsiyalarini o'z joyida ochilishiga yordam beradi
                zIndex: 1000, // <-- Element oldinga chiqib turishi uchun
              },
            },
          }}
        >
          <Option value="dog">Dog</Option>
          <Option value="cat">Cat</Option>
          <Option value="fish">Fish</Option>
          <Option value="bird">Bird</Option>
        </Select>

      </div>
    </div>
  );
};

export default FilterSection;
