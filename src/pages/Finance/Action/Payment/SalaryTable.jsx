import PropTypes from 'prop-types';
import SalaryRow from "./SalaryRow";
const SalaryTable = ({ data = [] }) => {
  return (
    <div className="w-[calc(133vw-300px)] ml-[40px] overflow-x-auto shadow-md rounded-lg mt-4">
      <table className="w-full table-auto">
        <thead className='bg-gray-50'>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider">№</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Oylik</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Davomat</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Davomat foizi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Bonus</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Avans</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Jarima</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Akladi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">To'lanmagan</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Sana</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item) => (
              <SalaryRow 
                key={item.id || crypto.randomUUID()} 
                item={item} 
              />
            ))
          ) : (
            <tr>
              <td 
                colSpan="10" 
                className="px-6 py-4 text-center text-sm text-gray-500"
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

SalaryTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      oylik: PropTypes.number,
      davomat: PropTypes.number,
      davomatFoizi: PropTypes.number,
      bonus: PropTypes.number,
      avans: PropTypes.number,
      jarima: PropTypes.number,
      akladi: PropTypes.number,
      tolanmagan: PropTypes.number,
      sana: PropTypes.string
    })
  ).isRequired
};

export default SalaryTable;
