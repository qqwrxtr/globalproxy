import './App.css';
import Banner from './components/Banner/Banner';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app d-flex flex-column justify-content-center">
      <header>
        <Header/>
      </header>
      <main className='d-flex flex-column justify-content-center align-items-center'>
        <Banner/>
      </main>
    </div>
  );
}

export default App;
