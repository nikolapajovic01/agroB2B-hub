import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAuthToken } from '../utils/authUtils';

const ProfileEntry = () => {
  const [userType, setUserType] = useState<string | null>(null);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        setUserType(payload.userType);
      } catch (e) {
        console.error('Neuspešno parsiranje tokena:', e);
      }
    }
  }, []);

  const profilePath = userType === 'company' ? '/profile' : '/user-profile';

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col h-full w-72 bg-white dark:bg-gray-900 shadow-md p-6">
        <Link
          to={profilePath}
          className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          {/* Ikonica profila */}
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 9.625C8.422 9.625 6.36 7.597 6.375 5.122C6.391 2.622 8.422 0.625 11 0.625C13.578 0.625 15.641 2.653 15.625 5.128C15.609 7.628 13.578 9.625 11 9.625ZM2.75 16.375C2.75 14.45 4.735 12.875 7.275 12.875H14.725C17.265 12.875 19.25 14.45 19.25 16.375V18.125C19.25 18.331 19.169 18.528 19.031 18.666C18.894 18.803 18.697 18.875 18.491 18.875H3.509C3.303 18.875 3.106 18.803 2.969 18.666C2.831 18.528 2.75 18.331 2.75 18.125V16.375Z"
            />
          </svg>
          Moj Profil
        </Link>
      </div>
    </div>
  );
};

export default ProfileEntry;
