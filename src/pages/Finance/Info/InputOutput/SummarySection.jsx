const SummarySection = ({data}) => {
  const totalSum = data.reduce((sum, item) => sum + item.amount, 0);

    return (
      <div className="p-4 bg-white shadow-md rounded-md mt-4 flex justify-between">
        <p>Jami</p>
        <p>{totalSum.toLocaleString()} so‘m</p>
      </div>
    );
  };
  
  export default SummarySection;
  
