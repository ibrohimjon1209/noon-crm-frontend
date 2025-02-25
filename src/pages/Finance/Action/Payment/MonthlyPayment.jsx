import SalaryTable from "./SalaryTable";
import SalaryActions from "./SalaryActions";

const MonthlyPayment = ({ payments }) => {
  return (
    <div>
      <SalaryActions />
      <SalaryTable data={payments} />
    </div>
  );
};

export default MonthlyPayment;
