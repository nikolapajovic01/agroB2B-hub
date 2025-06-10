import { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../../layout/DefaultLayout';
import CoverOne from '../../assets/images/cover-01.png';
import { getAuthToken } from '../../utils/authUtils';

interface UserDetails {
  name: string;
  email: string;
  phoneNumber: string;
  userType: string;
  profilePhotoUrl?: string;
}

const ProfileUser = () => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const token = getAuthToken();
        if (!token) throw new Error('No auth token');

        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/user/details`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error('Failed to fetch user details');

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Greška pri dohvatanju korisničkih podataka');
        console.error('Greška:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Moj Profil" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        
        {/* Cover image */}
        <div className="relative h-40 md:h-60">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Profile info */}
        <div className="p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          
          {/* Profile image */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-boxdark -mt-16 shadow-lg">
            <img 
              src={user?.profilePhotoUrl || '/default-user.png'} 
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* User details */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-black dark:text-white">
              {user?.name}
            </h3>
            <div className="mt-2 flex flex-col gap-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0H8m8 0a4 4 0 100-8 4 4 0 000 8z" />
                </svg>
                {user?.email}
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m0 4v1m0 4v1m0 4v1m5-1h2a2 2 0 002-2V7a2 2 0 00-2-2h-2V3m-6 0v2H5a2 2 0 00-2 2v10a2 2 0 002 2h2v2m0-2h2" />
                </svg>
                Telefon: {user?.phoneNumber}
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A7.963 7.963 0 004 13c0-2.21.896-4.21 2.343-5.657l1.414 1.414A5.978 5.978 0 006 13c0 1.657.672 3.157 1.757 4.243l-1.636 1.636zM17.657 6.343l-1.414 1.414A5.978 5.978 0 0018 13c0 1.657-.672 3.157-1.757 4.243l1.636 1.636A7.963 7.963 0 0020 13c0-2.21-.896-4.21-2.343-5.657z" />
                </svg>
                Tip korisnika: {user?.userType === 'individual' ? 'Fizičko lice' : user?.userType}
              </div>
            </div>
          </div>

        </div>

      </div>
    </DefaultLayout>
  );
};

export default ProfileUser;

