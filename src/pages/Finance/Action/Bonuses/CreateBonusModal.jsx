import React, { useState } from "react";
import { Drawer, Button, Input } from "antd";

const CreateBonusModal = ({ onClose, addBonus, isModalOpen }) => {
  const [bonus, setBonus] = useState({
    type: "",
    fullName: "",
    previousAmount: 0,
    amount: 0,
    nextAmount: 0,
    note: "",
    createdAt: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setBonus({ ...bonus, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBonus(bonus);
    onClose();
  };
  const inputStyle = {
    height: "45px",
    borderRadius: "8px",
    fontSize: "16px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    ':hover': {
      borderColor: "#40a9ff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    },
    ':focus': {
      borderColor: "#1890ff",
      boxShadow: "0 0 0 2px rgba(24,144,255,0.2)"
    }
  };
  return (
    <Drawer 
    title="Bonus yaratish"
    placement="right"
    width={500} 
    onClose={onClose} 
    open={isModalOpen}
  >  
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Input name="type" placeholder="Bonus turi" style={inputStyle} onChange={handleChange} required />
        <Input name="fullName" placeholder="To'liq ismi" style={inputStyle} onChange={handleChange} required />
        <Input name="previousAmount" type="number" placeholder="Oldingi miqdor" style={inputStyle} onChange={handleChange} required />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button onClick={onClose} type="default">
            Orqaga
          </Button>
          <Button type="primary" htmlType="submit">
            Saqlash
          </Button>
        </div>
      </form>
    </Drawer>
  );
};

export default CreateBonusModal;
