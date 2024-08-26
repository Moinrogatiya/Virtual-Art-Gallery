import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css'; 
import RegistrationComp from './components/RegistrationComp';
import HomePage from './components/HomePage';
import LoginComp from './components/LoginPage';
import AdminPage from './components/AdminPage';
import ArtistPage from './components/ArtistPage';
import BuyerPage from './components/BuyerPage';
import LogoutComp from './components/LogoutComp';
import RegistrationBuyerComp from './components/RegistrationBuyer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import ProductPage from './components/Product';
import CartPage from './components/CartPage,';
import ProductCartComp from './components/ProductCartComp';

function App() {
  const mystate = useSelector((state) => state.logged);

  return (
    <div className="App">
      <div style={{ display: mystate.loggedIn ? 'none' : 'block' }}>
        <nav
          className="navbar navbar-expand-lg px-3"
          style={{
            backgroundColor: 'whitesmoke', // Light gray for a clean and elegant look
            borderBottom: '2px solid #ccc', // Soft gray border
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', // Light shadow for a subtle effect
          }}
        >
          <div className="container-fluid">
            <Link
              to="/"
              className="navbar-brand"
              style={{
                fontWeight: 'bold',
                color: '#333', // Dark gray for text to contrast with the light background
                fontSize: '1.5rem',
              }}
            >
              ART WORLD
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="btn me-2 mb-2 mb-lg-0"
                    style={{
                      color: '#333', // Dark gray text
                      backgroundColor: 'transparent',
                      border: '1px solid #333', // Dark gray border
                      borderRadius: '5px',
                    }}
                  >
                    <FaSignInAlt className="me-1" />
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register_artist"
                    className="btn me-2 mb-2 mb-lg-0"
                    style={{
                      color: 'white', // White text
                      backgroundColor: '#6c63ff', // Modern purple for a creative feel
                      border: 'none',
                      borderRadius: '5px',
                    }}
                  >
                    <FaUserPlus className="me-1" />
                    Register Artist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register_buyer"
                    className="btn mb-2 mb-lg-0"
                    style={{
                      color: 'white', // White text
                      backgroundColor: '#6c63ff', // Same modern purple
                      border: 'none',
                      borderRadius: '5px',
                    }}
                  >
                    <FaUserPlus className="me-1" />
                    Register Buyer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<App />} />
        <Route path="/register_artist" element={<RegistrationComp />} />
        <Route path="/register_buyer" element={<RegistrationBuyerComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/admin_home" element={<AdminPage />} />
        <Route path="/artist_home" element={<ArtistPage />} />
        <Route path="/buyer_home" element={<BuyerPage />} />
        <Route path="/logout" element={<LogoutComp />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productcart" element={<ProductCartComp />} />
      </Routes>
    </div>
  );
}

export default App;
