import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import sponsors from './imgs/sponsors.png';
import third_human from './imgs/third_human.png'
import payment_type from './imgs/payment_type.png'
import manager_bonuses from './imgs/manager_bonuses.png'
import percentage from './imgs/percentage.png'

const Nav_finance = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActive = (path) => {
    return currentPath === path ? 'text-[rgba(38,78,134,1)] font-[500] ' : 'font-[500] text-[rgba(0,0,0,1)]';
  };

  return (
    <div className='pb-[45px]'>
      <div className='w-[400px] h-[calc(100vh-180px)] pt-[5px] overflow-y-auto rounded-t-[15px] rounded-b-[1px] shadow-lg bg-[rgba(255,255,255,1)]'>
        <Link to="/settings/finance/sponsors" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={sponsors} alt="sponsors" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/sponsors")}`}>Hamkorlar</h1>
        </Link>
        <Link to="/settings/finance/third_human" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={third_human} alt="third_human" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/third_human")}`}>3-shaxs</h1>
        </Link>
        <Link to="/settings/finance/payment_type" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={payment_type} alt="payment_type" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/payment_type")}`}>To’lov turlari</h1>
        </Link>
        <Link to="/settings/finance/manager_bonuses" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={manager_bonuses} alt="manager_bonuses" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/manager_bonuses")}`}>Menejer bonuslarini belgilash</h1>
        </Link>
        <Link to="/settings/finance/finance_bonus" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={manager_bonuses} alt="finance_bonus" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/finance_bonus")}`}>Moliya bo’limi bonusi</h1>
        </Link>
        <Link to="/settings/finance/kpi" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={payment_type} alt="KPI" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/kpi")}`}>KPI</h1>
        </Link>
        <Link to="/settings/finance/monthly_payment" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={manager_bonuses} alt="monthly_payment" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/monthly_payment")}`}>Oylik foizlar</h1>
        </Link>
        <Link to="/settings/finance/discount" className='cursor-pointer w-full h-[60px] pl-[40.22px] flex items-center gap-[26.97px] border-b-[1px]'>
          <div className='w-[36.82px] h-[29.32px]'>
            <img src={percentage} alt="discount" />
          </div>
          <h1 className={`font-roboto font-[400] text-[18px] leading-[21.09px] ${getActive("/settings/finance/discount")}`}>Talabalar uchun avtochegirma</h1>
        </Link>
      </div>
    </div>
  );
}

export default Nav_finance;