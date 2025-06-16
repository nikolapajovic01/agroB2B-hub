import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardHeader } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { getAuthToken } from '../utils/authUtils';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

interface Product {
  id: number;
  name: string;
  image: string;
  isFollowing: boolean;
}

const NotificationPreferences: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = getAuthToken();
        const response = await fetch('http://localhost:3000/api/products', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Greška pri učitavanju proizvoda');
        }

        const data = await response.json();
        // Fetch user's notification preferences
        const preferencesResponse = await fetch('http://localhost:3000/api/notifications/preferences', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!preferencesResponse.ok) {
          throw new Error('Greška pri učitavanju podešavanja obaveštenja');
        }

        const preferences = await preferencesResponse.json();
        
        // Combine products with user preferences
        const productsWithPreferences = data.map((product: Product) => ({
          ...product,
          isFollowing: preferences.some((pref: any) => pref.product === product.name)
        }));

        setProducts(productsWithPreferences);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Došlo je do greške');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const toggleFollow = async (productId: number) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, isFollowing: !product.isFollowing } : product
    );
    setProducts(updatedProducts);
  };

  const savePreferences = async () => {
    setSaving(true);
    try {
      const token = getAuthToken();
      const followingProducts = products.filter(p => p.isFollowing).map(p => p.name);
      
      const response = await fetch('http://localhost:3000/api/notifications/preferences', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ products: followingProducts })
      });

      if (!response.ok) {
        throw new Error('Greška pri čuvanju podešavanja');
      }

      // Show success message or handle response
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Došlo je do greške');
    } finally {
      setSaving(false);
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
      <div className="container mx-auto p-6">
        <Card className="mb-6">
          <CardHeader className="flex items-center gap-2">
            <h1 className="text-2xl font-bold mb-2">Izaberite Proizvode za SMS Obaveštenja</h1>
          </CardHeader>
          <CardBody>
            <p className="mb-6 text-blue-900 bg-blue-100 rounded-md p-3">
              Izaberite proizvode za koje želite da dobijate SMS poruke kada se pojave nove ponude ili potražnje na tržištu.
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
                    checked={product.isFollowing}
                    onCheckedChange={() => toggleFollow(product.id)}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-end">
              <Button
                onClick={savePreferences}
                disabled={saving}
                className="bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
              >
                {saving ? 'Čuvanje...' : 'Sačuvaj Podešavanja'}
              </Button>
              <span className="mt-2 text-xs text-gray-500 text-right">
                Nakon svake izmene, obavezno kliknite na „Sačuvaj Podešavanja" da bi promene bile sačuvane.
              </span>
            </div>
          </CardBody>
        </Card>
      </div>
    </DefaultLayout>
  );
};

export default NotificationPreferences; 