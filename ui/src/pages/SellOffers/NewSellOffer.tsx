import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import {getAuthToken} from "../../utils/authUtils";

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

const NewSellOffer = () => {
    const navigate = useNavigate();
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
        price: '',
        description: '',
    });
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const token = getAuthToken();
                if (!token) {
                    throw new Error('No authentication token found');
                }

                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`, {
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

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        if (files.length + selectedFiles.length > 5) {
            setError('Možete uploadovati maksimalno 5 slika');
            return;
        }
        setSelectedFiles(prev => [...prev, ...files]);
    };

    const removeFile = (index: number) => {
        setSelectedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const handleProductSelect = (productId: string) => {
        const product = products.find(p => p.id.toString() === productId);
        setSelectedProduct(product || null);
        setFormData(prev => ({ ...prev, variantId: '' }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const formDataToSend = new FormData();
            
            formDataToSend.append('variantId', formData.variantId);
            formDataToSend.append('status', 'Aktivan');
            formDataToSend.append('dateFrom', formData.dateFrom);
            formDataToSend.append('dateTo', formData.dateTo);
            formDataToSend.append('description', formData.description);
            formDataToSend.append('city', formData.city);
            formDataToSend.append('price', formData.price);
            formDataToSend.append('quantity', formData.quantity);

            selectedFiles.forEach(file => {
                formDataToSend.append('photos', file);
            });

            const token = getAuthToken();
            if (!token) {
                throw new Error('No authentication token found');
            }

            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/offers/sell-offers`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                body: formDataToSend,
            });

            if (!response.ok) {
                throw new Error('Failed to create sell offer');
            }

            navigate('/sell-offers');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <DefaultLayout>
            <Breadcrumb pageName="Nova Prodajna Ponuda" />

            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                    <h3 className="font-medium text-black dark:text-white">
                        Kreiranje Nove Prodajne Ponude
                    </h3>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5.5 p-6.5">
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

                    {/* Variant Selection - Only show if product is selected */}
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

                    {/* Rest of the form fields */}
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

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Količina (kg)
                            </label>
                            <input
                                type="number"
                                value={formData.quantity}
                                onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                required
                                title="Molimo unesite količinu"
                            />
                        </div>
                        <div>
                            <label className="mb-3 block text-black dark:text-white">
                                Cena (€ / kg)
                            </label>
                            <input
                                type="number"
                                value={formData.price}
                                onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
                                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                required
                                title="Molimo unesite cenu"
                            />
                        </div>
                    </div>

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

                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Opis
                        </label>
                        <textarea
                            value={formData.description}
                            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            rows={4}
                            title="Molimo unesite opis"
                        />
                    </div>

                    <div>
                        <label className="mb-3 block text-black dark:text-white">
                            Slike <span className="text-sm text-gray-500">(maksimalno 5)</span>
                            <div className="text-xs text-green-600 mt-1 italic">
                                📸 Preporučujemo da dodate slike proizvoda radi bolje prodaje
                            </div>
                        </label>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleFileChange}
                            className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                            title="Molimo izaberite bar jednu sliku"
                        />
                    </div>

                    {selectedFiles.length > 0 && (
                        <div className="grid grid-cols-2 gap-4">
                            {selectedFiles.map((file, index) => (
                                <div key={index} className="relative">
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-32 object-cover rounded-lg"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeFile(index)}
                                        className="absolute top-2 right-2 bg-danger text-white rounded-full w-6 h-6 flex items-center justify-center"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {error && (
                        <div className="text-danger">
                            {error}
                        </div>
                    )}

                    <div className="flex justify-end gap-4.5">
                        <button
                            type="button"
                            onClick={() => navigate('/sell-offers')}
                            className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                        >
                            Otkaži
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                        >
                            {isLoading ? 'Kreiranje...' : 'Kreiraj ponudu'}
                        </button>
                    </div>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default NewSellOffer;