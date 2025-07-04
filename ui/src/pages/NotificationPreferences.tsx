import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { getAuthToken, getUserDetails } from '../utils/authUtils';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

interface Product {
  id: number;
  name: string;
  image: string;
}

interface ProductInterest {
  id: number;
  productId: number;
  companyId: number;
  type: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  product: {
    id: number;
    name: string;
    image: string;
  };
}

const NotificationPreferences: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productInterests, setProductInterests] = useState<ProductInterest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [companyId, setCompanyId] = useState<number | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = getAuthToken();
        const user = getUserDetails(); // Get user from localStorage
        
        if (!user || !user.companyId) {
          throw new Error('Korisnik mora biti povezan sa kompanijom');
        }

        setCompanyId(user.companyId);

        // Fetch all products
        const productsResponse = await fetch(`${API_URL}/api/products`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!productsResponse.ok) {
          throw new Error('Greška pri učitavanju proizvoda');
        }

        const productsData = await productsResponse.json();

        // Fetch user's product interests
        const interestsResponse = await fetch(`${API_URL}/api/product-interests/company/${user.companyId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!interestsResponse.ok) {
          throw new Error('Greška pri učitavanju interesovanja');
        }

        const interestsData = await interestsResponse.json();

        setProducts(productsData);
        setProductInterests(interestsData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Došlo je do greške');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const isFollowing = (productId: number): boolean => {
    return productInterests.some(interest => 
      interest.productId === productId && interest.status === 'active'
    );
  };

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const toggleFollow = async (productId: number) => {
    if (!companyId) return;

    const isCurrentlyFollowing = isFollowing(productId);
    const product = products.find(p => p.id === productId);
    
    try {
      const token = getAuthToken();

      if (isCurrentlyFollowing) {
        // If following, delete the interest
        const response = await fetch(`${API_URL}/api/product-interests/company/${companyId}/product/${productId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Greška pri brisanju interesovanja');
        }

        // Remove from local state
        setProductInterests(prev => prev.filter(interest => 
          !(interest.productId === productId && interest.companyId === companyId)
        ));

        showToast(`Uspesno ste se odjavili sa obaveštenja za ${product?.name}`, 'success');
      } else {
        // If not following, create new interest
        const response = await fetch(`${API_URL}/api/product-interests`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            companyId: companyId,
            productId: productId
          })
        });

        if (!response.ok) {
          throw new Error('Greška pri dodavanju interesovanja');
        }

        const newInterest = await response.json();
        
        // Add to local state
        setProductInterests(prev => [...prev, {
          ...newInterest,
          product: products.find(p => p.id === productId)!
        }]);

        showToast(`Uspesno ste se pretplatili na obaveštenja za ${product?.name}`, 'success');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Došlo je do greške';
      showToast(errorMessage, 'error');
    }
  };

  if (loading) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Tržišna Obaveštenja" />
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </DefaultLayout>
    );
  }

  if (error) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Tržišna Obaveštenja" />
        <div className="rounded-sm border border-stroke bg-white px-5 py-4 shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="text-red-500">{error}</div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tržišna Obaveštenja" />
      
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg ${
          toast.type === 'success' 
            ? 'bg-green-500 text-white' 
            : 'bg-red-500 text-white'
        }`}>
          {toast.message}
        </div>
      )}

      <div className="container mx-auto p-6">
        <Card className="mb-6">
          <CardHeader className="flex items-center gap-2">
            <h1 className="text-2xl font-bold mb-2">Izaberite Proizvode za SMS Obaveštenja</h1>
          </CardHeader>
          <CardBody>
            <p className="mb-6 text-blue-900 bg-blue-100 rounded-md p-3">
              Izaberite proizvode za koje želite da dobijate SMS poruke kada se pojave nove ponude ili potražnje na tržištu.
              Promene se automatski čuvaju kada kliknete na prekidač.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-8 h-8 object-contain"
                      />
                    )}
                    <span className="font-medium">{product.name}</span>
                  </div>
                  <Switch
                    checked={isFollowing(product.id)}
                    onCheckedChange={() => toggleFollow(product.id)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <div className="text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
                <h3 className="font-semibold mb-2">Kako funkcioniše:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Kada uključite prekidač, automatski se pretplatite na obaveštenja za taj proizvod</li>
                  <li>Kada isključite prekidač, automatski se odjavite sa obaveštenja</li>
                  <li>Promene se čuvaju odmah - nema potrebe za dodatnim dugmetom</li>
                  <li>Dobićete SMS poruke kada se pojave nove ponude za izabrane proizvode</li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default NotificationPreferences; 