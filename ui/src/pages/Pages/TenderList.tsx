import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import TenderTable from '../../components/DataTables/TenderTable';

const DataTables: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tenderi" />

      <div className="flex flex-col gap-5 md:gap-7 2xl:gap-10">
        <TenderTable />
      </div>
    </DefaultLayout>
  );
};

export default DataTables;
