import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { API_URL } from '../../config/constants';
// import favicon from '../../../assets/images/favicon.ico';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'loading' | 'success' | 'error'>('pending');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const verifyEmail = async () => {
    const token = searchParams.get('token');
    
    if (!token) {
      setVerificationStatus('error');
      setErrorMessage('Invalid verification link');
      return;
    }

    setVerificationStatus('loading');

    try {
      const response = await fetch(`${API_URL}/api/auth/verify-email/${token}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Verification failed');
      }

      setVerificationStatus('success');
      setTimeout(() => {
        navigate('/auth/signin');
      }, 3000);
    } catch (error: any) {
      setVerificationStatus('error');
      setErrorMessage(error.message || 'Verification failed');
    }
  };

  return (
    <div className="overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[480px]">
            <div className="text-center">
              {/* <img src={favicon} alt="AgroB2B Hub" className="mx-auto mb-10 h-16 w-16" /> */}
              <h1 className="text-3xl font-bold text-black dark:text-white mb-8">
                AgroB2B Hub
              </h1>

              <div className="rounded-xl bg-white p-4 shadow-14 dark:bg-boxdark lg:p-7.5 xl:p-12.5">
                <h2 className="mb-2.5 text-2xl font-bold text-black dark:text-white">
                  Verifikacija Email-a
                </h2>

                {verificationStatus === 'pending' && (
                  <div className="mt-4">
                    <p className="text-lg mb-4">Kliknite na dugme ispod da verifikujete vaš email</p>
                    <button
                      onClick={verifyEmail}
                      className="flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    >
                      Verifikuj Email
                    </button>
                  </div>
                )}

                {verificationStatus === 'loading' && (
                  <div className="mt-4">
                    <p className="text-lg">Verifikacija email-a u toku...</p>
                  </div>
                )}

                {verificationStatus === 'success' && (
                  <div className="mt-4">
                    <p className="text-lg text-meta-3">Email je uspešno verifikovan!</p>
                    <p className="mt-2">Preusmeravanje na stranicu za prijavu...</p>
                  </div>
                )}

                {verificationStatus === 'error' && (
                  <div className="mt-4">
                    <p className="text-lg text-meta-1">{errorMessage}</p>
                    <button
                      onClick={() => navigate('/auth/signin')}
                      className="mt-4 flex w-full justify-center rounded-md bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
                    >
                      Idi na Prijavu
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail; 