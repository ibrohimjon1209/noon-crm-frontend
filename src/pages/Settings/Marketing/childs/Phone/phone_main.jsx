import React, { useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import PhoneModal from './phone_modal';

const PhoneMain = () => {
  const [open, setIsOpen] = useState(false);

  const statuses = [
    { name: "SMS qurilmalar", color: "bg-red-500" },
    { name: "Bog'lanildi", color: "bg-blue-500" },
    { name: "Keyinroq bog'lanish", color: "bg-yellow-400" },
    { name: "Online", color: "bg-orange-500" },
    { name: "Qora ro'yhat", color: "bg-red-500" },
  ];

  return (
    <div className="max-w-7xl mr-4">
      <button onClick={() => setIsOpen(true)} className="flex items-center justify-center gap-2 w-64 h-16 rounded-full bg-[#0D99FF] text-gray-50 text-[20px]">
        <IoMdAdd size={25} />
        Rang qo'shish
      </button>
      <div className="bg-white shadow-md rounded-lg min-h-[700px] mt-4">
        <table className="w-full">
          <thead>
            <tr className="border-b h-[4rem]">
              <th className=" py-3 px-6 text-left text-gray-700 font-semibold">Nomi</th>
              <th className="py-3 text-left text-gray-700 font-semibold">Rangi</th>
            </tr>
          </thead>
          <tbody>
            {statuses.map((status, index) => (
              <tr key={index} className="border-b hover:bg-gray-50">
                <td className="h-[5rem] py-3 px-6 text-gray-700 font-medium">{status.name}</td>
                <td className="">
                  <span className={`w-4 h-4 inline-block rounded-full ${status.color}`}></span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PhoneModal isOpen={open} onClose={() => setIsOpen(false)}>
        <label className="block text-sm font-medium">Bo'lim</label>
        <input type="text" className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400" />
      </PhoneModal>
    </div>
  );
}

export default PhoneMain;
