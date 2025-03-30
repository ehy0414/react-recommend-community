import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/layout/header/Header';
import AboutUsPage from './pages/AboutUsPage';
import SpringNaturePage from './pages/spring/SpringNaturePage';
import SpringBreakPage from './pages/spring/SpringBreakPage';
import SpringHistoryPage from './pages/spring/SpringHistoryPage';
import SpringWritePage from './pages/spring/SpringWritePage';
import SpringPostPage from './pages/spring/SpringPostPage';
import SummerBreakPage from './pages/summer/SummerBreakPage';
import SummerNaturePage from './pages/summer/SummerNaturePage';
import SummerHistoryPage from './pages/summer/SummerHistoryPage';
import SummerWritePage from './pages/summer/SummerWritePage';
import SummerPostPage from './pages/summer/SummerPostPage';
import JoinPage from './pages/JoinPage';
import LoginPage from './pages/LoginPage';
import AutumnNaturePage from './pages/autumn/AutumnNaturePage';
import AutumnBreakPage from './pages/autumn/AutumnBreakPage';
import AutumnHistoryPage from './pages/autumn/AutumnHistoryPage';
import AutumnWritePage from './pages/autumn/AutumnWritePage';
import AutumnPostPage from './pages/autumn/AutumnPostPage';
import WinterNaturePage from './pages/winter/WinterNaturePage';
import WinterBreakPage from './pages/winter/WinterBreakPage';
import WinterHistoryPage from './pages/winter/WinterHistoryPage';
import WinterWritePage from './pages/winter/WinterWritePage';
import WinterPostPage from './pages/winter/WinterPostPage';

function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/aboutUs' element={<AboutUsPage />}></Route>
        <Route path='/user/join' element={<JoinPage />}></Route>
        <Route path='/user/login' element={<LoginPage />}></Route>
        
        {/* Spring Page */}
        <Route path='/spring/nature' element={<SpringNaturePage />}></Route>
        <Route path='/spring/break' element={<SpringBreakPage />}></Route>
        <Route path='/spring/history' element={<SpringHistoryPage />}></Route>
        <Route path='/spring/write' element={<SpringWritePage />}></Route>
        <Route path='/spring/:id' element={<SpringPostPage />}></Route>

        {/* Summer Page */}
        <Route path='/summer/nature' element={<SummerNaturePage />}></Route>
        <Route path='/summer/break' element={<SummerBreakPage />}></Route>
        <Route path='/summer/history' element={<SummerHistoryPage />}></Route>
        <Route path='/summer/write' element={<SummerWritePage />}></Route>
        <Route path='/summer/:id' element={<SummerPostPage />}></Route>

        {/* Autumn Page */}
        <Route path='/autumn/nature' element={<AutumnNaturePage />}></Route>
        <Route path='/autumn/break' element={<AutumnBreakPage />}></Route>
        <Route path='/autumn/history' element={<AutumnHistoryPage />}></Route>
        <Route path='/autumn/write' element={<AutumnWritePage />}></Route>
        <Route path='/autumn/:id' element={<AutumnPostPage />}></Route>

        {/* Winter Page */}
        <Route path='/winter/nature' element={<WinterNaturePage />}></Route>
        <Route path='/winter/break' element={<WinterBreakPage />}></Route>
        <Route path='/winter/history' element={<WinterHistoryPage />}></Route>
        <Route path='/winter/write' element={<WinterWritePage />}></Route>
        <Route path='/winter/:id' element={<WinterPostPage />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;