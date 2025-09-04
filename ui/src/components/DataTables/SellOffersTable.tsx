import { useMemo, useEffect, useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAuthToken, getUserDetails } from "../../utils/authUtils";
import { useSubscription } from '../../contexts/SubscriptionContext';
import { Column } from 'react-table';

// Import product images
import Malina from '../../assets/images/raspberry.svg';
import Borovnica from '../../assets/images/blueberries.svg';
import Kupina from '../../assets/images/blackberry.svg';
import Višnja from '../../assets/images/visnja.png';
import Jagoda from '../../assets/images/strawberry.png';
import Krompir from '../../assets/images/potato.svg';
import Jabuka from '../../assets/images/apple.avif';
import Aronija from '../../assets/images/aronia.png';
import Grožđe from '../../assets/images/grozdje1.png';
import Luk from '../../assets/images/onion.png';
import Breskva from '../../assets/images/peach.avif';
import Kajsija from '../../assets/images/peach.avif';
import Kruška from '../../assets/images/pear.png';
import Šljiva from '../../assets/images/sljiva.png';

const productIcons: { [key: string]: string } = {
  'Malina Griz': Malina,
  'Malina 90/10': Malina,
  'Borovnica': Borovnica,
  'Kupina': Kupina,
  'Višnja': Višnja,
  'Jagoda': Jagoda,
  'Krompir crveni': Krompir,
  'Krompir beli': Krompir,
  'Jabuka': Jabuka,
  'Aronija': Aronija,
  'Grožđe': Grožđe,
  'Luk': Luk,
  'Breskva': Breskva,
  'Kajsija': Kajsija,
  'Kruška': Kruška,
  'Šljiva': Šljiva
};

