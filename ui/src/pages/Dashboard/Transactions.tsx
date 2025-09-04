import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import TransactionList2024 from "../../components/Marketplace/TransactionList2024";
import TransactionList2025 from "../../components/Marketplace/TransactionList2025";
import { useSubscription } from '../../contexts/SubscriptionContext';

const Transactions: React.FC = () => {
  const location = useLocation();
  const is2025 = location.pathname.includes('2025');

  return (
    <DefaultLayout>
      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {is2025 ? <TransactionList2025 /> : <TransactionList2024 />}
      </div>
    </DefaultLayout>
  );
};

export default Transactions;
