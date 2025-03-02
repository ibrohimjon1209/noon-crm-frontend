import React, { useState } from "react";
// import { Drawer, Button, Input } from "antd";

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

  return (
    <Drawer 
    title="Bonus yaratish" 
    placement="right" 
    onClose={onClose} 
    open={isModalOpen}>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Input name="type" placeholder="Bonus turi" onChange={handleChange} required />
        <Input name="fullName" placeholder="To'liq ismi" onChange={handleChange} required />
        <Input name="previousAmount" type="number" placeholder="Oldingi miqdor" onChange={handleChange} required />
        <Input name="amount" type="number" placeholder="Miqdori" onChange={handleChange} required />
        <Input name="nextAmount" type="number" placeholder="Keyingi miqdor" onChange={handleChange} required />
        <Input name="note" placeholder="Izoh" onChange={handleChange} />

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
