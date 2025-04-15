import React from 'react';

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

interface ExportRecord {
  country: string;
  quantity: number;
  price: number;
}


const ExportByCountryContent: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<PeriodKey>('Prošla godina');

  const contentData: Record<PeriodKey, ExportRecord[]> = {
    "Prošla godina": [
      // Example "Prošla godina" data with mapped country names (assuming you computed them):
      { country: "Germany", quantity: 16259104, price: 3.09 },
      { country: "Belgium", quantity: 5159277, price: 3.58 },
      { country: "France", quantity: 3058598.1, price: 3.47 },
      { country: "United Kingdom", quantity: 4208729, price: 3.45 },
      { country: "Netherlands", quantity: 1802994, price: 3.12 },
      { country: "Austria", quantity: 116058, price: 2.91 },
      { country: "Poland", quantity: 1083047, price: 3.09 },
      { country: "Sweden", quantity: 3415637, price: 3.54 },
      { country: "United States", quantity: 1074260, price: 3.63 },
      { country: "Norway", quantity: 142430, price: 4.42 },
    ],
    "Januar": [
      { country: "Germany", quantity: 1480993, price: 2.48 },
      { country: "United Kingdom", quantity: 394205, price: 2.87 },
      { country: "Belgium", quantity: 364791, price: 3.91 },
      { country: "Netherlands", quantity: 218402, price: 2.64 },
      { country: "Sweden", quantity: 230435, price: 3.29 },
      { country: "United States", quantity: 268064, price: 2.69 },
    ],
    "Februar": [
      { country: "Germany", quantity: 1519542, price: 2.48 },
      { country: "France", quantity: 288048, price: 2.72 },
      { country: "Belgium", quantity: 330249, price: 3.45 },
      { country: "Sweden", quantity: 269212, price: 3.29 },
      { country: "Netherlands", quantity: 205260, price: 2.55 },
      { country: "Poland", quantity: 249480, price: 2.52 },
    ],
    "Mart": [
      { country: "Germany", quantity: 1797283, price: 2.52 },
      { country: "Belgium", quantity: 388771, price: 3.44 },
      { country: "France", quantity: 360158, price: 2.97 },
      { country: "United Kingdom", quantity: 424635, price: 3.06 },
      { country: "Netherlands", quantity: 260082, price: 2.54 },
      { country: "Sweden", quantity: 327314, price: 3.37 },
    ],
    "April": [
      { country: "Germany", quantity: 1676226, price: 2.49 },
      { country: "Belgium", quantity: 520134, price: 3.09 },
      { country: "France", quantity: 515023, price: 3.10 },
      { country: "United Kingdom", quantity: 634030, price: 2.95 },
      { country: "Sweden", quantity: 373472, price: 3.38 },
      { country: "Poland", quantity: 304920, price: 2.70 },
      { country: "Netherlands", quantity: 184370, price: 2.79 },
      { country: "Austria", quantity: 116058, price: 2.91 },
    ],
    "Maj": [
      { country: "Germany", quantity: 1153364, price: 2.55 },
      { country: "United Kingdom", quantity: 491136, price: 2.98 },
      { country: "Belgium", quantity: 368904, price: 2.90 },
      { country: "Sweden", quantity: 292727, price: 3.29 },
    ],
    "Jun": [
      { country: "Germany", quantity: 1175883, price: 2.59 },
      { country: "Belgium", quantity: 312338, price: 2.96 },
      { country: "France", quantity: 326456, price: 2.97 },
      { country: "Netherlands", quantity: 149764, price: 2.92 },
      { country: "Poland", quantity: 142296, price: 2.76 },
      { country: "Sweden", quantity: 244812, price: 3.27 },
      { country: "United Kingdom", quantity: 168448, price: 3.03 },
    ],
    "Jul": [
      { country: "Germany", quantity: 971353, price: 3.18 },
      { country: "Belgium", quantity: 369022, price: 3.15 },
      { country: "United Kingdom", quantity: 275437, price: 2.96 },
      { country: "Sweden", quantity: 265217, price: 3.14 },
    ],
    "Avgust": [
      { country: "Germany", quantity: 1252408, price: 3.16 },
      { country: "United Kingdom", quantity: 421823, price: 3.65 },
      { country: "Belgium", quantity: 293847, price: 3.39 },
      { country: "Sweden", quantity: 344724, price: 3.40 },
      { country: "France", quantity: 22201, price: 3.62 },
      { country: "United States", quantity: 194688, price: 3.93 },
      { country: "Netherlands", quantity: 144808, price: 3.28 },
    ],
    "Septembar": [
      { country: "Germany", quantity: 1387252, price: 3.95 },
      { country: "Belgium", quantity: 448781, price: 4.01 },
      { country: "France", quantity: 404197, price: 3.62 },
      { country: "United Kingdom", quantity: 296482, price: 3.99 },
      { country: "Sweden", quantity: 260011, price: 3.47 },
      { country: "Netherlands", quantity: 206152, price: 3.64 },
      { country: "United States", quantity: 198000, price: 3.76 },
      { country: "Poland", quantity: 182919, price: 3.93 },
    ],
    "Oktobar": [
      { country: "Germany", quantity: 1333834, price: 3.84 },
      { country: "Belgium", quantity: 616864, price: 4.02 },
      { country: "United Kingdom", quantity: 350596, price: 4.24 },
      { country: "France", quantity: 364848, price: 3.68 },
      { country: "Netherlands", quantity: 218366, price: 3.77 },
      { country: "Poland", quantity: 203432, price: 3.85 },
      { country: "Sweden", quantity: 242108, price: 4.15 },
      { country: "United States", quantity: 173076, price: 4.32 },
      { country: "Norway", quantity: 142430, price: 4.42 },
    ],
    "Novembar": [
      { country: "Germany", quantity: 1320322, price: 4.09 },
      { country: "Belgium", quantity: 731243, price: 3.85 },
      { country: "France", quantity: 380.9211, price: 4.18 },
      { country: "United Kingdom", quantity: 397479, price: 4.09 },
      { country: "Netherlands", quantity: 215790, price: 4.03 },
      { country: "Sweden", quantity: 263368, price: 4.29 },
    ],
    "Decembar": [
      { country: "Germany", quantity: 1190644, price: 4.23 },
      { country: "Belgium", quantity: 414333, price: 4.11 },
      { country: "France", quantity: 396746, price: 4.36 },
      { country: "United Kingdom", quantity: 354458, price: 4.47 },
      { country: "Sweden", quantity: 302237, price: 4.26 },
      { country: "United States", quantity: 240432, price: 3.83 },
    ],
  };

  const getCurrentData = () => {
    return contentData[selectedPeriod] || contentData['Prošla godina'];
  };

  return (
    <div className="mb-4 rounded-sm border border-stroke bg-white p-4 shadow-default dark:border-strokedark dark:bg-boxdark md:mb-6 md:p-6 xl:p-7.5 2xl:mb-7.5">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-black dark:text-white">
            Rolend: Statistika izvoza po zemlji po mesecima
          </h3>
        </div>
        <div className="relative z-20 inline-block rounded bg-gray-2 dark:bg-boxdark">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value as PeriodKey)}
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
          {/* ... dropdown arrow icon ... */}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-10 py-2">
          <div className="col-span-6">
            <p className="text-sm">Država</p>
          </div>
          <div className="col-span-2">
            <p className="text-center text-sm">Količina neto</p>
          </div>
          <div className="col-span-2">
            <p className="text-right text-sm">Prosečna cena</p>
          </div>
        </div>
        
        {getCurrentData().map((item, index) => (
          <div key={index} className="relative z-1 grid grid-cols-10 py-2">
            <span className="absolute left-0 top-0 -z-1 h-full w-[74%] rounded bg-gray dark:bg-meta-4"></span>
            <div className="col-span-6 pl-3.5">
              <p className="text-sm">{item.country}</p>
            </div>
            <div className="col-span-2">
              <p className="text-center text-sm">
                {item.quantity.toLocaleString()} kg
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-right text-sm">{item.price} EUR</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExportByCountryContent;
