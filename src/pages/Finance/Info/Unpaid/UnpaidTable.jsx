import PropTypes from 'prop-types';
import UnpaidRow from './UnpaidRow';
const UnpaidTable = ({ data = [] }) => {
  return (
    <div className="w-[calc(133vw-300px)] p-4 bg-white shadow-md rounded-md m-8  overflow-auto">
      <table className="w-full h-full table-auto">
        <thead className='bg-gray-50'>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider">№</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Ism</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Guruxlar</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">To'lanmagan darslar soni	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Jami to'lanmagan summa	</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item) => (
              <UnpaidRow
                key={item.id || crypto.randomUUID()}
                item={item}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="px-6 py-16 text-center text-sm text-gray-600 font-semibold"
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

UnpaidTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      oylik: PropTypes.number,
      davomat: PropTypes.number,
      davomatFoizi: PropTypes.number,
      bonus: PropTypes.number,
    })
  ).isRequired
};


export default UnpaidTable;
