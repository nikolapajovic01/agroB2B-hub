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

  useEffect(() => {
    const fetchProductVariants = async () => {
      try {
        const token = getAuthToken();
        const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
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
          <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
        </div>

        {product.variants.length === 0 ? (
          <div className="text-center py-4">Nema dostupnih varijanti za ovaj proizvod</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                    Varijanta
                  </th>
                  <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                    Cena
                  </th>
                </tr>
              </thead>
              <tbody>
                {product?.variants?.map((variant) => (
                  <tr key={variant.id} className="border-b border-stroke dark:border-strokedark">
                    <td className="py-4 px-4">
                      <div className="font-medium">{variant.name}</div>
                    </td>
                    <td className="py-4 px-4">
                      {variant.sellOffers.length > 0 ? (
                        <div className="text-primary">
                          {Math.min(...variant.sellOffers.map(offer => offer.price))} RSD
                        </div>
                      ) : (
                        <div className="text-gray-4">Nema ponuda</div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate('/prices')}
            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
          >
            Nazad
          </button>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProductVariants;