interface SellOffer {
  id: number;
  variant: {
    name: string;
    product: {
      name: string;
    };
  };
  dateFrom: string;
  dateTo: string;
  quantity: number;
  city: string;
  price: string;
  status: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const DataTableOne = () => {
  const [data, setData] = useState<SellOffer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [variantName, setVariantName] = useState<string | null>(null);
  const user = getUserDetails();
  const userType = user?.userType || null;
  const { hasAccess, isLoading: subscriptionLoading } = useSubscription();

  const [searchParams] = useSearchParams();
  const variantId = searchParams.get('variantId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellOffers = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const url = variantId 
          ? `${API_URL}/api/offers/sell-offers/variant/${variantId}`
          : `${API_URL}/api/offers/sell-offers`;

        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch sell offers');
        }

        const sellOffers = await response.json();
        setData(sellOffers);

        if (variantId && sellOffers.length > 0) {
          const firstOffer = sellOffers[0];
          setVariantName(`${firstOffer.variant.product.name} - ${firstOffer.variant.name}`);
        } else {
          setVariantName(null);
        }

      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSellOffers();
  }, [variantId]);

  const columns: Column<SellOffer>[] = useMemo(() => [
    {
      Header: 'Proizvod',
      accessor: (row) => `${row.variant.product.name} - ${row.variant.name}`,
      Cell: ({ value }) => (
        <div className="flex items-center gap-3">
          <div className="h-8 w-8">
            <img
              src={productIcons[value.split(' - ')[0]] || Malina}
              alt={value}
              className="h-full w-full object-contain"
            />
          </div>
          <span>{value}</span>
        </div>
      ),
    },
    {
      Header: 'Važi od',
      accessor: 'dateFrom',
      Cell: ({ value }) => (
        <span className="text-sm md:text-base">{new Date(value).toLocaleDateString()}</span>
      ),
    },
    {
      Header: 'Važi do',
      accessor: 'dateTo',
      Cell: ({ value }) => (
        value
          ? <span className="text-sm md:text-base">{new Date(value).toLocaleDateString('sr-RS')}</span>
          : <span className="text-gray-500 italic">Rok nije specificiran</span>
      ),
    },
    {
      Header: 'Količina',
      accessor: 'quantity',
      Cell: ({ value }) => <span>{value} kg</span>,
    },
    {
      Header: 'Mesto',
      accessor: 'city',
    },
    {
      Header: 'Cena',
      accessor: 'price',
      Cell: ({ value }) => <span>{value} €</span>,
    },
    {
      Header: 'Status',
      accessor: 'status',
      Cell: ({ value }) => (
        <span className={`px-3 py-1 rounded-full ${
          value === 'Aktivan' 
            ? 'bg-success/10 text-success shadow-success/50 shadow-sm' 
            : ''
        }`}>
          {value}
        </span>
      ),
    },
  ], []);

  const tableData = useMemo(() => data, [data]);
  const gatedData = useMemo(() => (subscriptionLoading ? tableData : (hasAccess ? tableData : tableData.slice(0, 3))), [tableData, hasAccess, subscriptionLoading]);
  const tableInstance = useTable<SellOffer>(
    {
      columns,
      data: gatedData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    gotoPage,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  if (isLoading) {
    return (
      <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-center items-center h-32">
          <p>Loading...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-center items-center h-32">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      {!subscriptionLoading && !hasAccess && (
        <div className="mx-8 mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-amber-800 text-sm dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-200">
          Pregled prodajnih ponuda je ograničen u besplatnoj verziji. Prikazane su samo uzorkovane ponude, a detalji su sakriveni.
        </div>
      )}

      {/* Naslov + Reset filter */}
      <div className="flex justify-between items-center mb-4 px-8">
        <h1 className="text-xl font-bold">
          {variantName ? `Ponude za: ${variantName}` : 'Sve ponude'}
        </h1>

        {variantId && (
          <button
            onClick={() => navigate('/sell-offers')}
            className="text-sm bg-gray-200 hover:bg-gray-300 dark:bg-meta-4 dark:hover:bg-meta-3 px-4 py-2 rounded-md"
          >
            Resetuj filter
          </button>
        )}
      </div>

      {/* Pretraga i page size */}
      <div className="flex justify-between  px-8 pb-4">
        <div className="w-100">
          <input
            type="text"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full rounded-md border border-stroke bg-transparent px-5 py-2.5 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-4">
          {userType === 'company' && (
            <button
              className="bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base"
              onClick={() => navigate('/sell-offers/new')}
            >
              <span className="hidden md:inline">Kreiraj novu ponudu</span>
              <span className="md:hidden">Nova ponuda</span>
            </button>
          )}
          <div className="flex items-center font-medium">
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
              className="bg-transparent pl-2"
            >
              {[5, 10, 20, 50].map((page) => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <p className="pl-2 text-black dark:text-white">Po Stranici</p>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table {...getTableProps()} className="w-full text-sm md:text-base border-collapse">
          <thead className="bg-gray-50 dark:bg-meta-4">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} className="border-t border-stroke dark:border-strokedark">
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2">
                    <div className="flex items-center justify-between">
                      {column.render('Header')}
                      <span className="ml-2">
                        <svg className="w-3 h-3" viewBox="0 0 10 10">
                          <path d="M0 5 L5 0 L10 5" fill="none" stroke="currentColor" strokeWidth="1" />
                        </svg>
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr 
                  {...row.getRowProps()} 
                  className={`border-t border-stroke dark:border-strokedark ${subscriptionLoading ? 'hover:bg-gray-100 dark:hover:bg-meta-4 cursor-pointer' : (hasAccess ? 'hover:bg-gray-100 dark:hover:bg-meta-4 cursor-pointer' : 'opacity-70 cursor-not-allowed')}`}
                  onClick={() => {
                    if (!subscriptionLoading && !hasAccess) return;
                    navigate(`/sell-offers/${row.original.id}`)
                  }}
                >
                  {row.cells.map((cell) => {
                    const headerLabel = typeof cell.column.Header === 'string' ? cell.column.Header : '';
                    const isSensitive = ['Količina', 'Mesto', 'Cena', 'Važi od', 'Važi do'].includes(headerLabel);
                    return (
                      <td {...cell.getCellProps()} className="px-4 py-2">
                        {hasAccess
                          ? cell.render('Cell')
                          : headerLabel === 'Proizvod'
                            ? (() => {
                                const val = (cell.value as string) || '';
                                const base = val.split(' - ')[0] || '***';
                                return <span>{base} - ***</span>;
                              })()
                            : isSensitive
                              ? <span>***</span>
                              : cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center border-t border-stroke dark:border-strokedark px-8 pt-5">
        <div className="flex gap-2">
          <button onClick={() => previousPage()} disabled={!canPreviousPage} className="px-3 py-1 rounded-md bg-gray-100 dark:bg-meta-4 hover:bg-primary hover:text-white">
            Prethodna
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage} className="px-3 py-1 rounded-md bg-gray-100 dark:bg-meta-4 hover:bg-primary hover:text-white">
            Sledeća
          </button>
        </div>
        <p className="text-sm md:text-base">
          Strana {pageIndex + 1} od {pageOptions.length}
        </p>
      </div>

    </section>
  );
};

export default DataTableOne;

