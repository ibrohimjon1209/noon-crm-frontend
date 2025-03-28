const RevenueTable = () => (
  <div className="overflow-x-auto mt-6 px-6">
    <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-lg">
      <thead >
        <tr className="border-b">
          <th className="p-3 text-left text-gray-700">Tushum rejasi</th>
          <th className="p-3 text-left text-gray-700">O‘quvchi soni</th>
          <th className="p-3 text-left text-gray-700">Umumiy kutilayotgan summa</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b hover:bg-gray-50">
          <td className="p-3">27/02/2025</td>
          <td className="p-3">0</td>
          <td className="p-3">0</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RevenueTable;
