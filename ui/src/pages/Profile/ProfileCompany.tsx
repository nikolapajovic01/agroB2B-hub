import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import CoverOne from '../../assets/images/cover-01.png';
import { getAuthToken } from '../../utils/authUtils';

interface CompanyDetails {
  name: string;
  pibNumber: string;
  type: string;
  capacity: string;
  bonitet: string;
  photoUrl: string;
  isVerified: boolean;
  certificates: string[];
}

const ProfileCompany = () => {
  const [company, setCompany] = useState<CompanyDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/company/details`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch company details');
        }

        const data = await response.json();
        setCompany(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching company details:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, []);

  if (loading) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Profil Kompanije" />
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profil Kompanije" />

      <div className="overflow-hidden rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark transition-all duration-300 hover:shadow-lg">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-lg rounded-tr-lg object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>

        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <div className="relative drop-shadow-2 w-full h-full grid place-items-center">
              <img 
                src={company?.photoUrl} 
                alt="profile" 
                className="rounded-full w-full h-full object-cover border-4 border-white dark:border-boxdark"
              />
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-center gap-2">
              <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
                {company?.name}
              </h3>
              {company?.isVerified && (
                <svg 
                  className="w-6 h-6 text-success-500" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <title>Verifikovana Kompanija</title>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <p className="font-medium text-gray-600 dark:text-gray-400">PIB: {company?.pibNumber}</p>

            <div className="mx-auto mt-6 mb-6 grid max-w-94 grid-cols-3 rounded-lg border border-stroke py-4 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark">
                <span className="font-semibold text-black dark:text-white text-lg">
                  {company?.type}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Tip</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark">
                <span className="font-semibold text-black dark:text-white text-lg">
                  {company?.capacity}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Kapacitet</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4">
                <span className="font-semibold text-black dark:text-white text-lg">
                  {company?.bonitet}
                </span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Bonitet</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <div className="flex items-center justify-center gap-2 mb-4">
                <h4 className="font-semibold text-black dark:text-white">
                  Status Verifikacije
                </h4>
                {company?.isVerified ? (
                  <svg 
                    className="w-5 h-5 text-success-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg 
                    className="w-5 h-5 text-danger-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <p className={`mt-2 text-lg font-medium ${company?.isVerified ? 'text-success-500' : 'text-danger-500'}`}>
                {company?.isVerified ? 'Verifikovana Kompanija' : 'Nije Verifikovana'}
              </p>
            </div>

            <div className="mx-auto max-w-180 mt-8">
              <h4 className="font-semibold text-black dark:text-white mb-4">
                Sertifikati
              </h4>
              {company?.certificates && company.certificates.length > 0 ? (
                <div className="flex flex-wrap gap-3 justify-center">
                  {company.certificates.map((cert, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full text-sm bg-primary bg-opacity-10 text-primary hover:bg-opacity-20 transition-all duration-300 cursor-default"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 italic">Nema dostupnih sertifikata</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfileCompany;
