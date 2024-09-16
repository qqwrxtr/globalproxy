import "./landing.css";
import React, { Suspense, lazy } from "react";

const Banner = lazy(() => import("../../components/Banner/Banner.jsx"));
const Dashboard = lazy(
  () => import("../../components/DashBoard/Dashboard.jsx"),
);
const Features = lazy(() => import("../../components/Features/Features.jsx"));
const Footer = lazy(() => import("../../components/Footer/Footer.jsx"));
const Header = lazy(() => import("../../components/Header/Header.jsx"));
const InfoBlock = lazy(() => import("../../components/InfoAbt/Infoabt.jsx"));
const Offers = lazy(() => import("../../components/Offers/Offers.jsx"));
const TechSupport = lazy(
  () => import("../../components/TechSupport/Techsupport.jsx"),
);

export default function LandingPage() {
  return (
    <div className="app d-flex flex-column justify-content-center">
      <Suspense fallback={<div></div>}>
        <header>
          <Header />
        </header>
        <main className="d-flex flex-column justify-content-center align-items-center">
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
