import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/header/Header';
import AboutUsPage from './pages/AboutUsPage';
import SpringNaturePage from './pages/spring/SpringNaturePage';
import SpringBreakPage from './pages/spring/SpringBreakPage';
import SpringHistoryPage from './pages/spring/SpringHistoryPage';

function App() {
  return (
    <BrowserRouter>
        <Header />

      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/aboutUs' element={<AboutUsPage />}></Route>
        
        {/* Spring Page */}
        <Route path='/spring/nature' element={<SpringNaturePage />}></Route>
        <Route path='/spring/break' element={<SpringBreakPage />}></Route>
        <Route path='/spring/history' element={<SpringHistoryPage />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;