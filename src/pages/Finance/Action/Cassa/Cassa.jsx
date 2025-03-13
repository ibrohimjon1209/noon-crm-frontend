import React, { useState } from 'react';
import add_icon from './Images/add_icon.png';
import export_icon from './Images/export.png';
import medal_star from './Images/medal_star.png';
import money_recive from './Images/money_recive.png';
import money_send from './Images/money_send.png';
import rename from './Images/rename.png';
import bottom_icon from './Images/bottom.png';
import './Cassa.css'; 
import Money_card from './Money_card';
import Header from './header';
import Table_payent from './Table_payent';
import DrawerCassa from './DrawerCassa';
const Cassa = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [cassa, setCassa] = useState([]);

  const addCassa = (newCassa) => {
    setCassa([...cassa, { id: cassa.length + 1, ...newCassa }]);
    setIsDrawerOpen(false);
  };


  const [accounts, setAccounts] = useState([
    {
      id: 1,
      name: 'Asosiy kassa',
      balance: '99 066 530.56 uzs', 
      owner: 'Maher Al-muaqly',
      isSelected: true,
    },
    {
      id: 2,
      name: 'Saud Abdulwaheed',
      balance: '99 066 530.56 uzs',
      owner: 'Maher Al-muaqly',
      isSelected: false,
    },
    {
      id: 3,
      name: 'Kassa 3',
      balance: '50 000 000.00 uzs',
      owner: 'Ali Valiyev',
      isSelected: false,
    },
    {
      id: 4,
      name: 'Kassa 4',
      balance: '30 000 000.00 uzs',
      owner: 'Oydin Nurmurodov',
      isSelected: false,
    },
    {
      id: 5,
      name: 'Kassa 5',
      balance: '20 000 000.00 uzs',
      owner: 'Sardorbek Yuldashev',
      isSelected: false,
    },
  ]);

  const handleSelect = (id) => {
    setAccounts(prevAccounts =>
      prevAccounts.map(account =>
        account.id === id
          ? { ...account, isSelected: true }
          : { ...account, isSelected: false }
      )
    );
  }; const [is_filter_open, set_is_filter_open] = useState(false);
  const [is_add_modal_open, set_is_add_modal_open] = useState(false);


  return (
    <div className='pt-[30px] pb-[25px] px-[32px] flex gap-[32px] justify-between'>

      <div className='w-[550px] h-[calc(128vh-100px)] overflow-hidden bg-white rounded-[12px] flex flex-col'>
        <div className='p-[25px]'>
          <button 
          onClick={() => setIsDrawerOpen(true)}
          className='w-full h-[60px] flex items-center justify-center gap-[20px] bg-[#0D99FF] rounded-[8px] '>
            <img src={add_icon} alt="Add" />
            <h1 className='font-roboto font-[400] text-[20px] leading-[23.44px] text-white'>Yangi kassa qo'shish</h1>
          </button>
        </div>

        <div className='w-full h-full overflow-y-scroll pb-[25px] pl-[25px] pr-[12px]'>
          <div className='w-full h-auto p-[10px] flex flex-col gap-[20px] bg-[#F2EEEE] rounded-[10px]'>

            {accounts.map((account) => (
              <div key={account.id}
                className={`pl-[20px] flex flex-col w-full bg-[#264E86] rounded-[10px] overflow-hidden transition-opacity duration-300 ${account.isSelected ? 'opacity-100 h-[220px]' : 'opacity-40 h-[170px]'}`}
                onClick={() => handleSelect(account.id)}
              >
                <div className='pt-[20px] flex w-full items-center gap-[16px]'>
                  <div className={`w-[10px] h-[10px] rounded-full ${account.isSelected ? 'bg-[#FF4949]' : 'hidden'} shadow-[0_0_10px_rgba(255,0,0,0.5)]`}></div>
                  <h1 className='font-roboto font-[400] text-[20px] leading-[23.44px] text-white'>{account.name}</h1>
                </div>

                <div className='w-full h-full mt-[15px] flex flex-col gap-[28px]'>
                  <div>
                    <div className='flex justify-between pr-[23px]'>
                      <h1 className='font-roboto font-[600] text-[28px] leading-[32.81px] text-white'>{account.balance}</h1>
                      <img src={rename} className={`w-[29px] h-[29px] ${account.isSelected ? '' : 'hidden'}`} alt="Rename" />
                    </div>
                    <div className='flex gap-[10px] mt-[15px]'>
                      <h1 className='font-roboto font-[400] text-[22px] leading-[25.78px] text-white'>{account.owner}</h1>
                      {account.isSelected && <img src={medal_star} className='w-[24px] h-[24px]' alt="Medal" />}
                    </div>
                  </div>

                  <div className={`flex items-center gap-[13px] mb-[25px] ${account.isSelected ? '' : 'hidden'}`}>
                    <div className='flex gap-[10px]'>

                      <button className='flex justify-center items-center gap-[4px] w-[102px] h-[32px] bg-[#3EC483] rounded-[4px]'>
                        <img src={money_recive} alt="Kirim" />
                        <h1 className='font-roboto text-[18px] leading-[21.09px] text-white font-[400]'>Kirim</h1>
                      </button>

                      <button className='flex justify-center items-center gap-[4px] w-[117px] h-[32px] bg-[#FF4949] rounded-[4px]'>
                        <img src={money_send} alt="Chiqim" />
                        <h1 className='font-roboto text-[18px] leading-[21.09px] text-white font-[400]'>Chiqim</h1>
                      </button>

                      <button className='flex justify-center items-center gap-[4px] w-[138px] h-[32px] bg-[#0D99FF] rounded-[4px]'>
                        <img src={export_icon} alt="Ko’chirish" />
                        <h1 className='font-roboto text-[18px] leading-[21.09px] text-white font-[400]'>Ko’chirish</h1>
                      </button>

                    </div>

                    <img src={bottom_icon} className='w-[18px] h-[9px]' alt="Bottom icon" />
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
      <div className='w-[74%] h-full'>
        <Money_card />
        <Header is_filter_open={is_filter_open} set_is_filter_open={set_is_filter_open} set_is_add_modal_open={set_is_add_modal_open} />
        <Table_payent />
          
      </div>

      <DrawerCassa
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onAdd={addCassa}
      />
    </div>
  );
}

export default Cassa;
