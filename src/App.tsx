import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import CartPage from './pages/CartPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/auth/SignupPage";
import NoPage from "./pages/404";

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
        <Route path="/cart" element={<CartPage />} />

        {/* 404 page */}
        <Route path="*" element={<NoPage />} />
        {/* <Route path="*" element={<ProductCard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
