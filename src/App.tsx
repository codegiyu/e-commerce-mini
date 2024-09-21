import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import NoPage from './pages/404';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />

        {/* Authenticated Pages */}

        {/* 404 page */}
        <Route path='*' element={<ProductCard />} />
      </Routes>
    </Router>
  )
}

export default App
