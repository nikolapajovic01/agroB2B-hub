import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link className="mb-5.5 inline-block" to="/">
      <div className="flex items-center">
        <div className="bg-primary p-2 rounded-lg">
          <svg
            className="w-8 h-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 21C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V19C19 20.1046 18.1046 21 17 21H7Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M9 7L15 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <span className="ml-2 text-2xl font-bold text-black dark:text-white">
          AgroB2B Hub
        </span>
      </div>
    </Link>
  );
};

export default Logo; 