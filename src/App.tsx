import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        
        {/* Authenticated Pages */}
        <Route path='/cart' element={<CartPage />} />

        {/* 404 page */}
        <Route path='*' element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
