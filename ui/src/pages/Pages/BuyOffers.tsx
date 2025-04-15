import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import BuyOffersTable from '../../components/DataTables/BuyOffersTable';

const DataTables: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Kupovina" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <BuyOffersTable />
      </div>
    </DefaultLayout>
  );
};

export default DataTables;
