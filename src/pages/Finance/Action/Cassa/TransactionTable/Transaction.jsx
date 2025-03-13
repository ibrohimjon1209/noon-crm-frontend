import TransactionTabs from "./TransactionTabs";
import TransactionTable from "./TableTransaction";
// import TransactionSummary from "./TransactionSum";

const Transaction = () => {
  return (
    <div>
      <TransactionTabs />
      {/* <TransactionSummary /> */}
      <TransactionTable />
    </div>
  );
};

export default Transaction;
