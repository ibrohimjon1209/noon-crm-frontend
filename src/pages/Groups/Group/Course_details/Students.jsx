import React, { useState } from "react";
import mennu from '../../imgs/nuqtalar.jpg';


const Students = () => {

  // const [selectedRoom, setSelectedRoom] = useState(null);
  const [rooms, setRooms] = useState([
    { id: 1, name: "Nuraliyev Muhammad Sodiq", phone: "+998 90 990 09 99", balance: "892 765 uzs", price: "56 000 uzs", checked: false },
    { id: 1, name: "Nuraliyev Muhammad Sodiq", phone: "+998 90 990 09 99", balance: "892 765 uzs", price: "56 000 uzs", checked: false },
    { id: 1, name: "Nuraliyev Muhammad Sodiq", phone: "+998 90 990 09 99", balance: "892 765 uzs", price: "56 000 uzs", checked: false },
    
  ]);
  const handleAllChecked = (e) => {
    const checked = e.target.checked;
    setRooms(rooms.map((room) => ({ ...room, checked })));
  };
  
  const handleSingleCheck = (id) => {
    setRooms(
      rooms.map((room) =>
        room.id === id ? { ...room, checked: !room.checked } : room
    )
  );
};
  return (
    <>
      <div className='w-[112vw] h-[400px] bg-[white] m-[auto]'>
        <h2 className="text-[black] underline text-[20px] float-right mr-[30px] mt-[30px]">Umumiy son: {rooms.length}</h2> 
        <table className="w-full mt-[30px] m-auto border-black border-[1px]  ">
          <thead>
            <tr>
              <th className="h-[25px] p-2 scale-[1.5]">
                <div className=" h-[100%] w-[100%]">
                  <label className="relative block cursor-pointer text-lg select-none mt-[10px]">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer"
                      checked={rooms.every((room) => room.checked)}
                      onChange={handleAllChecked}
                    />
                    <span
                      className={`border-[2px] border-[#0EA5E9] absolute h-5 w-5 rounded-sm 
                      ${rooms.every((room) => room.checked)
                          ? "bg-[#0EA5E9]"
                          : "bg-white"
                        } 
                      after:content-[''] after:absolute 
                      after:top-[3px] after:left-[6px] 
                      after:w-1.5 after:h-2.5 
                      after:border-white after:border-r-2 
                      after:border-b-2 after:rotate-45
                      ${rooms.every((room) => room.checked)
                          ? "after:block"
                          : "after:hidden"
                        }`}
                    ></span>
                  </label>
                </div>
              </th>
              <th className="h-[25px] p-2 text-[black]">№</th>
              <th className="h-[25px] p-2 text-[#747474] text-[20px] font-[500] ">O'quvchini Ismi</th>
              <th className="h-[25px] p-2 text-[#747474] text-[20px] font-[500] ">Telefon Raqam</th>
              <th className="h-[25px] p-2 text-[#747474] text-[20px] font-[500] ">Balans</th>
              <th className="h-[25px] p-2 text-[#747474] text-[20px] font-[500] ">Narxi</th>
              <th className="h-[25px] p-2 text-[#747474] text-[20px] font-[500] "></th>
              
            </tr>
          </thead>
          <tbody>
            {rooms.map((room, index) => (
              <tr key={room.id} className="text-center">
                <td className="h-[25px] p-2 scale-[1.5]">
                  <label className="-mt-[10px] relative block cursor-pointer text-lg select-none">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer h-0 w-0 peer "
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
                <td className="p-2 text-[black]">{room.name}</td>
                <td className="p-2 text-[black]">{room.phone}</td>
                <td className="p-2 text-[black]">{room.balance}</td>
                <td className="p-2 text-[black]">{room.price}</td>
                <td className="p-2 text-[black]">{room.price}</td>
                <td className="p-2 text-[black]"><img className="w-[30px] cursor-pointer" src={mennu} alt="" /></td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Students