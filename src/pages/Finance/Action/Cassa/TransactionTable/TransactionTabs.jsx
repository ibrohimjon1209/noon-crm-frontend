const TransactionTabs = ({ activeTab, setActiveTab }) => {
    return (
      <div>
        <button className={activeTab === "transaction" ? "active" : ""} onClick={() => setActiveTab("transaction")}>
          Tranzaksiya
        </button>
        <button className={activeTab === "app" ? "active" : ""} onClick={() => setActiveTab("app")}>
          Ilova Orqali To‘lov
        </button>
      </div>
    );
  };
  
  export default TransactionTabs;
  