import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import Settings from './pages/Pages/Settings';
import SellOffers from './pages/Pages/SellOffers';
import BuyOffers from './pages/Pages/BuyOffers';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import PageTitle from './components/PageTitle';
import ProtectedRoute from './common/ProtectedRoute';
import VerifyEmail from './pages/Authentication/VerifyEmail';
import SellOfferDetails from './pages/SellOfferDetails';
import NewSellOffer from './pages/SellOffers/NewSellOffer';
import BuyOfferDetails from './pages/BuyOfferDetails';
import NewBuyOffer from './pages/BuyOffers/NewBuyOffer';
import ExportStatisticDashboard from './pages/Dashboard/ExportStatisticDashboard';
import ExportStatisticDashboard2025 from './pages/Dashboard/ExportStatisticDashboard2025';
import Transactions from './pages/Dashboard/Transactions';
import ProfileCompany from './pages/Profile/ProfileCompany';
import ProfileUser from './pages/Profile/ProfileUser';
import CompanyNotVerified from './pages/Authentication/CompanyNotVerified';
import CurrentPrices from "./pages/Dashboard/CurrentPrices";
import LandingPage from "./pages/LandingPage";
import ProductVariants from './pages/Prices/ProductVariants';
import CompaniesList from './pages/Companies/CompaniesList';
import NotificationPreferences from './pages/NotificationPreferences';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        {/*<Route*/}
        {/*  path="/dashboard/analytics"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Analytics Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Analytics />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/dashboard/marketing"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Marketing Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Marketing />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/calendar"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Calendar />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/tenders"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Tenders" />*/}
        {/*      <TenderList />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/tasks/task-list"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Task List | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <TaskList />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/tasks/task-kanban"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Task Kanban | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <TaskKanban />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/forms/form-elements"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <FormElements />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/forms/pro-form-elements"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Pro Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ProFormElements />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/forms/form-layout"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <FormLayout />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/forms/pro-form-layout"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Pro Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ProFormLayout />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/tables/tables"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Tables />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/tables/pro-tables"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Pro Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ProTables />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/tables/pro-tables"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Tables />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}

        {/*<Route*/}
        {/*  path="/pages/file-manager"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="File Manager | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <FileManager />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/data-tables"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Data Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <DataTables />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/pricing-tables"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Pricing Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <PricingTables />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/error-page"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Error Page | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ErrorPage />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/faq"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Faq's | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Faq />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/team"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Terms & Conditions | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Teams />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/terms-conditions"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Terms & Conditions | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <TermsConditions />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/pages/mail-success"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Mail Success | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <MailSuccess />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/messages"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Messages | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Messages />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/inbox"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Inbox | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Inbox />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/invoice"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Invoice | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Invoice />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/chart/basic-chart"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <BasicChart />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/chart/advanced-chart"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Advanced Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <AdvancedChart />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/accordion"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Accordion | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Accordion />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/alerts"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Alerts />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/avatars"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Avatars | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Avatars />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/badge"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Badge | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Badge />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/breadcrumbs"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Breadcrumbs | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Breadcrumbs />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/buttons"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Buttons />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/buttons-group"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Buttons Groupo | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ButtonsGroup />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/cards"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Cards | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Cards />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/carousel"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Carousel | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Carousel />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/dropdowns"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Dropdowns | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Dropdowns />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/images"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Images | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Images />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/list"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="List | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <List />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/modals"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Modals | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Modals />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/notifications"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Notifications | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Notifications />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/pagination"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Pagination | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Pagination />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/popovers"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Popovers | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Popovers />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/progress"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Progress | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Progress />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/spinners"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Spinners | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Spinners />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/tabs"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Tabs | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Tabs />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/tooltips"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Tooltips | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Tooltips />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/ui/videos"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Videos | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <Videos />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/auth/reset-password"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Reset Password | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ResetPassword />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/auth/coming-soon"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Coming Soon | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <ComingSoon />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/auth/two-step-verification"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="2 Step Verification | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <TwoStepVerification />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
        {/*<Route*/}
        {/*  path="/auth/under-maintenance"*/}
        {/*  element={*/}
        {/*    <>*/}
        {/*      <PageTitle title="Under Maintenance | TailAdmin - Tailwind CSS Admin Dashboard Template" />*/}
        {/*      <UnderMaintenance />*/}
        {/*    </>*/}
        {/*  }*/}
        {/*/>*/}
          <Route
              path="/"
              element={
                  <>
                      <PageTitle title="AgroB2B Hub - B2B platforma za trgovinu voćem i povrćem" />
                      <LandingPage />
                  </>
              }
          />
        <Route
          path="/company-not-verified"
          element={
            <>
              <PageTitle title="Company Not Verified" />
              <CompanyNotVerified />
            </>
          }
        />
        <Route
          path="/dashboard/current"
          element={
            <ProtectedRoute
              element={CurrentPrices}
              title="Trenutni pregled"
              allowedUserTypes={['company']}
            />
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              element={ExportStatisticDashboard}
              title="Statistika Izvoza 2024"
              allowedUserTypes={['company']}
            />
          }
        />

        <Route
          path="/dashboard/2025"
          element={
            <ProtectedRoute
              element={ExportStatisticDashboard2025}
              title="Statistika Izvoza 2025"
              allowedUserTypes={['company']}
            />
          }
        />

        <Route
          path="/dashboard/transactions2024"
          element={
            <ProtectedRoute
              element={Transactions}
              title="Lista transakcija"
              allowedUserTypes={['company']}
            />
          }
        />

        <Route
          path="/dashboard/transactions2025"
          element={
            <ProtectedRoute
              element={Transactions}
              title="Lista transakcija 2025"
              allowedUserTypes={['company']}
            />
          }
        />

        <Route
          path="/sell-offers"
          element={<ProtectedRoute element={SellOffers} title="Prodaja" allowedUserTypes={['company']} />}
        />
        <Route
          path="/buy-offers"
          element={<ProtectedRoute element={BuyOffers} title="Kupovina" />}
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute 
            element={ProfileCompany} 
            title="Moj Profil"
            allowedUserTypes={['company']} 
            />
          }
        />
        <Route
          path="/user-profile"
          element={
            <ProtectedRoute element={ProfileUser} title="Moj Profil" />
          }
        />
        <Route
          path="/pages/settings"
          element={<ProtectedRoute element={Settings} title="Settings" />}
        />
        <Route
          path="/auth/signin"
          element={
            <>
              <PageTitle title="Prijava" />
              <SignIn />
            </>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <>
              <PageTitle title="Registracija" />
              <SignUp />
            </>
          }
        />
        <Route
          path="/verify-email"
          element={
            <>
              <PageTitle title="Verify Email" />
              <VerifyEmail />
            </>
          }
        />
        <Route
          path="/sell-offers/:id"
          element={
            <ProtectedRoute
              element={SellOfferDetails}
              title="Sell Offer Details"
            />
          }
        />
        <Route
          path="/sell-offers/new"
          element={
            <ProtectedRoute
              element={NewSellOffer}
              title="Kreiraj Novu Prodajnu Ponudu"
            />
          }
        />
        <Route path="/buy-offers/:id" element={<BuyOfferDetails />} />
        <Route
          path="/buy-offers/new"
          element={
            <ProtectedRoute
              element={NewBuyOffer}
              title="Kreiraj Novu Kupovnu Ponudu"
              allowedUserTypes={['company']}
            />
          }
        />
        <Route
          path="/dashboard/prices/:productId"
          element={
            <ProtectedRoute
              element={ProductVariants}
              title="Varijante proizvoda"
            />
          }
        />
        <Route path="/companies"
        element={<CompaniesList />} />
        <Route
          path="/notification-preferences"
          element={
            <ProtectedRoute
              element={NotificationPreferences}
              title="Market Alerts"
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
