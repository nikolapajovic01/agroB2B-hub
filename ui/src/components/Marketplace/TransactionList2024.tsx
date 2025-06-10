import React, { useState, useEffect } from 'react';

const types = [
  'Sve', 'Rolend', 'Griz', 'Organic', 'Miker', 'Bruh', 'Ostalo'
];

const TransactionList2024: React.FC = () => {
  const [transactions, setTransactions] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState('Sve');
  const [selectedType, setSelectedType] = useState('Sve');
  const [searchCountry, setSearchCountry] = useState('');
  const itemsPerPage = 25;

  const months = [
    'Sve', 'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun',
    'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
  ];

  const getMonthNumber = (monthName: string): number => {
    if (monthName === 'Sve') return 0;
    return months.indexOf(monthName);
  };

  useEffect(() => {
    fetch('http://localhost:3000/api/exports') // ili http://localhost:3000/api/exports ako nemaš proxy
      .then(res => res.json())
      .then(data => setTransactions(data))
      .catch(err => console.error('Greška pri dohvatanju transakcija:', err));
  }, []);

  const filteredTransactions = transactions
    .filter(transaction => {
      const transactionDate = new Date(transaction.date);
      const matchesMonth =       selectedMonth === 'Sve' ||
      transactionDate.getMonth() + 1 === getMonthNumber(selectedMonth);

      // Tip maline - jednostavan primer (možeš unaprediti po potrebi)
      const matchesType =
        selectedType === 'Sve' ||
        (transaction.type && transaction.type.toLowerCase() === selectedType.toLowerCase());

      // Država
      const matchesCountry =
        !searchCountry ||
        (transaction.countryName && transaction.countryName.toLowerCase().includes(searchCountry.toLowerCase()));

      return matchesMonth && matchesType && matchesCountry;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('sr-RS');
  };

  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        
        {/* Header */}
        
        <div className="p-4 md:p-6 xl:p-7.5 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
          <h2 className="text-title-sm2 font-bold text-black dark:text-white">
            Izveštaj transakcija
          </h2>
          <select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              setCurrentPage(1);
            }}
            className="rounded-lg border-stroke px-3 py-2 dark:border-strokedark"
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border-stroke px-3 py-2 dark:border-strokedark"
            >
              {types.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Pretraži po državi..."
              value={searchCountry}
              onChange={(e) => {
                setSearchCountry(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border-stroke px-3 py-2 dark:border-strokedark"
            />
            {/* Reset filtera */}
            <button
              onClick={() => {
                setSelectedMonth('Januar');
                setSelectedType('Sve');
                setSearchCountry('');
                setCurrentPage(1);
              }}
              className="rounded-lg border border-stroke px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
            >
              Resetuj filtere
            </button>
        </div>

        {/* Table Head */}
        <div className="sticky top-0 bg-white dark:bg-boxdark z-10 border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
          <div className="flex items-start gap-1 md:gap-3 text-gray-600 dark:text-gray-300">
            <div className="w-2/12 font-semibold text-xs md:text-sm">Datum</div>
            <div className="w-2/12 font-semibold text-xs md:text-sm">Proizvod</div>
            <div className="w-2/12 font-semibold text-xs md:text-sm">Država</div>
            <div className="w-2/12 font-semibold text-xs md:text-sm">Količina</div>
            <div className="w-2/12 font-semibold text-xs md:text-sm">Vrednost</div>
            <div className="w-2/12 font-semibold text-xs md:text-sm">Cena</div>
          </div>
        </div>

        {/* Table Body */}
        <div className="p-2 md:p-6 xl:p-7.5 animate-fadeIn">
          <div className="flex flex-col gap-3 md:gap-7">
            {filteredTransactions
              .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
              .map((transaction, index) => (
              <div key={index} className="flex items-start gap-1 md:gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 p-2 rounded-md">
                
                <div className="w-2/12 font-medium text-xs md:text-sm break-words">
                  {formatDate(transaction.date)}
                </div>

                <div className="w-2/12 font-medium text-xs md:text-sm break-words">
                  {transaction.product}
                </div>

                <div className="w-2/12 flex items-center gap-2 font-medium text-xs md:text-sm break-words">
                  {transaction.countryCode && (
                    <img
                      src={`https://flagcdn.com/w40/${transaction.countryCode.toLowerCase()}.png`}
                      alt={transaction.countryName}
                      className="h-4 w-6 object-cover rounded-sm"
                    />
                  )}
                  {transaction.countryName}
                </div>

                <div className="w-2/12 font-medium text-xs md:text-sm break-words">
                  {transaction.quantityKg.toLocaleString()} kg
                </div>

                <div className="w-2/12 font-medium text-xs md:text-sm break-words">
                  € {transaction.valueEur.toFixed(2)}
                </div>

                <div className="w-2/12 font-medium text-xs md:text-sm break-words">
                  € {transaction.unitPriceEur.toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-2 items-center">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="rounded-lg border border-stroke px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              Prethodna
            </button>
            <span className="px-4 text-xs md:text-sm text-gray-700 dark:text-gray-300">
              Strana {currentPage} od {Math.max(1, Math.ceil(filteredTransactions.length / itemsPerPage))}
            </span>
            <button
              onClick={() => setCurrentPage(prev =>
                Math.min(prev + 1, Math.ceil(filteredTransactions.length / itemsPerPage))
              )}
              disabled={currentPage >= Math.ceil(filteredTransactions.length / itemsPerPage)}
              className="rounded-lg border border-stroke px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              Sledeća
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList2024;

