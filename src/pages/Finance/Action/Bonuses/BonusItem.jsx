const BonusItem = ({ bonus, index }) => {
    return (
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.type}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.fullName}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.previousAmount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.amount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.nextAmount}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.comment}</td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{bonus.createdAt}</td>
      </tr>
    );
  };
  
  export default BonusItem;
  