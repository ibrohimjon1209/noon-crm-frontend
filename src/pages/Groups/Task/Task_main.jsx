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
    { id: 1, title: "Room", capacity: 29, checked: false },
    { id: 2, title: "Ingliz tili xona", capacity: 29, checked: false },
    { id: 3, title: "1-xona", capacity: 29, checked: false },
    { id: 4, title: "Matematika xonasi", capacity: 29, checked: false },
    { id: 5, title: "Kimyo laboratoriyasi", capacity: 29, checked: false },
    { id: 6, title: "Tarix xonasi", capacity: 29, checked: false },
  ]);

  // **Barcha checkbox'larni belgilash / olib tashlash**
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setRooms(rooms.map((room) => ({ ...room, checked })));
  };

  // **Bitta checkboxni belgilash / olib tashlash**
  const handleSingleCheck = (id) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, checked: !room.checked } : room
      )
    );
  };

  return (
    <>
      {/* Xona qo‘shish tugmasi */}
      <div
        className="bg-[#0D99FF] w-[220px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
        onClick={() => setIsAddModalOpen(true)}
      >
        <img src={plus} alt="Add" />
        <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">
          Xona qo'shish
        </h1>
      </div>

      {/* Xonalar jadvali */}
      <div className="w-[95%] h-[45vw] overflow-auto m-auto mt-6 bg-white rounded-[10px]">
        <table className="w-full mt-[30px] m-auto">
          <thead>
            <tr>
              <th className="h-[25px] p-2 scale-[1.5]">
                <div className="flex -mt-[8px] h-[100%] flex-row gap-[30px] pr-4 w-[100%] border">
                  <label className="relative block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={rooms.every((room) => room.checked)}
                      onChange={handleAllChecked}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                      ${rooms.every((room) => room.checked) ? "bg-[#0EA5E9]" : "bg-white"} 
                      after:content-[''] after:absolute 
                      after:top-[3px] after:left-[6px] 
                      after:w-1.5 after:h-2.5 
                      after:border-white after:border-r-2 
                      after:border-b-2 after:rotate-45
                      ${rooms.every((room) => room.checked) ? "after:block" : "after:hidden"}`}
                    ></span>
                  </label>
                </div>
              </th>
              <th className="h-[25px] p-2 text-[black]">№</th>
              <th className="h-[25px] p-2 text-[black]">Sarlavha</th>
              <th className="h-[25px] p-2 text-[black]">O‘quvchilar sig‘imi</th>
              <th className="h-[25px] p-2 text-[black]">
                <h2>Umumiy son: {rooms.length}</h2>
              </th>
            </tr>
          </thead>

          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id} className="text-center">
                <td className="h-[25px] p-2 scale-[1.5]">
                  <label className="relative block cursor-pointer text-lg select-none">
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
                <td className="p-2 text-[black]">{room.title}</td>
                <td className="p-2 text-[black]">{room.capacity}</td>
                <td className="p-2 text-[black] flex justify-center gap-3">
                  <div className="flex w-[30%] justify-around">
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
