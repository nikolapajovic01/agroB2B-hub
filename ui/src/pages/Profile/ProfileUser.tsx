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
                src={user?.profilePhotoUrl || '/default-user.png'} 
                alt="profile" 
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user?.name}
            </h3>
            <p className="font-medium text-gray-600 dark:text-gray-400">{user?.email}</p>
            <p className="font-medium text-gray-600 dark:text-gray-400">Telefon: {user?.phoneNumber}</p>
            <p className="mt-2 font-medium text-sm text-primary">
              Tip korisnika: {user?.userType === 'individual' ? 'Fizicko lice' : user?.userType}
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ProfileUser;
