import React, { useEffect } from 'react';
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world'
import 'jsvectormap/dist/css/jsvectormap.css'

type PeriodKey =
  | 'Prošla godina'
  | 'Januar'
  | 'Februar'
  | 'Mart'
  | 'April'
  | 'Maj'
  | 'Jun'
  | 'Jul'
  | 'Avgust'
  | 'Septembar'
  | 'Oktobar'
  | 'Novembar'
  | 'Decembar';


const MapExportByCountry: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<PeriodKey>('Prošla godina');

  const countryData: Record<PeriodKey, { country: string; percentage: number }[]> = {
    "Prošla godina": [
      { country: "Germany",        percentage: 44.78 },
      { country: "Belgium",        percentage: 14.21 },
      { country: "France",         percentage:  8.42 },
      { country: "United Kingdom", percentage: 11.59 },
      { country: "Netherlands",    percentage:  4.96 },
      { country: "Austria",        percentage:  0.32 },
      { country: "Poland",         percentage:  2.98 },
      { country: "Sweden",         percentage:  9.40 },
      { country: "United States",  percentage:  2.96 },
      { country: "Norway",         percentage:  0.39 },
    ],
    "Januar": [
      { country: "Germany",        percentage: 50.07 },
      { country: "United Kingdom", percentage: 13.33 },
      { country: "Belgium",        percentage: 12.34 },
      { country: "Netherlands",    percentage:  7.39 },
      { country: "Sweden",         percentage:  7.79 },
      { country: "United States",  percentage:  9.07 },
    ],
    "Februar": [
      { country: "Germany",   percentage: 53.12 },
      { country: "France",    percentage: 10.07 },
      { country: "Belgium",   percentage: 11.55 },
      { country: "Sweden",    percentage:  9.41 },
      { country: "Netherlands", percentage: 7.18 },
      { country: "Poland",    percentage:  8.72 },
    ],
    "Mart": [
      { country: "Germany",        percentage: 50.52 },
      { country: "Belgium",        percentage: 10.93 },
      { country: "France",         percentage: 10.12 },
      { country: "United Kingdom", percentage: 11.93 },
      { country: "Netherlands",    percentage:  7.31 },
      { country: "Sweden",         percentage:  9.20 },
    ],
    "April": [
      { country: "Germany",        percentage: 38.75 },
      { country: "Belgium",        percentage: 12.03 },
      { country: "France",         percentage: 11.91 },
      { country: "United Kingdom", percentage: 14.66 },
      { country: "Sweden",         percentage:  8.64 },
      { country: "Poland",         percentage:  7.05 },
      { country: "Netherlands",    percentage:  4.26 },
      { country: "Austria",        percentage:  2.68 },
    ],
    "Maj": [
      { country: "Germany",        percentage: 50.01 },
      { country: "United Kingdom", percentage: 21.29 },
      { country: "Belgium",        percentage: 16.00 },
      { country: "Sweden",         percentage: 12.70 },
    ],
    "Jun": [
      { country: "Germany",        percentage: 46.66 },
      { country: "Belgium",        percentage: 12.39 },
      { country: "France",         percentage: 12.96 },
      { country: "Netherlands",    percentage:  5.94 },
      { country: "Poland",         percentage:  5.65 },
      { country: "Sweden",         percentage:  9.71 },
      { country: "United Kingdom", percentage:  6.68 },
    ],
    "Jul": [
      { country: "Germany",        percentage: 51.62 },
      { country: "Belgium",        percentage: 19.61 },
      { country: "United Kingdom", percentage: 14.63 },
      { country: "Sweden",         percentage: 14.09 },
    ],
    "Avgust": [
      { country: "Germany",        percentage: 46.81 },
      { country: "United Kingdom", percentage: 15.77 },
      { country: "Belgium",        percentage: 10.99 },
      { country: "Sweden",         percentage: 12.89 },
      { country: "France",         percentage:  0.83 },
      { country: "United States",  percentage:  7.28 },
      { country: "Netherlands",    percentage:  5.41 },
    ],
    "Septembar": [
      { country: "Germany",        percentage: 41.00 },
      { country: "Belgium",        percentage: 13.26 },
      { country: "France",         percentage: 11.94 },
      { country: "United Kingdom", percentage:  8.76 },
      { country: "Sweden",         percentage:  7.68 },
      { country: "Netherlands",    percentage:  6.09 },
      { country: "United States",  percentage:  5.85 },
      { country: "Poland",         percentage:  5.41 },
    ],
    "Oktobar": [
      { country: "Germany",        percentage: 36.59 },
      { country: "Belgium",        percentage: 16.92 },
      { country: "United Kingdom", percentage:  9.61 },
      { country: "France",         percentage: 10.01 },
      { country: "Netherlands",    percentage:  5.99 },
      { country: "Poland",         percentage:  5.58 },
      { country: "Sweden",         percentage:  6.64 },
      { country: "United States",  percentage:  4.75 },
      { country: "Norway",         percentage:  3.91 },
    ],
    "Novembar": [
      { country: "Germany",        percentage: 39.88 },
      { country: "Belgium",        percentage: 22.09 },
      { country: "France",         percentage: 11.51 },
      { country: "United Kingdom", percentage: 12.01 },
      { country: "Netherlands",    percentage:  6.52 },
      { country: "Sweden",         percentage:  7.96 },
    ],
    "Decembar": [
      { country: "Germany",        percentage: 41.06 },
      { country: "Belgium",        percentage: 14.30 },
      { country: "France",         percentage: 13.69 },
      { country: "United Kingdom", percentage: 12.22 },
      { country: "Sweden",         percentage: 10.42 },
      { country: "United States",  percentage:  8.30 },
    ],
  };

  const getCurrentData = () => {
    const data = countryData[selectedPeriod] || countryData['Prošla godina'];
    return [...data].sort((a, b) => b.percentage - a.percentage);
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value as PeriodKey);
  };

  useEffect(() => {
    const el = document.getElementById('mapTwo');
    if (!el) return;
    const mapInstance = new jsVectorMap({
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
        if (code === 'EG') {
          tooltip.selector.innerHTML = tooltip.text() + ' <b>(Hello Russia)</b>';
        }
      },
    });
    return () => {
      mapInstance.destroy();
    };
  }, []);
  

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
                <option value="Prošla godina" className='dark:bg-boxdark'>Prošla godina</option>
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
        <div id="mapTwo" style={{ width: '100%', minHeight: 300, height: '300px', maxWidth: '100%' }}></div>
      </div>
      <div className="space-y-2.5 border-t border-stroke p-4 dark:border-strokedark md:p-6 xl:p-7.5">
        {getCurrentData().map((item, index) => (
          <div key={index} className="items-center sm:flex">
            <div className="flex w-full max-w-42.5 items-center">
              <p className="font-medium text-black dark:text-white">
                {item.country}
              </p>
            </div>
            <div className="relative block h-4.5 w-full rounded bg-meta-9 dark:bg-meta-4">
              <div
                className="absolute left-0 top-0 flex h-full items-center rounded bg-primary"
                style={{ width: `${item.percentage}%` }}
              >
                {item.percentage >= 10 && (
                  <span className="px-1 text-xs font-medium text-white">
                    {item.percentage}%
                  </span>
                )}
              </div>
              {item.percentage < 10 && (
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

export default MapExportByCountry;
