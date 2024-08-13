import './App.css';
import Banner from './components/Banner/Banner';
import Dashboard from './components/DashBoard/Dashboard';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoAbt/Infoabt';
import Offers from './components/Offers/Offers';
import TechSupport from './components/TechSupport/Techsupport';

function App() {
  return (
    <div className="app d-flex flex-column justify-content-center">
      <header>
        <Header/>
      </header>
      <main className='d-flex flex-column justify-content-center align-items-center'>
        <Banner/>
        <InfoBlock/>
        <Offers/>
        <Features/>
        <Dashboard/>
        <TechSupport/>
      </main>
      
    </div>
  );
}

export default App;
