import { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  useFilters,
  usePagination,
} from 'react-table';
import ColumnFilter from './ColumnFilter';
import { useNavigate } from 'react-router-dom';

import { Column } from 'react-table';


interface Tender {
  id: string;
  productName: string
  quantity: string;
  date: string;
  dateTo: string;
  bonitet: string;
  promet: string;
  status: string;
}

// tables data
// tables data
const dataOne: Tender[] = [
  {
    id: '167',
    productName: 'Malina',
    quantity: '20t',
    date: '2023-05-14',
    dateTo: '2023-06-14',
    bonitet: 'A',
    promet: '10000$',
    status: 'Prodaja',
  },
  {
    id: '168',
    productName: 'Šljive',
    quantity: '15t',
    date: '2023-06-20',
    dateTo: '2023-07-20',
    bonitet: 'B',
    promet: '7500$',
    status: 'Kupovina',
  },
  {
    id: '169',
    productName: 'Jabuke',
    quantity: '25t',
    date: '2023-07-01',
    dateTo: '2023-08-01',
    bonitet: 'A',
    promet: '12500$',
    status: 'Prodaja',
  },
];

const column: Column<Tender>[] = [
  {
    Header: 'ID',
    accessor: 'id',
  },
  {
    Header: 'Naziv Proizvoda',
    accessor: 'productName',
  },
  {
    Header: 'Količina',
    accessor: 'quantity',
  },
  {
    Header: 'Datum',
    accessor: 'date',
  },
  {
    Header: 'Datum Do',
    accessor: 'dateTo',
  },
  {
    Header: 'Bonitet',
    accessor: 'bonitet',
  },
  {
    Header: 'Promet',
    accessor: 'promet',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
];

const DataTableOne = () => {
  const columns = useMemo(() => column, []);
  const data = useMemo(() => dataOne, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFilter,
    };
  }, []);
  const navigate = useNavigate();

  const tableInstance = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
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

  return (
    <section
      className="data-table-common rounded-sm border border-stroke bg-white py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex justify-between items-center px-8 pb-4">
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
          <button
            className="bg-primary text-white px-4 py-2 rounded-md"
            onClick={() => navigate('/new-tender')}
          >
            Kreiraj Tender
          </button>
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
      <table
        {...getTableProps()}
        className="datatable-table datatable-one w-full table-auto border-collapse overflow-hidden break-words px-4 md:table-fixed md:overflow-auto md:px-8"
      >
        <thead className="border-separate px-4">
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

                {column.canFilter ? column.render('Filter') : null}
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {page.map((row, key) => {
          prepareRow(row);
          return (
            <tr
              className="border-t border-stroke dark:border-strokedark"
              {...row.getRowProps()}
              key={key}
            >
              {row.cells.map((cell, key) => {
                return (
                  <td {...cell.getCellProps()} key={key}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
        </tbody>
      </table>

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
