import { useState, useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import { getAuthToken } from '../../utils/authUtils';

interface Company {
  id: number;
  name: string;
  type: string;
  capacity: string;
  bonitet: string;
  certificates: string[];
  photoUrl: string;
  isVerified: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;

const CompaniesList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        const response = await fetch(`${API_URL}/api/company/all`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch companies');
        }

        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (isLoading) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Kompanije" />
        <div className="flex justify-center items-center h-32">
          <p>Loading...</p>
        </div>
      </DefaultLayout>
    );
  }

  if (error) {
    return (
      <DefaultLayout>
        <Breadcrumb pageName="Kompanije" />
        <div className="flex justify-center items-center h-32">
          <p className="text-red-500">Error: {error}</p>
        </div>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Kompanije" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark"
          >
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src={company.photoUrl || '/default-logo.png'}
                    alt={company.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-black dark:text-white">
                    {company.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {company.type}
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Kapacitet:</span>
                  <span className="text-sm font-medium">{company.capacity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Bonitet:</span>
                  <span className="text-sm font-medium">{company.bonitet}</span>
                </div>
                {company.certificates.length > 0 && (
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Certifikati:</span>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {company.certificates.map((certificate, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
                        >
                          {certificate}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {company.isVerified && (
                <div className="mt-4 flex items-center text-success">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2 text-sm">Verifikovana kompanija</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
};

export default CompaniesList; 