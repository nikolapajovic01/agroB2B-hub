import React from 'react';
import DefaultLayout from '../../layout/DefaultLayout';
import TransactionList from "../../components/Marketplace/TransactionList";

const Transactions: React.FC = () => {
  return (
    <DefaultLayout>

      <div className="mt-7.5 grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">

        <TransactionList />
      </div>
    </DefaultLayout>
  );
};

export default Transactions;
