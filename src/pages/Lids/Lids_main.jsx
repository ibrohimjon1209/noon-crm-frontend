import React from "react";
import { Routes, Route } from "react-router-dom";
import First_lesson from "./childs/first_lesson/first_lesson_main";
import Orders from "./childs/orders/orders_main";

const Lids_main = () => {
  return (
      <Routes>
        <Route path="lesson" element={<First_lesson />} />
        <Route path="orders" element={<Orders />} />
      </Routes>
)};

export default Lids_main;
