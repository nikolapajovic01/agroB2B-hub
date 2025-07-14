import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { isAuthenticated, getUserDetails } from '../utils/authUtils';


const LandingPage = () => {
  const isAuthenticatedFlag = !!isAuthenticated();
  const user = getUserDetails();
  const userType = user?.userType || null;

  return (
    <>
      <Helmet>
        <title>AgroB2B Hub - B2B platforma za trgovinu voćem i povrćem</title>
        <meta name="description" content="B2B platforma za trgovinu voćem i povrćem" />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-boxdark">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white dark:bg-boxdark z-50 border-b border-stroke dark:border-strokedark">
          <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center w-full sm:w-auto justify-between">
              <h1 className="text-2xl font-bold text-black dark:text-white">AgroB2B Hub</h1>
              <span className="ml-4 text-sm text-gray-600 dark:text-gray-300 hidden sm:inline">
                Podrška: <a href="tel:+381613004984" className="text-primary hover:underline">+381613004984</a>
              </span>
            </div>
            
            {isAuthenticatedFlag ? (
              <Link
                to={userType === 'company' ? '/dashboard' : '/buy-offers'}
                className="w-full sm:w-auto mt-4 sm:mt-0 inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90"
              >
                Pristup Platformi
              </Link>
            ) : (
              <div className="flex flex-col sm:flex-row gap-3 sm:space-x-4 w-full sm:w-auto mt-4 sm:mt-0">
                <Link
                  to="/auth/signin"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-primary py-2 px-6 text-center font-medium text-primary hover:bg-opacity-90"
                >
                  Prijava
                </Link>
                <Link
                  to="/auth/signup"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary py-2 px-6 text-center font-medium text-white hover:bg-opacity-90"
                >
                  Registracija
                </Link>
              </div>
            )}

          </div>
        </nav>

        {/* Hero Section */}
        <section 
          className="pt-20 pb-10 px-4 relative"
          style={{
            minHeight: '600px',
            marginTop: '64px'
          }}
        >
          <div className="container mx-auto text-center mt-32 relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
              Dobrodošli na vodeću B2B platformu za trgovinu voćem i povrćem
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Povezujemo proizvođače i kupce uz garantovanu sigurnost i verifikaciju svih učesnika. 
              Pratite statistiku izvoza, trenutne cene i upravljajte svojim ponudama na jednom mestu.
            </p>
          </div>
        </section>

        {/* Features Sections */}
        <div className="container mx-auto px-4 space-y-20 mb-20">
          {/* Prodajne Ponude */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Kreiranje Prodajnih Ponuda
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Postavite svoje proizvode na našu platformu i pronađite kupce brzo i efikasno:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Jednostavan proces postavljanja ponude</li>
                <li>Detaljan opis proizvoda sa fotografijama</li>
                <li>Direktna komunikacija sa potencijalnim kupcima</li>
                <li>Sigurno poslovanje uz verifikaciju kupaca</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-boxdark-2 p-4 rounded-lg">
              <img 
                src="/images/new_offer.png" 
                alt="Kreiranje Prodajnih Ponuda" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </section>

          {/* Pregled Ponuda */}
          <section className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 dark:bg-boxdark-2 p-4 rounded-lg">
                <img 
                  src="/images/offer_list.png" 
                  alt="Pregled Ponuda" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Pregled Svih Ponuda
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Istražite sve aktivne ponude na našoj platformi sa detaljnim informacijama o proizvodima:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Detaljan pregled svih dostupnih ponuda</li>
                <li>Direktan uvid u količine i cene proizvoda</li>
                <li>Stručna podrška našeg tima za svaku ponudu</li>
                <li>Kompletna provera prodavca i njegove istorije poslovanja</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Nakon što pronađete odgovarajuću ponudu, naš agent će vas kontaktirati i pružiti sve potrebne 
                informacije o prodavcu, uključujući istoriju poslovanja, bonitet i reference.
              </p>
            </div>
          </section>

          {/* Kupovne Ponude */}
          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Tenderski Sistem Kupovine
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Objavite svoje potrebe i dozvolite dobavljačima da se takmiče za vašu kupovinu:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Transparentan proces prikupljanja ponuda</li>
                <li>Automatsko rangiranje ponuda</li>
                <li>Provera boniteta dobavljača</li>
                <li>Pomoć pri ugovaranju i realizaciji</li>
              </ul>
            </div>
            <div className="bg-gray-100 dark:bg-boxdark-2 p-4 rounded-lg">
              <img 
                src="/images/buy_offer.png" 
                alt="Tenderski Sistem Kupovine" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </section>

          {/* Pregled Tendera */}
          <section className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div className="order-2 md:order-1">
              <div className="bg-gray-100 dark:bg-boxdark-2 p-4 rounded-lg">
                <img 
                  src="/images/tender_list.png" 
                  alt="Pregled Tendera" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Pregled Aktivnih Tendera
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pregledajte sve aktivne tendere i direktno učestvujte u procesu nadmetanja:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Detaljan pregled svih aktivnih tendera</li>
                <li>Direktno slanje ponuda sa cenama</li>
                <li>Mogućnost prilaganja fotografija proizvoda</li>
                <li>Praćenje statusa vaših ponuda</li>
                <li>Automatsko obaveštavanje o rezultatima</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Nakon što pošaljete ponudu, naš agent će vas kontaktirati radi verifikacije i pružanja dodatnih 
                informacija o kupcu. Pomažemo vam u celom procesu, od podnošenja ponude do realizacije posla.
              </p>
            </div>
          </section>

          {/* Statistika Izvoza */}
          <section className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Statistika Izvoza
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pratite detaljnu statistiku izvoza voća i povrća sa našeg tržišta:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Pregled ukupnih količina izvoza po proizvodima</li>
                <li>Analiza cena i prosečnih vrednosti</li>
                <li>Statistika po zemljama izvoza</li>
                <li>Detaljan pregled svakog pojedinačnog izvoza</li>
                <li>Istorijski podaci i trendovi</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Pristupite detaljnim informacijama o svakom izvozu pojedinačno, 
                uključujući količine, cene i destinacije. Koristite ove podatke za 
                bolje razumevanje tržišta i donošenje informisanih poslovnih odluka.
              </p>
            </div>
            <div className="bg-gray-100 dark:bg-boxdark-2 p-4 rounded-lg">
              <img 
                src="/images/statistic.png" 
                alt="Statistika Izvoza" 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </section>

          {/* Pregled Transakcija */}
          <section className="grid md:grid-cols-2 gap-8 items-center mt-20">
            <div className="order-1">
              <div className="bg-gray-100 dark:bg-boxdark-2 p-4 rounded-lg">
                <img 
                  src="/images/izvestajTransakcija.png" 
                  alt="Pregled Transakcija" 
                  className="rounded-lg w-full h-auto shadow-lg"
                />
              </div>
            </div>
            <div className="order-2">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                Pregled Transakcija i Pretraga
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Pratite sve realizovane transakcije na platformi uz napredne opcije pretrage i filtriranja:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Pretraga i filtriranje po proizvodu, mesecu i državi izvoza</li>
                <li>Detaljan prikaz količina, vrednosti i cena po transakciji</li>
                <li>Analitika i statistika za donošenje boljih poslovnih odluka</li>
              </ul>
            </div>
          </section>

          {/* Services Section */}
          <section className="bg-gray-50 dark:bg-boxdark-2 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-black dark:text-white mb-6 text-center">
              Dodatne Usluge
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-boxdark p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Provera Boniteta
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Detaljna provera finansijskog stanja i istorije poslovanja vaših partnera
                </p>
              </div>
              <div className="bg-white dark:bg-boxdark p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Faktoring i Osiguranje
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Finansijska podrška i osiguranje transakcija za sigurno poslovanje
                </p>
              </div>
              <div className="bg-white dark:bg-boxdark p-6 rounded-lg">
                <h3 className="text-xl font-bold text-black dark:text-white mb-3">
                  Kontrola Kvaliteta
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Nezavisna provera kvaliteta proizvoda pre isporuke
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-white dark:bg-boxdark border-t border-stroke dark:border-strokedark mt-20">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">AgroB2B Hub</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Vodeća B2B platforma za trgovinu voćem i povrćem u regiji
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">Kontakt</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Podrška: <a href="tel:+381613004984" className="text-primary hover:underline">+381613004984</a>
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Email: <a href="mailto:info@agrob2bhub.com" className="text-primary hover:underline">info@agrob2bhub.com</a>
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-4">Pratite nas</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:text-opacity-80">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="border-t border-stroke dark:border-strokedark mt-8 pt-8 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} AgroB2B Hub. Sva prava zadržana.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage; 