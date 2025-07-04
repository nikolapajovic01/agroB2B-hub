import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { getAuthToken } from '../../utils/authUtils';

interface ProductWithVariants {
  name: string;
  variants: {
    id: number;
    name: string;
    sellOffers: {
      price: number;
    }[];
  }[];
}

const ProductVariants = () => {
  const { productId } = useParams<{ productId: string }>();
  console.log('productId:', productId);
  const navigate = useNavigate();
  const [product, setProduct] = useState<ProductWithVariants | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProductVariants = async () => {
      try {
        const token = getAuthToken();
        const response = await fetch(`${API_URL}/api/products/${productId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch product variants');
        }

        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProductVariants();
  }, [productId]);

  if (loading) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Varijante proizvoda" />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </DefaultLayout>
    );
  }

  if (error) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Varijante proizvoda" />
        <div className="rounded-sm border border-stroke bg-white px-5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="text-red-500">{error}</div>
        </div>
      </DefaultLayout>
    );
  }

  if (!product) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Varijante proizvoda" />
        <div className="rounded-sm border border-stroke bg-white px-5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div>Proizvod nije pronađen</div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Varijante proizvoda" />
      <div className="rounded-sm border border-stroke bg-white px-5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{product.name}</h2>
        </div>

        {product.variants.length === 0 ? (
          <div className="text-center py-8 text-gray-500 dark:text-gray-400">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-2">Nema dostupnih varijanti za ovaj proizvod</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-800">
                  <th className="min-w-[150px] py-4 px-4 font-semibold text-gray-700 dark:text-gray-300 text-left">
                    Varijanta
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-gray-700 dark:text-gray-300 text-left">
                    Najniža cena
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-semibold text-gray-700 dark:text-gray-300 text-left">
                    Broj ponuda
                  </th>
                </tr>
              </thead>
              <tbody>
              {product?.variants?.map((variant) => (
                <tr 
                  key={variant.id} 
                  className="border-b border-stroke dark:border-strokedark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                >
                  <td className="py-4 px-4">
                    <button
                      onClick={() => navigate(`/sell-offers?variantId=${variant.id}`)}
                      className="group flex items-center space-x-2 font-medium text-primary hover:text-primary-dark transition-colors duration-200"
                    >
                      <span>{variant.name}</span>
                      <svg 
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </td>
                  <td className="py-4 px-4">
                    {variant.sellOffers.length > 0 ? (
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                          {Math.min(...variant.sellOffers.map(offer => offer.price)).toLocaleString('de-DE', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                          })} €
                        </span>
                        {variant.sellOffers.length > 1 && (
                          <span className="text-xs text-gray-500 dark:text-gray-400">
                            (od {variant.sellOffers.length} ponuda)
                          </span>
                        )}
                      </div>
                    ) : (
                      <div className="text-gray-400 dark:text-gray-500 italic">Nema ponuda</div>
                    )}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        variant.sellOffers.length > 0 
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                      }`}>
                        {variant.sellOffers.length} {variant.sellOffers.length === 1 ? 'ponuda' : 'ponuda'}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        )}

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => navigate('/dashboard/current')}
            className="flex items-center justify-center rounded bg-primary py-2.5 px-6 font-medium text-white hover:bg-opacity-90 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Nazad
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductVariants;
