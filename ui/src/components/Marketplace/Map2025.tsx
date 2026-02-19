import React, { useEffect, useState } from 'react';
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import 'jsvectormap/dist/css/jsvectormap.css'
import axios from 'axios';

type Period = 'Celokupna 2025' | 'Januar' | 'Februar' | 'Mart' | 'April' | 'Maj' | 'Jun' | 'Jul' | 'Avgust' | 'Septembar' | 'Oktobar' | 'Novembar' | 'Decembar';

type ExportData = {
  total: Array<{ countryName: string; percentage: string }>;
  monthly: Record<string, Array<{ countryName: string; percentage: string }>>;
};

const Map2025: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('Celokupna 2025');
  const [exportData, setExportData] = useState<ExportData | null>(null);
  const [mapInstance, setMapInstance] = useState<any>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/exports/2025/percentage`);
        setExportData(response.data);
      } catch (error) {
        console.error('Error fetching export data:', error);
      }
    };

    fetchData();
  }, []);

  const getCurrentData = () => {
    if (!exportData) return [];
    return selectedPeriod === 'Celokupna 2025' 
      ? exportData.total 
      : exportData.monthly[selectedPeriod] || [];
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value as Period);
  };

  useEffect(() => {
    // Initialize map only if it doesn't exist
    if (!mapInstance) {
      const newMapInstance = new jsVectorMap({
        selector: '#mapTwo',
        map: 'world',
        zoomButtons: true,
        regionStyle: {
          initial: {
            fontFamily: 'Satoshi',
            fill: '#A9BDFF',
          },
          hover: {
            fillOpacity: 1,
            fill: '#3056D3',
          },
        },
        onRegionTooltipShow: function (tooltip: any, code: string) {
          const data = getCurrentData();
          const countryData = data.find(item => item.countryName === code);
          if (countryData) {
            tooltip.text(`${countryData.countryName}: ${countryData.percentage}%`);
          }
        },
      });

      setMapInstance(newMapInstance);
    }

    return () => {
      if (mapInstance && typeof mapInstance.destroy === 'function') {
        try {
          mapInstance.destroy();
        } catch (error) {
          console.error('Error destroying map:', error);
        }
      }
    };
  }, [selectedPeriod, exportData]);

  return (
    <div className="col-span-12 overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-6">
      <div className="p-4 md:p-6 xl:p-7.5">
        <div className="mb-7.5 justify-between sm:flex">
          <div className="mb-2">
            <h3 className="text-xl font-semibold text-black dark:text-white">
             Izvoz po zemlji
            </h3>
          </div>
          <div className="mb-2">
            <div className="relative z-20 inline-block rounded bg-gray-2 dark:bg-boxdark">
              <select
                value={selectedPeriod}
                onChange={handlePeriodChange}
                className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-1 pl-3 pr-8 text-sm outline-none dark:border-strokedark"
              >
                <option value="Celokupna 2025" className='dark:bg-boxdark'>Celokupna 2025</option>
                <option value="Januar" className='dark:bg-boxdark'>Januar</option>
                <option value="Februar" className='dark:bg-boxdark'>Februar</option>
                <option value="Mart" className='dark:bg-boxdark'>Mart</option>
                <option value="April" className='dark:bg-boxdark'>April</option>
                <option value="Maj" className='dark:bg-boxdark'>Maj</option>
                <option value="Jun" className='dark:bg-boxdark'>Jun</option>
                <option value="Jul" className='dark:bg-boxdark'>Jul</option>
                <option value="Avgust" className='dark:bg-boxdark'>Avgust</option>
                <option value="Septembar" className='dark:bg-boxdark'>Septembar</option>
                <option value="Oktobar" className='dark:bg-boxdark'>Oktobar</option>
                <option value="Novembar" className='dark:bg-boxdark'>Novembar</option>
                <option value="Decembar" className='dark:bg-boxdark'>Decembar</option>
              </select>
              <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                    fill="#637381"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                    fill="#637381"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div id="mapTwo" className="h-[400px]"></div>
      </div>
      <div className="space-y-2.5 border-t border-stroke p-4 dark:border-strokedark md:p-6 xl:p-7.5">
        {getCurrentData().map((item, index) => (
          <div key={index} className="items-center sm:flex">
            <div className="flex w-full max-w-42.5 items-center">
              <p className="font-medium text-black dark:text-white">
                {item.countryName}
              </p>
            </div>
            <div className="relative block h-4.5 w-full rounded bg-meta-9 dark:bg-meta-4">
              <div
                className="absolute left-0 top-0 flex h-full items-center rounded bg-primary"
                style={{ width: `${item.percentage}%` }}
              >
                {parseFloat(item.percentage) >= 10 && (
                  <span className="px-1 text-xs font-medium text-white">
                    {item.percentage}%
                  </span>
                )}
              </div>
              {parseFloat(item.percentage) < 10 && (
                <span className="absolute left-[calc(${item.percentage}%+4px)] top-0 text-xs font-medium text-black dark:text-white">
                  {item.percentage}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map2025;
