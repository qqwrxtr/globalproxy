import './App.css';
import Banner from './components/Banner/Banner';
import Features from './components/Features/Features';
import Header from './components/Header/Header';
import InfoBlock from './components/InfoAbt/Infoabt';
import Offers from './components/Offers/Offers';

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
      </main>
    </div>
  );
}

export default App;
