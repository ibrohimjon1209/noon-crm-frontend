import React, { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

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
      anchor="right"
      open={isModalOpen}
      onClose={onClose}
    >
      <Box
        sx={{ width: 400 }}
        role="presentation"
      >
        <form onSubmit={handleSubmit} style={{ padding: 20 }}>
          <input type="text" name="type" placeholder="Bonus turi" onChange={handleChange} required />
          <input type="text" name="fullName" placeholder="To'liq ismi" onChange={handleChange} required />
          <input type="number" name="previousAmount" placeholder="Oldingi miqdor" onChange={handleChange} required />
          <input type="number" name="amount" placeholder="Miqdori" onChange={handleChange} required />
          <input type="number" name="nextAmount" placeholder="Keyingi miqdor" onChange={handleChange} required />
          <input type="text" name="note" placeholder="Izoh" onChange={handleChange} />
          <Button type="submit" variant="contained">Saqlash</Button>
          <Button onClick={onClose}>Bekor qilish</Button>
        </form>
      </Box>
    </Drawer>
  );
};

export default CreateBonusModal;
