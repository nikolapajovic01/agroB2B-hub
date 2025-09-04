import React from 'react';
import AuthLayout from '../layout/AuthLayout';
import { Link } from 'react-router-dom';

const featuresFree = [
  'Kreiranje prodajnih i kupovnih ponuda (osnovno)',
  'Pregled strukture podataka i funkcionalnosti',
  'Osnovna navigacija i pretraga',
];

const featuresPro = [
  'Puni pristup podacima (cene, količine, rokovi)',
  'Detaljni grafikoni, analitike i mape',
  'SMS/Email tržišna obaveštenja',
  'Neograničen pregled ponuda i transakcija',
  'Prioritetna podrška',
];

const Pricing: React.FC = () => {
  return (
    <AuthLayout>
      <nav className="w-full bg-white dark:bg-boxdark border-b border-stroke dark:border-strokedark mb-8">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center w-full sm:w-auto justify-between">
            <Link to="/" className="text-2xl font-bold text-black dark:text-white hover:text-primary">AgroB2B Hub</Link>
            <span className="ml-4 text-sm text-gray-600 dark:text-gray-300 hidden sm:inline">
              Podrška: <a href="tel:+381613004984" className="text-primary hover:underline">+381613004984</a>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
            <Link to="/" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 py-2 px-6 text-center font-medium hover:bg-emerald-100 dark:bg-emerald-900/20 dark:text-emerald-200 dark:border-emerald-800">
              Početna
            </Link>
            <Link to="/auth/signin" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-primary py-2 px-6 text-center font-medium text-primary hover:bg-primary/10">
              Prijava
            </Link>
            <Link to="/auth/signup" className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-primary/90">
              Registracija
            </Link>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-black dark:text-white">Izaberite plan</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Transparentne cene bez skrivenih troškova. Otkazivanje u bilo kom trenutku.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="rounded-lg border border-stroke dark:border-strokedark bg-white dark:bg-boxdark p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-black dark:text-white">Besplatno</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Za upoznavanje platforme</p>
            </div>
            <div className="mb-6">
              <span className="text-3xl font-extrabold">€0</span>
              <span className="text-gray-600 dark:text-gray-300"> / zauvek</span>
            </div>
            <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              {featuresFree.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span>•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/auth/signup"
              className="inline-flex w-full items-center justify-center rounded-md border border-primary text-primary py-2 hover:bg-primary/10"
            >
              Kreiraj nalog
            </Link>
          </div>

          {/* Pro */}
          <div className="rounded-lg border-2 border-primary bg-white dark:bg-boxdark p-6 shadow-md">
            <div className="mb-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mb-2">Najpopularnije</div>
              <h2 className="text-xl font-bold text-black dark:text-white">Pro</h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">Za profesionalno korišćenje</p>
            </div>
            <div className="mb-1">
              <span className="text-3xl font-extrabold">€250</span>
              <span className="text-gray-600 dark:text-gray-300"> / godina</span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">≈ €25 / mes (2 meseca gratis na godišnji plan)</p>
            <ul className="space-y-2 mb-6 text-gray-700 dark:text-gray-300">
              {featuresPro.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span>•</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/auth/signup"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary text-white py-2 hover:bg-primary/90"
            >
              Aktiviraj pretplatu
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg border border-stroke dark:border-strokedark p-5">
            <h3 className="font-semibold text-black dark:text-white mb-2">Da li postoji trial?</h3>
            <p className="text-gray-600 dark:text-gray-300">Da, besplatan plan vam omogućava da vidite sve funkcionalnosti, dok su podaci delimično skriveni.</p>
          </div>
          <div className="rounded-lg border border-stroke dark:border-strokedark p-5">
            <h3 className="font-semibold text-black dark:text-white mb-2">Da li mogu da otkažem?</h3>
            <p className="text-gray-600 dark:text-gray-300">Naravno, možete otkazati u bilo kom trenutku. Pretplata važi do isteka uplaćenog perioda.</p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Pricing;


