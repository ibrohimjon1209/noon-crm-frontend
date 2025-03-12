import { Table } from "antd";

const TableTransaction = ({ transactions }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Sana</th>
            <th>Kim</th>
            <th>Izoh</th>
            <th>Tranzaksiya Nomi</th>
            <th>Miqdori</th>
            <th>Holati</th>
            <th>Tranzaksiya Turi</th>
            <th>Turi</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.date}</td>
              <td>{item.user}</td>
              <td><button>Izoh</button></td>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
              <td>{item.type}</td>
              <td><button>Copy</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TableTransaction;
  