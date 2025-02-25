import { useState } from 'react';

const FilterSection = () => {
    const [activeTab, setActiveTab] = useState('kirim');

    return (
      <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-md">
        <div className="flex space-x-2">
          <button 
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === 'kirim' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('kirim')}
          >
            Kirim
          </button>
          <button 
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === 'chiqim' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('chiqim')}
          >
            Chiqim
          </button>
          <button 
            className={`px-4 py-2 rounded transition-colors ${
              activeTab === 'voucher' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('voucher')}
          >
            Voucher
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Export</button>
        <select className="px-4 py-2 border rounded">
          <option>Kassa</option>
        </select>
        <input type="date" className="px-4 py-2 border rounded" />
        <select className="px-4 py-2 border rounded">
          <option>Plastik</option>
        </select>
      </div>
    );
};

export default FilterSection;
