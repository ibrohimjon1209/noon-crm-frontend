import PropTypes from 'prop-types';
import TransactionRow from './TransactionRow';

const Transaction_without_bills = ({ data = [] }) => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-md m-8  overflow-auto">
      <table className="w-full h-full table-auto">
        <thead className='bg-gray-50'>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider">№</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">O'quvchi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Turi	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Gurux	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">O'quvchi narxi	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Kurs narxi 	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Yaratildi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item) => (
              <TransactionRow
                key={item.id || crypto.randomUUID()}
                item={item}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan="11"
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

Transaction_without_bills.propTypes = {
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
      sana: PropTypes.string,
      tolanmagan: PropTypes.number
    })
  ).isRequired
};


export default Transaction_without_bills;
