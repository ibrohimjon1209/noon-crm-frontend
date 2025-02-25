const TableSection = () => {
    return (
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 bg-white shadow-md rounded-md h-[400px] flex items-center justify-center">
          <p>Ma'lumotlar topilmadi</p>
        </div>
        <div className="p-4 bg-white shadow-md rounded-md h-[400px]">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left">№</th>
                <th className="text-left">Turlari</th>
                <th className="text-left">Summa</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="3" className="text-center py-10">Ma'lumotlar topilmadi</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TableSection;
  