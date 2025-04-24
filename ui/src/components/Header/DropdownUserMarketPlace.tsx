import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { logout, getAuthToken } from '../../utils/authUtils';

import UserOne from '../../assets/images/user-01.png';

interface CompanyDetails {
  name: string;
  pibNumber: string;
  photoUrl: string;
}

interface UserDetails {
  name: string;
  email: string;
  phoneNumber: string;
  photoUrl: string;
}

const API_URL = import.meta.env.VITE_API_URL;

const DropdownUserMarketPlace = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [companyDetails, setCompanyDetails] = useState<CompanyDetails | null>(null);
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const [, setError] = useState<string | null>(null);
  const userType = localStorage.getItem('userType');

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const token = getAuthToken();
        if (!token) {
          throw new Error('No authentication token found');
        }

        if (userType === 'company') {
          const response = await fetch(`${API_URL}/api/company/details`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch company details');
          }

          const data = await response.json();
          setCompanyDetails(data);
        } else {
          const response = await fetch(`${API_URL}/api/user/details`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });
          
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }

          const data = await response.json();
          setUserDetails(data);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching details:', err);
      }
    };

    fetchDetails();
  }, [userType]);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            {userType === 'company' 
              ? companyDetails?.name || 'Loading...'
              : userDetails?.name || 'Loading...'
            }
          </span>
          <span className="block text-xs">
            {userType === 'company'
              ? `PIB: ${companyDetails?.pibNumber || 'Loading...'}`
              : userDetails?.email || 'Loading...'
            }
          </span>
        </span>

        <span className="h-12 w-12 rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src={userType === 'company' 
              ? companyDetails?.photoUrl || UserOne 
              : userDetails?.photoUrl || UserOne
            } 
            alt="User" 
            className="w-full h-full object-cover" 
          />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to={userType === 'company' ? '/profile' : '/user-profile'}
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                  fill=""
                />
              </svg>
              Moj Profil
            </Link>
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3.5 py-4 px-6 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
        >
          <svg
            className="fill-current"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5375 0.618744H11.6531C10.7594 0.618744 10.0031 1.37499 10.0031 2.26874V4.64062C10.0031 5.53437 10.7594 6.29062 11.6531 6.29062H15.5375C16.4313 6.29062 17.1875 5.53437 17.1875 4.64062V2.26874C17.1875 1.37499 16.4313 0.618744 15.5375 0.618744Z"
              fill=""
            />
            <path
              d="M15.5375 7.94062H11.6531C10.7594 7.94062 10.0031 8.69687 10.0031 9.59062V11.9625C10.0031 12.8562 10.7594 13.6125 11.6531 13.6125H15.5375C16.4313 13.6125 17.1875 12.8562 17.1875 11.9625V9.59062C17.1875 8.69687 16.4313 7.94062 15.5375 7.94062Z"
              fill=""
            />
            <path
              d="M15.5375 15.2625H11.6531C10.7594 15.2625 10.0031 16.0187 10.0031 16.9125V19.2844C10.0031 20.1781 10.7594 20.9344 11.6531 20.9344H15.5375C16.4313 20.9344 17.1875 20.1781 17.1875 19.2844V16.9125C17.1875 16.0187 16.4313 15.2625 15.5375 15.2625Z"
              fill=""
            />
            <path
              d="M4.29688 0.618744H0.412503C0.343753 0.618744 0.275003 0.618744 0.275003 0.618744V4.64062C0.275003 5.53437 1.03125 6.29062 1.92501 6.29062H4.29688C5.19063 6.29062 5.94688 5.53437 5.94688 4.64062V2.26874C5.94688 1.37499 5.19063 0.618744 4.29688 0.618744Z"
              fill=""
            />
            <path
              d="M4.29688 7.94062H0.412503C0.343753 7.94062 0.275003 7.94062 0.275003 7.94062V11.9625C0.275003 12.8562 1.03125 13.6125 1.92501 13.6125H4.29688C5.19063 13.6125 5.94688 12.8562 5.94688 11.9625V9.59062C5.94688 8.69687 5.19063 7.94062 4.29688 7.94062Z"
              fill=""
            />
            <path
              d="M4.29688 15.2625H0.412503C0.343753 15.2625 0.275003 15.2625 0.275003 15.2625V19.2844C0.275003 20.1781 1.03125 20.9344 1.92501 20.9344H4.29688C5.19063 20.9344 5.94688 20.1781 5.94688 19.2844V16.9125C5.94688 16.0187 5.19063 15.2625 4.29688 15.2625Z"
              fill=""
            />
          </svg>
          Odjavi se
        </button>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUserMarketPlace;
