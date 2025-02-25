import PropTypes from 'prop-types';
import BalanceRow from './BalanceRow';
const Balance = ({ data = [] }) => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-md m-8  overflow-auto">
      <table className="w-full h-full table-auto">
        <thead className='bg-gray-50'>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-6 py-3 text-left text-base font-medium text-gray-500 uppercase tracking-wider">№</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">To'liq ismi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Telefon raqam	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Ish haqi	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Davomat	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Davomatdan foizi	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Bonus</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Avans	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Jarima	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Akladi	</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">To'lanmagan</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.length > 0 ? (
            data.map((item) => (
              <BalanceRow
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

Balance.propTypes = {
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


export default Balance;
