import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import {getAuthToken} from "../../utils/authUtils";
import { useSubscription } from '../../contexts/SubscriptionContext';

interface Product {
  id: number;
  name: string;
  image: string;
  variants: Variant[];
}

interface Variant {
  id: number;
  name: string;
}

const paymentOptions = [
    { value: 'Po dogovoru', label: 'Po dogovoru'},
    { value: 'Pre Utovara', label: 'Pre Utovara' },
    { value: 'Po Isporuci', label: 'Po Isporuci' },
    { value: 'Po Utovaru', label: 'Po Utovaru' },
    { value: '1 nedelja', label: '1 nedelja' },
    { value: '2 nedelje', label: '2 nedelje' },
    { value: '3 nedelje', label: '3 nedelje' },
    { value: '4 nedelje', label: '4 nedelje' },
];

const API_URL = import.meta.env.VITE_API_URL;

const NewBuyOffer = () => {
    const navigate = useNavigate();
    const { hasAccess, isLoading: subscriptionLoading } = useSubscription();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [formData, setFormData] = useState({
        variantId: '',
        dateFrom: new Date().toISOString().split('T')[0],
        dateTo: '',
        quantity: '',
        city: '',
        description: '',
        paymentDetails: '',
        status: 'Aktivan',
        administrativeStatus: 'PENDING'
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = getAuthToken();
                if (!token) {
                    throw new Error('No authentication token found');
                }

                const response = await fetch(`${API_URL}/api/products`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }

                const data = await response.json();
                setProducts(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            }
        };

        fetchProducts();
    }, []);

    const handleProductSelect = (productId: string) => {
        const product = products.find(p => p.id.toString() === productId);
        setSelectedProduct(product || null);
        setFormData(prev => ({ ...prev, variantId: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!subscriptionLoading && !hasAccess) {
            setError('Ova funkcionalnost je dostupna samo uz aktivnu pretplatu.');
            return;
        }

        // Validate all required fields
        const requiredFields = {
            variantId: 'Varijanta',
            dateFrom: 'Datum od',
            city: 'Grad',
            paymentDetails: 'Način plaćanja'
        };

        for (const [field, label] of Object.entries(requiredFields)) {
            if (!formData[field as keyof typeof formData]) {
                setError(`${label} je obavezno polje`);
                return;
            }
        }

        setIsLoading(true);

        try {
            const token = getAuthToken();

            if (!token) {
                throw new Error('No authentication token found');
            }

            const formDataToSend = new FormData();
            
            // Append all form fields
            Object.entries(formData).forEach(([key, value]) => {
                formDataToSend.append(key, value.toString());
            });

            const response = await fetch(`${API_URL}/api/offers/buy-offers`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error('Failed to create buy offer');
            }

            navigate('/buy-offers');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Nova Kupovna Ponuda" />

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Kreiranje Nove Kupovne Ponude
                    </h3>
                </div>

                {!subscriptionLoading && !hasAccess && (
                    <div className="mx-6 mt-6 rounded-lg border border-amber-200 bg-gradient-to-r from-amber-50 to-amber-100/60 p-4 text-amber-800 dark:from-amber-900/20 dark:to-amber-800/10 dark:border-amber-800">
                        <div className="flex items-start gap-3">
                            <svg className="h-5 w-5 mt-0.5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9V7a4 4 0 10-8 0v2a2 2 0 00-2 2v7a2 2 0 002 2h8a2 2 0 002-2v-7a2 2 0 00-2-2z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13v3" />
                            </svg>
                            <div>
                                <p className="font-medium">Premium funkcionalnost</p>
                                <p className="text-sm opacity-90">Kreiranje kupovne ponude dostupno je samo uz aktivnu pretplatu.</p>
                            </div>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className={`flex flex-col gap-5.5 p-6.5 ${!subscriptionLoading && !hasAccess ? 'opacity-60 pointer-events-none' : ''}`}>
                    {/* Product Selection */}
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Proizvod
                        </label>
                        <select
                            value={selectedProduct?.id || ''}
                            onChange={(e) => handleProductSelect(e.target.value)}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            required
                            title="Molimo izaberite proizvod"
                        >
                            <option value="">Izaberite proizvod</option>
                            {products.map((product) => (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {selectedProduct && (
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Varijanta
                            </label>
                            <select
                                value={formData.variantId}
                                onChange={(e) => setFormData(prev => ({ ...prev, variantId: e.target.value }))}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                required
                                title="Molimo izaberite varijantu"
                            >
                                <option value="">Izaberite varijantu</option>
                                {selectedProduct.variants.map((variant) => (
                                    <option key={variant.id} value={variant.id}>
                                        {variant.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Date Inputs */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Važi od
                            </label>
                            <input
                                type="date"
                                value={formData.dateFrom}
                                onChange={(e) => setFormData(prev => ({ ...prev, dateFrom: e.target.value }))}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                required
                                title="Molimo unesite datum od kada važi ponuda"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Važi do
                            </label>
                            <input
                                type="date"
                                value={formData.dateTo}
                                onChange={(e) => setFormData(prev => ({ ...prev, dateTo: e.target.value }))}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                title="Molimo unesite datum do kada važi ponuda"
                            />
                        </div>
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Količina (kg) - opciono
                        </label>
                        <input
                            type="number"
                            value={formData.quantity}
                            onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            title="Molimo unesite količinu"
                        />
                    </div>

                    {/* City */}
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Grad
                        </label>
                        <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            required
                            title="Molimo unesite grad"
                        />
                    </div>

                    {/* Payment Details */}
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Način plaćanja
                        </label>
                        <select
                            value={formData.paymentDetails}
                            onChange={(e) => setFormData(prev => ({ ...prev, paymentDetails: e.target.value }))}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"                            
                            title="Molimo izaberite način plaćanja"
                        >
                            <option value="">Izaberite način plaćanja</option>
                            {paymentOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Description */}
                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Opis
                        </label>
                        <textarea
                            rows={4}
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"                            
                            title="Molimo unesite opis"
                        ></textarea>
                    </div>

                    {error && (
                        <div className="text-red-500 mt-2">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading || !hasAccess}
                        className="inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        {isLoading ? 'Kreiranje...' : 'Kreiraj Ponudu'}
                    </button>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default NewBuyOffer; 