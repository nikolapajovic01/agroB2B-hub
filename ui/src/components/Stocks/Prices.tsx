import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductVariant {
  id: number;
  name: string;
  price: number;
}

interface Product {
  id: number;
  name: string;
  image: string;
  minPrice: number | null;
  variants: ProductVariant[];
}


const Prices: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/api/products/overview`) // prilagodi ako koristiš drugi port
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Greška pri povlačenju proizvoda:', err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5.5 py-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-5">
      <div className="mb-7.5 flex flex-col gap-4 px-2">
        <h4 className="text-title-sm2 font-bold text-black dark:text-white">
          Cene Proizvoda
        </h4>

        <div className="relative">
          <input
            type="text"
            placeholder="Pretraži proizvode..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-stroke bg-transparent py-2 pl-4 pr-6 outline-none focus:border-primary dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg
              className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                fill=""
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                fill=""
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex flex-col">
        {filteredProducts.map((item, key) => (
          <div
            key={key}
            onClick={() => navigate(`/dashboard/prices/${item.id}`)}
            className="flex items-center justify-between rounded-[5px] px-4 py-3.5 hover:bg-[#F8FAFD] dark:hover:bg-meta-4 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full">
                <img src={item.image} alt={item.name} className="object-cover" />
              </div>

              <div>
                <h5 className="text-sm font-bold leading-6 text-black dark:text-white hover:text-primary">
                  {item.name}
                </h5>
                {/* <p className="text-xs font-medium">
                  {item.variants.length} varijanti
                </p> */}
              </div>
            </div>

            <div className="text-right">
              {typeof item.minPrice === 'number' ? (
                <div className="flex items-center justify-end gap-1.5">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Cena od</span>
                  <p className="font-medium text-black dark:text-white">
                    {item.minPrice.toFixed(2)} €
                  </p>
                  <span className="text-emerald-600 dark:text-emerald-400">
                    <svg
                      className="fill-current"
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6 0L12 6L10.6 7.4L7 3.8V12H5V3.8L1.4 7.4L0 6L6 0Z"
                        fill=""
                      />
                    </svg>
                  </span>
                </div>
              ) : (
                <p className="mb-1 text-sm text-gray-500 italic">
                  Nema aktivnih ponuda
                </p>
              )}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Prices;
