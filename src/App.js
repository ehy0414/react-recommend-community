import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/header/Header';
import AboutUsPage from './pages/AboutUsPage';
import Footer from './components/layout/footer/Footer';
import SpringPage from './pages/SpringPage';

function App() {
  return (
    <BrowserRouter>
        <Header />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/aboutUs' element={<AboutUsPage />}></Route>
        <Route path='/spring' element={<SpringPage />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;