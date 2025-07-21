import { ApexOptions } from 'apexcharts';
import React, { useEffect, useState } from 'react';
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
      'Maj',
      'Jun'
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: true,
      rotate: 0,
      rotateAlways: false,
      hideOverlappingLabels: false,
      showDuplicates: false,
      trim: false,
      minHeight: undefined,
      maxHeight: 120,
      style: {
        colors: [],
        fontSize: '12px',
        fontFamily: 'Satoshi, sans-serif',
        fontWeight: 400,
        cssClass: 'apexcharts-xaxis-label',
      },
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    max: 5000000,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
  activeView: 'quantity' | 'price';
}

const ExportMainChart2025: React.FC = () => {

  const quantityData = [
    {
      name: 'Rolend',
      data: [
        2918540, // January
        3333961, // February
        3503714, // March
        3145881, // April
        2756302, // May
        2310934, // June
      ],
    },
    {
      name: 'Griz',
      data: [
        1061646, // Jan
        1157903, // Feb
        1465565, // Mar
        1174142, // Apr
        1269412, // May
        668693, // June
      ],
    },
    {
      name: 'Organic',
      data: [
        548012, // Jan
        333805, // Feb
        519956, // Mar
        349256, // Apr
        172448, // May
        114748, // June
      ],
    },
    {
      name: 'Ostalo',
      data: [
        555907,  // Jan
        554597,  // Feb
        328949,  // Mar
        314203,  // Apr
        385303,  // May
        424343, // June
      ],
    },
  ];

  const priceData = [
    {
      name: 'Rolend',
      data: [
        4.2, // January
        4.26, // February
        4.3, // March
        4.31, // April
        4.44, // May
        4.49, // June
      ],
    },
    {
      name: 'Griz',
      data: [
        3.08, // Jan
        2.99, // Feb
        3.06, // Mar
        3, // Apr
        2.95, // May
        3.1, // June
      ],
    },
    {
      name: 'Organic',
      data: [
        4.96, // Jan
        5.04, // Feb
        4.86, // Mar
        5.15, // Apr
        5.02, // May
        4.85, // June
      ],
    },
    {
      name: 'Ostalo',
      data: [
        3.65, // Jan
        3.43, // Feb
        3.48, // Mar
        3.42, // Apr
        3.47, // May
        3.29, // June
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

  useEffect(() => {
    const newSeries = state.activeView === 'quantity' ? quantityData : priceData;
    setState(prev => ({
      ...prev,
      series: newSeries
    }));
  }, [state.activeView]);

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
              <p className="text-sm font-medium">17,969 tona</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Griz</p>
              <p className="text-sm font-medium">6,786 tona</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-primary">Organic</p>
              <p className="text-sm font-medium">2,038 tona</p>
            </div>
          </div>
          <div className="flex min-w-47.5">
            <span
                className="mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
              <span className="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
            </span>
            <div className="w-full">
              <p className="font-semibold text-secondary">Ostalo</p>
              <p className="text-sm font-medium">2,563 tona</p>
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

export default ExportMainChart2025;