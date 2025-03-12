
const TransactionRow = ({ transactions, index }) => {
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.type}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.fullName}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.previousAmount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.amount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.nextAmount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.comment}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{transactions.createdAt}</td>
      </tr>
    );
  };
  
  export default TransactionRow;
  