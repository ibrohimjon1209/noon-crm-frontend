"use client"

import * as React from "react"

export default function Page1({ dateRange }) {
  const attendanceData = [
    {
      id: 1,
      pulYechishVaqti: "01.09.2025 | 16:43",
      tarix: "attendance",
      darsVaqti: "01.09.2025 | 16:43",
      guruh: "beginner arcade 1.2",
      miqdori: "-600 000",
      avvalgiBalansi: "300 000",
      yangiBalasi: "390 000",
      davomati: "attended",
      moderator: "Xafizullo Omon",
    },
    {
      id: 2,
      pulYechishVaqti: "02.09.2025 | 14:20",
      tarix: "attendance",
      darsVaqti: "02.09.2025 | 14:20",
      guruh: "advanced coders 2.1",
      miqdori: "-450 000",
      avvalgiBalansi: "500 000",
      yangiBalasi: "50 000",
      davomati: "attended",
      moderator: "Ali Akbarov",
    },
    // Qolgan ma'lumotlar...
  ];

  const parseDate = (dateString) => {
    const [datePart] = dateString.split(" | ");
    const [day, month, year] = datePart.split(".");
    return new Date(year, month - 1, day);
  };

  const filteredData = attendanceData.filter((item) => {
    const itemDate = parseDate(item.darsVaqti);
    return itemDate >= dateRange.startDate && itemDate <= dateRange.endDate;
  });

  return (
    <div className="p-4">
      <div className="w-[112vw] h-[calc(120vh-200px)] m-auto flex flex-col overflow-auto">
        {filteredData.length > 0 ? (
          <table className="bg-white w-full mt-[20px] rounded-[15px]">
            <thead>
              <tr>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">№</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Pul yechish vaqti</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Tarixi</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Dars vaqti</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Guruh</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Miqdori</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Avvalgi balans</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Yangi balans</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Davomat</th>
                <th className="w-12 text-left px-5 pt-[20px] pb-[25px] whitespace-nowrap">Moderator</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="hover:bg-blue-100">
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.id}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.pulYechishVaqti}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.tarix}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.darsVaqti}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.guruh}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-red-600 font-medium border-b">{item.miqdori}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.avvalgiBalansi}</td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.yangiBalasi}</td>
                  <td className="text-left py-4 px-5 text-[18px] border-b">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{item.davomati}</span>
                  </td>
                  <td className="text-left py-4 px-5 text-[18px] text-gray-900 border-b">{item.moderator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-center text-gray-500 text-[18px]">Belgilangan sanalar oralig'idagi ma'lumotlar topilmadi</p>
          </div>
        )}
      </div>
    </div>
  );
}