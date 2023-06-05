//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  return (
      <div className="app">
          <Header />
          <main className="main">
              <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/detail/:id" element={<Detail />} />
                </Routes>
              </div>
          </main>
      </div>
  );
}

export default App;
