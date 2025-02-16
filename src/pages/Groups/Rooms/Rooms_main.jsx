import React, { useState } from "react";
import plus from "../imgs/add_icon.png";
import Add_modal from "./add_modal";
import exprt from "../imgs/export.png";
import editIcon from "../imgs/edit_icon.png";
import deleteIcon from "../imgs/delete_icon.png";
import DeleteModal from "./delete_modal";
import EditModal from "./edit_modal";

const Rooms_main = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null); // Tanlangan xona

  const [rooms, setRooms] = useState([
    { id: 1, title: "Room", capacity: 29 },
    { id: 2, title: "Ingliz tili xona", capacity: 29 },
    { id: 3, title: "1-xona", capacity: 29 },
    { id: 4, title: "Matematika xonasi", capacity: 29 },
    { id: 5, title: "Kimyo laboratoriyasi", capacity: 29 },
    { id: 6, title: "Tarix xonasi", capacity: 29 },
    { id: 1, title: "Room", capacity: 29 },
    { id: 2, title: "Ingliz tili xona", capacity: 29 },
    { id: 3, title: "1-xona", capacity: 29 },
    { id: 4, title: "Matematika xonasi", capacity: 29 },
    { id: 5, title: "Kimyo laboratoriyasi", capacity: 29 },
    { id: 6, title: "Tarix xonasi", capacity: 29 },
    { id: 1, title: "Room", capacity: 29 },
    { id: 2, title: "Ingliz tili xona", capacity: 29 },
    { id: 3, title: "1-xona", capacity: 29 },
    { id: 4, title: "Matematika xonasi", capacity: 29 },
    { id: 5, title: "Kimyo laboratoriyasi", capacity: 29 },
    { id: 6, title: "Tarix xonasi", capacity: 29 },
  ]);

  return (
    <>
      <div className='w-[112vw] h-[100px] m-[auto] mt-[30px] flex justify-between items-center'>
        <div className='w-[30%] h-[100%] flex justify-around items-center'>
          <div
            className="bg-[#0D99FF] w-[220px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]"
            onClick={() => setIsAddModalOpen(true)}
          >
            <img src={plus} alt="" />
            <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Xona qo'shish</h1>
          </div>

          <div className="block bg-[#0D99FF] w-[170px] h-[60px] rounded-[50px] flex justify-center items-center gap-[15px] duration-300 cursor-pointer hover:scale-[1.05] active:scale-[0.95]">
            <img className='w-[20%]' src={exprt} alt="" />
            <h1 className="text-white font-roboto font-[400] text-[20px] leading-[23.44px]">Export</h1>
          </div>
        </div>

        <input className="search1" style={{ "width": "260px", "height": "70px", "borderRadius": "5px", "padding": "0 20px", "transform": "scale(0.9)", "background": "white" }} type="search" placeholder="Qidirish" />
      </div>

      <div className="w-[95%] h-[45vw] overflow-auto m-auto mt-6 bg-white rounded-[10px]">
        <table className="w-full mt-[30px] m-auto">
          <thead>
            <tr>
              <th className="h-[25px] p-2 scale-[1.5]">
              <input
                  type="checkbox"
                  className="w-3 h-3 border-2 border-gray-400 bg-[white] scale-[1.3] cursor-pointer transition-all"
                />
              </th>
              <th className="h-[25px] p-2 text-[black]">№</th>
              <th className="h-[25px] p-2 text-[black]">Sarlavha</th>
              <th className="h-[25px] p-2 text-[black]">O‘quvchilar sig‘imi</th>
              <th className="h-[25px] p-2 text-[black]"><h2>Umumiy son: {rooms.length}</h2></th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id} className="text-center">
                <td className="h-[25px] p-2 scale-[1.5]">
                <input
                  type="checkbox"
                  className="w-3 h-3 border-2 border-gray-400 bg-[white] scale-[1.3] cursor-pointer transition-all"
                />
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

export default Rooms_main;
