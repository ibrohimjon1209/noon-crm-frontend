import FilterSection from "./FIlterSection";
import TableSection from "./TableSection";
import SummarySection from "./SummarySection";

const Input_output = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <FilterSection />
      <TableSection />
      <SummarySection/>
    </div>
  );
};

export default Input_output;
