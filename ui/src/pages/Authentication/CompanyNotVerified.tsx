import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCompanyDetails } from '../../services/companyService'; // ✅ koristi servis
import { Link } from 'react-router-dom';

const CompanyNotVerified = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkVerification = async () => {
      try {
        const company = await fetchCompanyDetails();

        if (company?.isVerified) {
          navigate('/dashboard/2025');
        }
      } catch (error) {
        console.error('Greška u proveri verifikacije:', error);
      }
    };

    checkVerification();
  }, [navigate]);

  return (
    <div className="overflow-hidden px-4 dark:bg-boxdark-2 sm:px-8">
      <div className="flex h-screen flex-col items-center justify-center overflow-hidden">
        <div className="no-scrollbar overflow-y-auto py-20">
          <div className="mx-auto w-full max-w-[480px]">
            <div className="text-center">
              <Link to="/" className="mx-auto mb-10 inline-flex">
                <h1 className="text-3xl font-bold text-black dark:text-white">
                  AgroB2B Hub
                </h1>
              </Link>

              <div className="rounded-xl bg-white p-4 shadow-14 dark:bg-boxdark lg:p-7.5 xl:p-12.5">
                <h1 className="mb-2.5 text-2xl font-bold text-black dark:text-white">
                  Kompanija čeka verifikaciju
                </h1>

                <div className="mt-7 text-left">
                  <p className="mb-5 text-lg">
                    Vaša kompanija je trenutno u procesu verifikacije. Molimo vas za strpljenje dok naš tim pregleda vašu prijavu.
                  </p>

                  <div className="mt-8 border-t border-stroke pt-8 dark:border-strokedark">
                    <h3 className="mb-3 text-lg font-semibold">Potrebna vam je pomoć?</h3>
                    <p className="mb-2">Kontaktirajte nas:</p>
                    <ul className="space-y-2 text-lg">
                      <li className="flex items-center gap-2">
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <a href="tel:+38131894510" className="hover:text-primary transition-colors">
                          <span>+381 31 894 510</span>
                        </a>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <a href="mailto:info@agrob2bhub.com" className="hover:text-primary transition-colors">
                          <span>info@agrob2bhub.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyNotVerified;
