import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { BuyOfferDetails as BuyOfferDetailsType } from '../types/buyOffer';
import {getAuthToken} from "../utils/authUtils";

const BuyOfferDetails = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<BuyOfferDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bidPrice, setBidPrice] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isBidding, setIsBidding] = useState(false);
  const [bidError, setBidError] = useState<string | null>(null);
  const [bidSuccess, setBidSuccess] = useState(false);

  useEffect(() => {
    const fetchOfferDetails = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/offers/buy-offers/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch offer details');
        }

        const data = await response.json();
        setOffer(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchOfferDetails();
  }, [id]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length + selectedFiles.length > 5) {
      setBidError('Možete uploadovati maksimalno 5 slika');
      return;
    }
    setSelectedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBidding(true);
    setBidError(null);
    
    try {
      const token = getAuthToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const formData = new FormData();
      formData.append('price', bidPrice);
      selectedFiles.forEach(file => {
        formData.append('photos', file);
      });

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/offers/buy-offers/${id}/bids`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit bid');
      }

      setBidSuccess(true);
      setBidPrice('');
      setSelectedFiles([]);
    } catch (err) {
      setBidError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsBidding(false);
    }
  };

  if (isLoading) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center h-screen">
          <p>Učitavanje...</p>
        </div>
      </DefaultLayout>
    );
  }

  if (error || !offer) {
    return (
      <DefaultLayout>
        <div className="flex justify-center items-center h-screen">
          <p className="text-red-500">Greška: {error || 'Ponuda nije pronađena'}</p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Detalji Kupovne Ponude" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 sm:p-6 xl:p-9">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                Ponuda #{id}
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">
                {offer.product}
              </h2>
              
              <div className="space-y-4">
                <div>
                  <span className="font-medium text-black dark:text-white">Količina:</span>
                  <span className="ml-2">{offer.quantity ? `${offer.quantity} kg` : 'Otvoreni za sve količine'}</span>
                </div>

                <div>
                  <span className="font-medium text-black dark:text-white">Lokacija:</span>
                  <span className="ml-2">{offer.city}</span>
                </div>

                <div>
                  <span className="font-medium text-black dark:text-white">Važi od:</span>
                  <span className="ml-2">{new Date(offer.dateFrom).toLocaleDateString()}</span>
                </div>

                <div>
                  <span className="font-medium text-black dark:text-white">Važi do:</span>
                  <span className="ml-2">
                    {offer.dateTo
                      ? new Date(offer.dateTo).toLocaleDateString('sr-RS') // Format: 05.04.2025.
                      : 'Rok nije specificiran'}
                  </span>
                </div>


                <div>
                  <span className="font-medium text-black dark:text-white">Status:</span>
                  <span className="ml-2">{offer.status}</span>
                </div>

                <div>
                  <span className="font-medium text-black dark:text-white">Način plaćanja:</span>
                  <span className="ml-2">{offer.paymentDetails || 'Nije navedeno'}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Opis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {offer.description || 'Nema dostupnog opisa'}
              </p>
              
              <div className="mt-4 space-y-2">
                <div>
                  <span className="font-medium text-black dark:text-white">Tip kompanije:</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                    {offer.company.type}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-black dark:text-white">Godišnja proizvodnja:</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                    {offer.company.capacity} kg
                  </span>
                </div>
                <div>
                  <span className="font-medium text-black dark:text-white">Bonitet:</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                    {offer.company.bonitet}
                  </span>
                </div>
                <div>
                  <span className="font-medium text-black dark:text-white">Sertifikati:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {offer.company.certificates && offer.company.certificates.length > 0 ? (
                      offer.company.certificates.map((cert, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary"
                        >
                          {cert}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-sm">Nema dostupnih sertifikata</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-stroke pt-8 dark:border-strokedark">
            <h3 className="text-xl font-bold text-black dark:text-white mb-4">
              Pošaljite ponudu
            </h3>
            
            {bidSuccess ? (
              <div className="p-4 bg-meta-3 bg-opacity-10 text-meta-3 rounded-sm">
                Vaša ponuda je uspešno poslata. Neko iz našeg tima će vas uskoro kontaktirati.
              </div>
            ) : (
              <form onSubmit={handleBidSubmit} className="space-y-4">
                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Vaša cena (€)
                  </label>
                  <div className="flex gap-4">
                    <input
                      type="number"
                      step="0.01"
                      value={bidPrice}
                      onChange={(e) => setBidPrice(e.target.value)}
                      className="w-40 rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      placeholder="0.00"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Slike proizvoda (maksimalno 5)
                  </label>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                  {selectedFiles.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selectedFiles.map((file, index) => (
                        <div key={index} className="relative">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={`Preview ${index + 1}`}
                            className="h-20 w-20 object-cover rounded"
                          />
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isBidding}
                  className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                >
                  {isBidding ? 'Slanje...' : 'Pošalji ponudu'}
                </button>

                {bidError && (
                  <p className="text-danger">{bidError}</p>
                )}

                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Nakon što pošaljete ponudu, neko iz našeg tima će vas kontaktirati radi dogovora oko detalja.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default BuyOfferDetails; 