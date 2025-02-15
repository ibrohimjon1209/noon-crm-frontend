import React from "react";
import New_students from "./childs/new_students/New_students";
import { Route, Routes } from "react-router-dom";

const Teachers = () => {
  return (
    <Routes>
      <Route path="new-student-list" element={<New_students />} />
    </Routes>
  );
};

export default Teachers;
