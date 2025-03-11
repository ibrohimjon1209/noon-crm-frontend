import FilterSection from "./FIlterSection";
import TableSection from "./TableSection";
import SummarySection from "./SummarySection";
import { useState } from "react";

const Input_output = () => {
  const [tableData, setTableData] = useState([
    { id: 1, type: "Xarajat", amount: 250000 },
    { id: 2, type: "Daromad", amount: 500000 },
  ]);
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <FilterSection data={tableData} />
      <TableSection  data={tableData} />
      <SummarySection data={tableData} />
    </div>
  );
};

export default Input_output;
