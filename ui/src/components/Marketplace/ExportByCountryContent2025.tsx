import React, { useEffect, useState } from 'react';
import axios from 'axios';

type Period = 'Celokupna 2025' | 'Januar' | 'Februar' | 'Mart' | 'April' | 'Maj';

type ExportRecord = {
  countryName: string;
  quantityTons: number;
  unitPriceEur: number;
};

const ExportByCountryContent2025: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('Celokupna 2025');
  const [exportData, setExportData] = useState<Record<string, ExportRecord[]>>({});

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/exports/2025/statistics`);
        setExportData(response.data);
      } catch (error) {
        console.error('Error fetching export data:', error);
      }
    };

    fetchData();
  }, []);

  const getCurrentData = () => {
    return exportData[selectedPeriod] || [];
  };

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Rolend izvoz:</p>
              <p className="text-sm font-medium">
                {selectedPeriod === 'Celokupna 2025' ? 'Za 2025. godinu' : `Za ${selectedPeriod} 2025.`}
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value as Period)}
              className="bg-transparent py-1 px-3 text-sm font-medium outline-none"
            >
              <option value="Celokupna 2025">Celokupna 2025</option>
              <option value="Januar">Januar</option>
              <option value="Februar">Februar</option>
              <option value="Mart">Mart</option>
              <option value="April">April</option>
              <option value="Maj">Maj</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Država
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Količina (t)
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Prosečna cena (EUR/kg)
                </th>
              </tr>
            </thead>
            <tbody>
              {getCurrentData().map((record, index) => (
                <tr key={index}>
                  <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                    <h5 className="font-medium text-black dark:text-white">
                      {record.countryName}
                    </h5>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {record.quantityTons.toLocaleString()}
                    </p>
                  </td>
                  <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                    <p className="text-black dark:text-white">
                      {record.unitPriceEur.toFixed(2)}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExportByCountryContent2025;
