import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import SellOffersTable from '../../components/DataTables/SellOffersTable';

const DataTables: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Prodaja" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <SellOffersTable />
      </div>
    </DefaultLayout>
  );
};

export default DataTables;
