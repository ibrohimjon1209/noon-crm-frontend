
const UnpaidRow = ({ item }) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.salary}</td>
        <td>{item.attendance}</td>
        <td>{item.attendancePercentage}%</td>
        <td>{item.bonus}</td>
      </tr>
    );
  };
  
  export default UnpaidRow;
  