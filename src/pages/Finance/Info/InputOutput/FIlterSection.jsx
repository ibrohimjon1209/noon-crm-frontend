import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterSection = () => {
  const [activeTab, setActiveTab] = useState("Kirim");
  const [kassa, setKassa] = useState("");
  const [plastik, setPlastik] = useState("");

  const handleKassaChange = (event) => {
    setKassa(event.target.value);
  };

  const handlePlastikChange = (event) => {
    setPlastik(event.target.value);
  };

  const tabs = ["Kirim", "Chiqim", "Vaucher"];

  return (
    <div>
      <div className="flex bg-gray-100 p-1 rounded-xl mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-xl transition-colors duration-200 ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-white text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded">
        Export
      </button>
      <div className="flex items-center justify-center gap-4 p-4 bg-white shadow-md rounded-md">
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Kassa</InputLabel>
          <Select
            value={kassa}
            label="Kassa"
            onChange={handleKassaChange}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: 300,
                },
              },
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
            }}
          >
            <MenuItem value="kassa1">Kassa 1</MenuItem>
            <MenuItem value="kassa2">Kassa 2</MenuItem>
            <MenuItem value="kassa3">Kassa 3</MenuItem>
          </Select>
        </FormControl>

        <input
          style={{ minWidth: 300 }}
          type="date"
          className="px-4 py-2 border rounded bg-gray-100"
        />

        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>To'lov turi</InputLabel>
          <Select
            value={plastik}
            label="Plastik"
            onChange={handlePlastikChange}
          >
            <MenuItem value="plastik1">Naqd</MenuItem>
            <MenuItem value="plastik2">Plastik</MenuItem>
            <MenuItem value="plastik3">Terminal</MenuItem>
            <MenuItem value="plastik4">Payme</MenuItem>
            <MenuItem value="plastik5">Click</MenuItem>
            <MenuItem value="plastik6">Uzum</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default FilterSection;
