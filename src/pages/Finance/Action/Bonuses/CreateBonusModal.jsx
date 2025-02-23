import React, { useState } from "react";

const CreateBonusModal = ({ onClose, addBonus }) => {
  const [bonus, setBonus] = useState({
    type: "",
    fullName: "",
    previousAmount: 0,
    amount: 0,
    nextAmount: 0,
    note: "",
    createdAt: new Date().toISOString().split("T")[0], // Sana avtomatik
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
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>Bonus yaratish</h3>
        <input type="text" name="type" placeholder="Bonus turi" onChange={handleChange} required />
        <input type="text" name="fullName" placeholder="To‘liq ismi" onChange={handleChange} required />
        <input type="number" name="previousAmount" placeholder="Oldingi miqdor" onChange={handleChange} required />
        <input type="number" name="amount" placeholder="Miqdori" onChange={handleChange} required />
        <input type="number" name="nextAmount" placeholder="Keyingi miqdor" onChange={handleChange} required />
        <input type="text" name="note" placeholder="Izoh" onChange={handleChange} />
        <button type="submit">Saqlash</button>
        <button type="button" onClick={onClose}>Bekor qilish</button>
      </form>
    </div>
  );
};

export default CreateBonusModal;
