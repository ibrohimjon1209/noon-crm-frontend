import { useState } from "react";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';

const FilterSection = () => {
  const [activeTab, setActiveTab] = useState("Kirim");
  const [selectedDate, setSelectedDate] = useState(null);

  const tabs = ["Kirim", "Chiqim", "Vaucher"];

  return (
    <div>
      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl transition-colors duration-200 ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-black"
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
          placeholder="Kassa"
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
          <Option value="dog">User 1</Option>
          <Option value="cat">User 2</Option>
        </Select>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}
            slotProps={{ textField: { size: 'small' } }}
            sx={{ minWidth: 300 }}
          />
        </LocalizationProvider>

        <Select
          placeholder="To'lov turi"
          indicator={<KeyboardArrowDown />}
          disablePortal
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
                position: "absolute",
                zIndex: 1000,
              },
            },
          }}
        >
          <Option value="dog">Naqd</Option>
          <Option value="cat">Plastik</Option>
          <Option value="fish">Terminal</Option>
          <Option value="bird">Payme</Option>
          <Option value="bird">Click</Option>
          <Option value="bird">Uzum</Option>
        </Select>
      </div>
    </div>
  );
};

export default FilterSection;
