import { useMemo, useEffect, useState } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
  // Column as TableColumn,
} from 'react-table';
import ColumnFilter from './ColumnFilter';
import { useNavigate } from 'react-router-dom';
import {getAuthToken, getUserDetails} from "../../utils/authUtils";

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

// Product icon mapping
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

interface BuyOffer {
  id: number;
  variant: {
    name: string;
    product: {
      name: string;
    };
  };
  dateFrom: string;
  dateTo: string;
  quantity: number | string;
  city: string;
  description: string;
  paymentDetails: string;
  status: string;
  // company: {
  //   bonitet: string;
  // };
}

// interface CustomColumn extends Omit<TableColumn<BuyOffer>, 'className'> {
//   className?: string;
// }

const column = [
  {
    Header: 'Proizvod',
    accessor: (row: BuyOffer) => `${row.variant.product.name} - ${row.variant.name}`,
    minWidth: 100,
    className: 'whitespace-nowrap',
    Cell: ({ value }: { value: string }) => (
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
    minWidth: 90,
    // Hide on mobile
    className: 'hidden md:table-cell whitespace-nowrap',
    Cell: ({ value }: { value: string }) => (
      <span className="text-sm md:text-base">{new Date(value).toLocaleDateString()}</span>
    ),
  },
  {
    Header: 'Važi do',
    accessor: 'dateTo',
    minWidth: 90,
    className: 'hidden md:table-cell whitespace-nowrap',
    Cell: ({ value }: { value: string | null }) => (
      <span className="text-sm md:text-base">
        {value
          ? new Date(value).toLocaleDateString('sr-RS')
          : 'Rok nije specificiran'}
      </span>
    ),
  },
  
  {
    Header: 'Količina',
    accessor: 'quantity',
    minWidth: 90,
    // Always show this column
    className: 'whitespace-nowrap',
    Cell: ({ value }: { value: number | string }) => <span>{!value || value === 0 ? 'Količina nije navedena' : `${value} kg`}</span>,
  },
  // {
  //   Header: 'Bonitet',
  //   accessor: 'company.bonitet',
  //   minWidth: 90,
  //   // Hide on mobile
  //   className: 'hidden md:table-cell whitespace-nowrap',
  // },
  {
    Header: 'Način plaćanja',
    accessor: 'paymentDetails',
    minWidth: 90,
    // Always show this column
    className: 'whitespace-nowrap',
  },
  {
    Header: 'Status',
    accessor: 'status',
    minWidth: 90,
    className: 'hidden md:table-cell whitespace-nowrap',
    Cell: ({ value }: { value: string }) => (
      <span className={`px-3 py-1 rounded-full ${
        value === 'Aktivan' 
          ? 'bg-success/10 text-success shadow-success/50 shadow-sm' 
          : ''
      }`}>
        {value}
      </span>
    ),
  },
] as const;

const API_URL = import.meta.env.VITE_API_URL;

const DataTableOne = () => {
  const [data, setData] = useState<BuyOffer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const user = getUserDetails();
  const userType = user?.userType || null;

  useEffect(() => {
    const fetchBuyOffers = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch(`${API_URL}/api/offers/buy-offers`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch buy offers');
        }

        const buyOffers = await response.json();
        setData(buyOffers);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBuyOffers();
  }, []);

  // const columns = useMemo(() => column, []);
  const tableData = useMemo(() => data, [data]);

  const tableInstance = useTable<BuyOffer>(
    {
      columns: column as any,
      data: tableData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  

  const navigate = useNavigate();
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
            onClick={() => navigate('/buy-offers/new')}
          >
            <span className="hidden md:inline">Kreiraj novi zahtev za kupovinu</span>
            <span className="md:hidden">Novi zahtev</span>
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

      <div className="overflow-x-auto">
        <table
          {...getTableProps()}
          className="datatable-table w-full text-sm md:text-base border-collapse"
        >
          <thead className="border-separate">
            {headerGroups.map((headerGroup, key) => (
              <tr
                className="border-t border-stroke dark:border-strokedark"
                {...headerGroup.getHeaderGroupProps()}
                key={key}
              >
                {headerGroup.headers.map((column, key) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={key}
                    className={(column as any).className}
                  >
                    <div className="flex items-center">
                      <span> {column.render('Header')}</span>

                      <div className="ml-2 inline-flex flex-col space-y-[2px]">
                        <span className="inline-block">
                          <svg
                            className="fill-current"
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M5 0L0 5H10L5 0Z" fill="" />
                          </svg>
                        </span>
                        <span className="inline-block">
                          <svg
                            className="fill-current"
                            width="10"
                            height="5"
                            viewBox="0 0 10 5"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 5L10 0L-4.37114e-07 8.74228e-07L5 5Z"
                              fill=""
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="text-sm md:text-base">
            {page.map((row, key) => {
              prepareRow(row);
              return (
                <tr
                  className="border-t border-stroke dark:border-strokedark cursor-pointer hover:bg-gray-100 dark:hover:bg-meta-4"
                  {...row.getRowProps()}
                  key={key}
                  onClick={() => navigate(`/buy-offers/${(row.original as BuyOffer).id}`)}
                >
                  {row.cells.map((cell, key) => {
                    return (
                      <td 
                        {...cell.getCellProps()} 
                        key={key}
                        className={(cell.column as any).className}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between border-t border-stroke px-6 pt-5 dark:border-strokedark">
        <div className="flex">
          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.1777 16.1156C12.009 16.1156 11.8402 16.0593 11.7277 15.9187L5.37148 9.44995C5.11836 9.19683 5.11836 8.80308 5.37148 8.54995L11.7277 2.0812C11.9809 1.82808 12.3746 1.82808 12.6277 2.0812C12.8809 2.33433 12.8809 2.72808 12.6277 2.9812L6.72148 8.99995L12.6559 15.0187C12.909 15.2718 12.909 15.6656 12.6559 15.9187C12.4871 16.0312 12.3465 16.1156 12.1777 16.1156Z"
                fill=""
              />
            </svg>
          </button>

          {pageOptions.map((_page, index) => (
            <button
              key={index}
              onClick={() => {
                gotoPage(index);
              }}
              className={`${
                pageIndex === index && 'bg-primary text-white'
              } mx-1 flex cursor-pointer items-center justify-center rounded-md p-1 px-3 hover:bg-primary hover:text-white`}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="flex cursor-pointer items-center justify-center rounded-md p-1 px-2 hover:bg-primary hover:text-white"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <svg
              className="fill-current"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.82148 16.1156C5.65273 16.1156 5.51211 16.0593 5.37148 15.9468C5.11836 15.6937 5.11836 15.3 5.37148 15.0468L11.2777 8.99995L5.37148 2.9812C5.11836 2.72808 5.11836 2.33433 5.37148 2.0812C5.62461 1.82808 6.01836 1.82808 6.27148 2.0812L12.6277 8.54995C12.8809 8.80308 12.8809 9.19683 12.6277 9.44995L6.27148 15.9187C6.15898 16.0312 5.99023 16.1156 5.82148 16.1156Z"
                fill=""
              />
            </svg>
          </button>
        </div>
        <p className="font-medium">
          Prikaz {pageIndex + 1} od {pageOptions.length} stranica
        </p>
      </div>
    </section>
  );
};

export default DataTableOne;
