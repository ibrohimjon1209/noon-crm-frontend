import React from "react";
import New_students from "./childs/new_students/New_students";
import { Route, Routes } from "react-router-dom";
import Active_students from "./childs/active_students/Active_students";
import Archive_students from "./childs/archive_student/Archive_students";
import Students_list from "./childs/students_list/Students_list";
import Parents from "./childs/parents/Parents";
import Profile from "./childs/student_profile/student_profile_main";

const Teachers = () => {
  return (
    <Routes>
      <Route path="new-student-list" element={<New_students />} />
      <Route path="students-active" element={<Active_students />} />
      <Route path="students-archive" element={<Archive_students />} />
      <Route path="students-list" element={<Students_list />} />
      <Route path="students-parent" element={<Parents />} />
      <Route path="profile/*" element={<Profile />} />
    </Routes>
  );
};

export default Teachers;
