import React from "react";
import BonusItem from "./BonusItem";

const BonusTable = ({ bonuses }) => {
  return (
    <div className="w-full overflow-x-auto shadow-md rounded-lg mt-4">
      <table className="w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider ">№</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Bonus Turi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">To'liq Ismi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Oldingi Miqdor</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Miqdori</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Keyingi Miqdor</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Izoh</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Yaratilgan Sana</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bonuses.length > 0 ? (
            bonuses.map((bonus, index) => (
              <BonusItem key={index} bonus={bonus} index={index + 1} />
            ))
          ) : (
            <tr>
              <td 
                colSpan="8" 
                className="px-6 py-4 text-center text-base text-gray-500"
              >
                Ma'lumotlar topilmadi
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BonusTable;
