import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import { SellOfferDetails as SellOfferDetailsType } from '../types/sellOffer';
import ImageSlider from '../components/ImageSlider';
import {getAuthToken} from "../utils/authUtils";

const SellOfferDetails = () => {
  const { id } = useParams();
  const [offer, setOffer] = useState<SellOfferDetailsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bidPrice, setBidPrice] = useState<string>('');
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

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/offers/sell-offers/${id}`, {
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

  const handleBidSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsBidding(true);
    setBidError(null);
    
    try {
      const token = getAuthToken();
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/offers/sell-offers/${id}/bids`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price: parseFloat(bidPrice) }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit bid');
      }

      setBidSuccess(true);
      setBidPrice('');
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
      <Breadcrumb pageName="Detalji Prodajne Ponude" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 sm:p-6 xl:p-9">
          <div className="mb-8">
            <ImageSlider images={offer.photos} />
          </div>

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
                  <span className="font-medium text-black dark:text-white">Cena:</span>
                  <span className="ml-2">{offer.price} €</span>
                </div>
                
                <div>
                  <span className="font-medium text-black dark:text-white">Količina:</span>
                  <span className="ml-2">{offer.quantity} kg</span>
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
                      ? new Date(offer.dateTo).toLocaleDateString('sr-RS')
                      : 'Rok nije specificiran'}
                  </span>
                </div>


                <div>
                  <span className="font-medium text-black dark:text-white">Status:</span>
                  <span className="ml-2">{offer.status}</span>
                </div>

                <div>
                  <span className="font-medium text-black dark:text-white">Sertifikati:</span>
                  <div className="mt-1 flex flex-wrap gap-2">
                    {offer.company?.certificates?.length > 0 ? (
                      offer.company.certificates.map((cert, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary"
                        >
                          {cert}
                        </span>
                      ))
                    ) : (
                      <span className="text-gray-500 text-sm">
                        {offer.company ? 'Nema dostupnih sertifikata' : 'Fizičko lice - nema sertifikate'}
                      </span>
                    )}
                  </div>
                </div>

              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-black dark:text-white mb-4">
                Opis
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {offer.description}
              </p>
              
              {offer.company ? (
                <>
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
                </>
              ) : (
                <div>
                  <span className="font-medium text-black dark:text-white">Kreator ponude:</span>
                  <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                    Fizičko lice
                  </span>
                </div>
              )}

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
                    <button
                      type="submit"
                      disabled={isBidding}
                      className="inline-flex items-center justify-center rounded-md bg-primary py-3 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                      {isBidding ? 'Slanje...' : 'Pošalji ponudu'}
                    </button>
                  </div>
                </div>

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

export default SellOfferDetails; 