import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const options: ApexOptions = {
  legend: {
    show: false,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#80CAEE'],
  chart: {
    fontFamily: 'Satoshi, sans-serif',
    height: 335,
    type: 'area',
    dropShadow: {
      enabled: true,
      color: '#623CEA14',
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: true,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: 'straight',
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: '#fff',
    strokeColors: ['#3056D3', '#80CAEE'],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: 'category',
    categories: [
      'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 100,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
  activeView: 'quantity' | 'price';
}

const ExportMainChart: React.FC = () => {

  const quantityData = [
    {
      name: 'Rolend',
      data: [
        3937188, // January
        4026697, // February
        4503281, // March
        4918261, // April
        3567739, // May
        2978306, // June
        3215966, // July
        3436133, // August
        3884912, // September
        4162078, // October
        4110270, // November
        3755565, // December
      ],
    },
    {
      name: 'Griz',
      data: [
        1446652, // Jan
        1638855, // Feb
        2008096, // Mar
        2243636, // Apr
        1437037, // May
        1072558, // Jun
        773465,  // Jul
        1028255, // Aug
        1200692, // Sep
        1177843, // Oct
        1140297, // Nov
        672163,  // Dec
      ],
    },
    {
      name: 'Organic',
      data: [
        530535, // Jan
        707483, // Feb
        641514, // Mar
        397472, // Apr
        377738, // May
        162099, // Jun
        265885, // Jul
        478753, // Aug
        753095, // Sep
        625110, // Oct
        925766, // Nov
        430174, // Dec
      ],
    },
    {
      name: 'Ostalo',
      data: [
        957807,  // Jan
        701365,  // Feb
        852522,  // Mar
        350833,  // Apr
        784539,  // May
        399416,  // Jun
        1399621, // Jul
        1128550, // Aug
        1003328, // Sep
        814956,  // Oct
        729062,  // Nov
        552667,  // Dec
      ],
    },
  ];

  const priceData = [
    {
      name: 'Rolend',
      data: [
        2.86, // January
        2.84, // February
        2.86, // March
        2.86, // April
        2.84, // May
        2.85, // June
        3.14, // July
        3.42, // August
        3.86, // September
        4.02, // October
        4.09, // November
        4.23, // December
      ],
    },
    {
      name: 'Griz',
      data: [
        1.87, // Jan
        1.87, // Feb
        1.88, // Mar
        1.85, // Apr
        1.85, // May
        1.89, // Jun
        2.21, // Jul
        2.54, // Aug
        2.90, // Sep
        3.04, // Oct
        3.12, // Nov
        3.07, // Dec
      ],
    },
    {
      name: 'Organic',
      data: [
        3.73, // Jan
        3.78, // Feb
        3.81, // Mar
        3.76, // Apr
        3.89, // May
        3.58, // Jun
        4.12, // Jul
        4.60, // Aug
        4.71, // Sep
        4.66, // Oct
        4.70, // Nov
        5.06, // Dec
      ],
    },
    {
      name: 'Ostalo',
      data: [
        2.70, // Jan (weighted avg of MIKER+BRUH+OSTALO)
        2.43, // Feb
        2.33, // Mar (MIKER+BRUH+ORIGINAL+OSTALO)
        2.52, // Apr
        2.25, // May
        2.43, // Jun
        2.83, // Jul
        3.22, // Aug
        3.44, // Sep
        3.51, // Oct
        3.89, // Nov
        3.42, // Dec
      ],
    },
  ];

  const [state, setState] = useState<ChartOneState>({
    series: quantityData,
    activeView: 'quantity'
  });

  // Update options based on active view
  const chartOptions: ApexOptions = {
    ...options,
    yaxis: {
      ...options.yaxis,
      title: {
        text: state.activeView === 'quantity' ? 'Količina (tona)' : 'Cena (EUR)',
        style: {
          fontSize: '12px',
        },
      },
      min: state.activeView === 'quantity' ? 0 : 1,
      max: state.activeView === 'quantity' ? 5000000 : 6,
      labels: {
        formatter: (value) => state.activeView === 'quantity' 
          ? `${Math.round(value).toLocaleString()} kg`
          : `${value.toFixed(2)} €`
      }
    }
  };

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };
  handleReset();

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-12">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
        <div className="flex w-full flex-wrap gap-3 sm:gap-5">
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Rolend</p>
              <p className="text-sm font-medium">46,496 tona</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Griz</p>
              <p className="text-sm font-medium">15,839 tona</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Organic</p>
              <p className="text-sm font-medium">6,295 tona</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Ostalo</p>
              <p className="text-sm font-medium">9,674 tona</p>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-45 justify-end">
          <div className="inline-flex items-center rounded-md bg-whiter p-1.5 dark:bg-meta-4">
            <button
              className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark ${
                state.activeView === 'quantity' ? 'bg-white shadow-card dark:bg-boxdark' : ''
              }`}
              onClick={() => setState(prev => ({ ...prev, activeView: 'quantity', series: quantityData }))}
            >
              Količina
            </button>
            <button
              className={`rounded py-1 px-3 text-xs font-medium text-black hover:bg-white hover:shadow-card dark:text-white dark:hover:bg-boxdark ${
                state.activeView === 'price' ? 'bg-white shadow-card dark:bg-boxdark' : ''
              }`}
              onClick={() => setState(prev => ({ ...prev, activeView: 'price', series: priceData }))}
            >
              Cena
            </button>
          </div>
        </div>
      </div>

      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart
            options={chartOptions}
            series={state.series}
            type="area"
            height={350}
          />
        </div>
      </div>
    </div>
  );
};

export default ExportMainChart;
