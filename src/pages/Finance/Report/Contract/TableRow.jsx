
const TableRow = ({ item }) => {
    return (
      <tr>
        <td>{item.id}</td>
        <td>{item.salary}</td>
        <td>{item.attendance}</td>
        <td>{item.attendancePercentage}%</td>
        <td>{item.bonus}</td>
        <td>{item.advance}</td>
        <td>{item.penalty}</td>
        <td>{item.approved}</td>
        <td>{item.unpaid}</td>
        <td>{item.date}</td>
      </tr>
    );
  };
  
  export default TableRow;
  