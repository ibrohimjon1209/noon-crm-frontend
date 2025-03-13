import React from "react";
import TransactionRow from "./TransactionRow";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Link, useLocation } from 'react-router-dom';
import TransactionTabs from "./TransactionTabs";

const TableTransactions = ({ transactions }) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const page = parseInt(query.get('page') || '1', 10);

  return (
    <div className="w-full overflow-x-auto shadow-md rounded-lg mt-4 h-[820px] bg-white relative">
      <TransactionTabs />
      <table className="w-full table-auto">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">№</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Sana</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Kim</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Izoh</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Tranzaksiya nomi</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Holati</th>
            <th className="px-6 py-3 text-left text-lg font-medium text-gray-500 uppercase tracking-wider">Tranzaksiya turi</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions?.length > 0 ? (
            transactions.map((bonus, index) => (
              <TransactionRow key={index} bonus={bonus} index={index + 1} />
            ))
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center text-base text-gray-500">
                Ma'lumotlar topilmadi
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="absolute bottom-4 right-4">
        <Pagination
          page={page}
          count={10}
          renderItem={(item) => (
            <PaginationItem
              component={Link}
              to={`${item.page === 1 ? '' : `?page=${item.page}`}`}
              {...item}
            />
          )}
        />
      </div>
    </div>
  );
};

export default TableTransactions;
