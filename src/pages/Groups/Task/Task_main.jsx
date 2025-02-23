import React, { useState } from "react";
import Add_modal from "./add_modal";
import EditModal from "./edit_modal";
import DeleteModal from "./delete_modal";
import editIcon from "../imgs/edit_icon.png";
import deleteIcon from "../imgs/delete_icon.png";
import plus from "../imgs/add_icon.png";

const Task_main = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const [rooms, setRooms] = useState([
    {
      id: 1, // ID qo'shildi
      type: "Vazifa",
      name: "Vazifa nomi",
      date: "05.12.24 | 18:00",
      teacher: "Ali Xasanov",
      group: "A1 Ingliz tili",
      ball: "100",
      comment: "To be ni yaxshi o'rganish", 
      checked: false,
    },
    {
      id: 2, // ID qo'shildi
      type: "Vazifa",
      name: "Vazifa nomi",
      date: "05.12.24 | 18:00",
      teacher: "Ali Xasanov",
      group: "A1 Ingliz tili",
      ball: "100",
      comment: "To be ni yaxshi o'rganish",
      checked: false,
    }
  ]);

  // **Barcha checkbox'larni belgilash / olib tashlash**
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setRooms(rooms.map((room) => ({ ...room, checked })));
  };

  // **Bitta checkboxni belgilash / olib tashlash**
  const handleSingleCheck = (id) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === id ? { ...room, checked: !room.checked } : room
      )
    );
  };

  // **Tepadagi checkboxni tekshirish**
  const isAllChecked = rooms.length > 0 && rooms.every((room) => room.checked);

  return (
    <>
      {/* Xona qo‘shish tugmasi */}
      <div className="w-[95%] h-[auto] m-auto mt-[20px]">
        <div
          className="bg-[#0D99FF] w-[220px] h-[60px]  rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
          onClick={() => setIsAddModalOpen(true)}
        >
          <img src={plus} alt="Add" />
          <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">
            Imtihon qo'shish
          </h1>
        </div>
      </div>

      {/* Xonalar jadvali */}
      <div className="w-[95%] h-[45vw] overflow-auto m-auto mt-6 bg-white rounded-[10px]">
        <table className="w-full mt-[30px] m-auto">
          <thead>
            <tr>
              <th className="h-[25px] p-2 scale-[1.5]  ">
                <div className=" h-[100%] m-auto pr-4 w-[50%] ">
                  <label className="relative block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={isAllChecked}
                      onChange={handleAllChecked}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                      ${isAllChecked ? "bg-[#0EA5E9]" : "bg-white"} 
                      after:content-[''] after:absolute 
                      after:top-[3px] after:left-[6px] 
                      after:w-1.5 after:h-2.5 
                      after:border-white after:border-r-2 
                      after:border-b-2 after:rotate-45
                      ${isAllChecked ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </div>
              </th>
              <th className="h-[25px] p-2 text-[black]">№</th>
              <th className="h-[25px] p-2 text-[black]">Turi</th>
              <th className="h-[25px] p-2 text-[black]">Nomi</th>
              <th className="h-[25px] p-2 text-[black]">Topshirish muddati</th>
              <th className="h-[25px] p-2 text-[black]">O'qituvchi</th>
              <th className="h-[25px] p-2 text-[black]">Guruh</th>
              <th className="h-[25px] p-2 text-[black]">Maksimal ball</th>
              <th className="h-[25px] p-2 text-[black]">Izoh</th>
              <th className="h-[25px] p-2 text-[black]">
                <h2>Umumiy son: {rooms.length}</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id} className="text-center">
                <td className="h-[25px] p-2 scale-[1.5]">
                  <label className=" w-[100%] h-[100%] -ms-[8px] mt-[10px]  m-auto block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={room.checked}
                      onChange={() => handleSingleCheck(room.id)}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                      ${room.checked ? "bg-[#0EA5E9]" : "bg-white"} 
                      after:content-[''] after:absolute 
                      after:top-[3px] after:left-[6px] 
                      after:w-1.5 after:h-2.5 
                      after:border-white after:border-r-2 
                      after:border-b-2 after:rotate-45
                      ${room.checked ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </td>
                <td className="h-[50px] p-2 text-[black]">{index + 1}</td>
                <td className="p-2 text-[black]">{room.type}</td>
                <td className="p-2 text-[black]">{room.name}</td>
                <td className="p-2 text-[black]">{room.date}</td>
                <td className="p-2 text-[black]">{room.teacher}</td>
                <td className="p-2 text-[black]">{room.group}</td>
                <td className="p-2 text-[black]">{room.ball}</td>
                <td className="p-2 text-[black]">{room.comment}</td>
                <td className="p-2 text-[black] flex justify-center gap-3">
                  <div className="flex w-[40%] justify-around">
                    {/* Tahrirlash tugmasi */}
                    <img
                      src={editIcon}
                      alt="Edit"
                      className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                      onClick={() => {
                        setSelectedRoom(room);
                        setIsEditModalOpen(true);
                      }}
                    />
                    {/* O‘chirish tugmasi */}
                    <img
                      src={deleteIcon}
                      alt="Delete"
                      className="w-[24px] h-[24px] cursor-pointer scale-100 hover:scale-105 active:scale-95 duration-300"
                      onClick={() => {
                        setSelectedRoom(room);
                        setIsDeleteModalOpen(true);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* O‘chirish modali */}
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
          room={selectedRoom}
        />

        {/* Tahrirlash modali */}
        <EditModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          room={selectedRoom}
        />

        {/* Xona qo‘shish modali */}
        <Add_modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} />
      </div>
    </>
  );
};

export default Task_main;