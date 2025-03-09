import React, { useState } from 'react';
import editIcon from './img/edit_icon.png'
const Assigment = () => {
  // Students ma'lumotlarini boshqarish uchun useState hook'ini qo'shamiz
  const [students, setStudents] = useState([
    { id: 1, type: 'Speaking', name: 'my cunt’s have hair', date: 'kk.oo.yyyy', teacher: 'Hoshimjon Ro’ziyev', group: '1a canada', score: '100 ball', comment:'Qoniqarli', checked: false },


  ]);

  // Barcha checkbox'larni tanlash/bekor qilish funksiyasi
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setStudents((prevStudents) =>
      prevStudents.map((student) => ({ ...student, checked }))
    );
  };

  // Har bir student uchun alohida checkbox'ni boshqarish funksiyasi
  const handleSingleCheck = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === id ? { ...student, checked: !student.checked } : student
      )
    );
  };

  return (
    <div className="w-[112vw] h-auto bg-[white] m-[auto]">
      <h2 className="text-[#747474] underline text-[20px] float-right mr-[30px] mt-[30px]">
        Umumiy son: {students.length}
      </h2>
      <table className="w-full mt-[70px] m-auto">
        <thead>
          <tr>
            <th className="h-[25px] p-2 scale-[1.5]">
              <input
                type="checkbox"
                className="w-5 h-5 cursor-pointer"
                checked={students.every((student) => student.checked)}
                onChange={handleAllChecked}
              />
            </th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">№</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Turi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Nomi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">Topshiriq muddati</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600">O'qituvchi</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600 ">Guruh</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600 ">Maximal ball</th>
            <th className="h-[25px] p-2 text-left text-[23px] font-[450] text-gray-600 ">Izoh</th>
          </tr>
        </thead>
        
        <tbody>
          {students.map((student, index) => (
            <tr
              key={student.id}
              className="text-center relative duration-300 hover:bg-teal-100"
            >
              <td className="h-[25px] p-2 scale-[1.5]">
                <input
                  type="checkbox"
                  className="w-5 h-5 cursor-pointer"
                  checked={student.checked}
                  onChange={() => handleSingleCheck(student.id)}
                />
              </td>
              <td className="h-[50px] p-2 text-left">{index + 1}</td>
              <td className="p-2 text-left">{student.type}</td>
              <td className="p-2 text-left">{student.name}</td>
              <td className="p-2 text-left">{student.date}</td>
              <td className="p-2 text-left">{student.teacher}</td>
              <td className="p-2 text-left">{student.group}</td>
              <td className="p-2 text-left">{student.score}</td>
              <td className="p-2 text-left">{student.comment}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Assigment;