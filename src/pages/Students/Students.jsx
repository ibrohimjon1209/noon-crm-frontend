import React from "react";
import New_students from "./childs/new_students/New_students";
import { Route, Routes } from "react-router-dom";
import Active_students from "./childs/active_students/Active_students";
import Archive_students from "./childs/archive_student/Archive_students";

const Teachers = () => {
  return (
    <Routes>
      <Route path="new-student-list" element={<New_students />} />
      <Route path="students-active" element={<Active_students />} />
      <Route path="students-archive" element={<Archive_students />} />
    </Routes>
  );
};

export default Teachers;
