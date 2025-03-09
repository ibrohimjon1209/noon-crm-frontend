import React from 'react'

const Page1 = () => {
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
  ]
  return (
    <div className='w-[112vw] h-[650px] absolute m-auto mt-[750px] overflow-auto'>

      <table className='bg-white w-full'>
        <thead>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">№</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Pul yechish vaqti</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Tarixi</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Dars vaqti</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Guruh</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Miqdori</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Avvalgi balans</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Yangi balans</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Davomat</th>
          <th className="w-12 text-left px-5 pt-[20px] pb-[25px] text whitespace-nowrap-left">Moderator</th>
        </thead>
        <tbody>
            {attendanceData.map((item) => (
              <tr key={item.id} className="hover:bg-blue-100">
                <td className="text-left py-4 px-5 text-[18px]  text-gray-900 border-b">{item.id}</td>
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
    </div>
  )
}

export default Page1