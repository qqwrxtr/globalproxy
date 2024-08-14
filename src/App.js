import React, { Suspense, lazy } from 'react';
import './App.css';

const Banner = lazy(() => import('./components/Banner/Banner'));
const Dashboard = lazy(() => import('./components/DashBoard/Dashboard'));
const Features = lazy(() => import('./components/Features/Features'));
const Footer = lazy(() => import('./components/Footer/Footer'));
const Header = lazy(() => import('./components/Header/Header'));
const InfoBlock = lazy(() => import('./components/InfoAbt/Infoabt'));
const Offers = lazy(() => import('./components/Offers/Offers'));
const TechSupport = lazy(() => import('./components/TechSupport/Techsupport'));

function App() {
  return (
    <div className="app d-flex flex-column justify-content-center">
      <Suspense>
        <header>
          <Header />
        </header>
        <main className='d-flex flex-column justify-content-center align-items-center'>
          <Banner />
          <InfoBlock />
          <Offers />
          <Features />
          <Dashboard />
          <TechSupport />
        </main>
        <footer>
          <Footer />
        </footer>
      </Suspense>
    </div>
  );
}

export default App;
