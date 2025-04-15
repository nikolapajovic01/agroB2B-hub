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
    return <div>Loading...</div>;
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Profil Kompanije" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
        </div>

        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3 flex items-center justify-center">
            <div className="relative drop-shadow-2 w-full h-full grid place-items-center">
              <img 
                src={company?.photoUrl} 
                alt="profile" 
                className="rounded-full w-full h-full object-cover"
              />
              {/* <label
                htmlFor="profile"
                className="absolute bottom-0 right-0 flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <input type="file" name="profile" id="profile" className="sr-only" />
                <span>Edit</span>
              </label> */}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {company?.name}
            </h3>
            <p className="font-medium">PIB: {company?.pibNumber}</p>

            <div className="mx-auto mt-4.5 mb-5.5 grid max-w-94 grid-cols-3 rounded-md border border-stroke py-2.5 shadow-1 dark:border-strokedark dark:bg-[#37404F]">
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark">
                <span className="font-semibold text-black dark:text-white">
                  {company?.type}
                </span>
                <span className="text-sm">Tip</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 border-r border-stroke px-4 dark:border-strokedark">
                <span className="font-semibold text-black dark:text-white">
                  {company?.capacity}
                </span>
                <span className="text-sm">Kapacitet</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-1 px-4">
                <span className="font-semibold text-black dark:text-white">
                  {company?.bonitet}
                </span>
                <span className="text-sm">Bonitet</span>
              </div>
            </div>

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold text-black dark:text-white">
                Status Verifikacije
              </h4>
              <p className={`mt-4.5 ${company?.isVerified ? 'text-success-500' : 'text-danger-500'}`}>
                {company?.isVerified ? 'Verifikovana Kompanija' : 'Nije Verifikovana'}
              </p>
            </div>

            <div className="mx-auto max-w-180 mt-4">
              <h4 className="font-semibold text-black dark:text-white mb-3">
                Sertifikati
              </h4>
              {company?.certificates && company.certificates.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {company.certificates.map((cert, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm bg-primary bg-opacity-10 text-primary"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">Nema dostupnih sertifikata</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfileCompany;
