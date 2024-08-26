import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon
import AddArtCat from './AddArtCat'; // Import AddArtCat
import AddProductCat from './AddProductCat'; // Import AddProductCat
import Brand from './Brand'; // Import Brand
import ArtistList from './ArtistList'; // Import ArtistList
import BuyerList from './BuyerList'; // Import BuyerList
import AddProduct from './AddProduct'; // Import AddProduct
import ProductList from './ProductList'; // Import ProductList

export default function AdminPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentView, setCurrentView] = useState('home');
    const navigate = useNavigate();

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Handle menu item click
    const handleMenuClick = (view) => {
        setCurrentView(view);
        setIsMenuOpen(false); // Optionally close the menu on item click
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user session
        navigate('/logout'); // Redirect to home page
    };

    // Render content based on the current view
    const renderContent = () => {
        switch (currentView) {
            case 'addCategory':
                return <div>Add Category Form</div>;
            case 'addproduct':
                return <AddProduct />;
            case 'addBrand':
                return <Brand />;
            case 'addProductCat':
                return <AddProductCat />;
            case 'addArtCategory':
                return <AddArtCat />;
            case 'artistList':
                return <ArtistList />;
            case 'buyerList':
                return <BuyerList />;
            case 'productList':
                return <ProductList />; // Render ProductList component
            default:
                return (
                    <div style={{ textAlign: 'center', marginTop: '50px' }}>
                        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff', animation: 'colorChange 3s infinite' }}>
                            Welcome to the Admin Page
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: '#6c757d' }}>Manage your content efficiently and effectively</p>
                    </div>
                );
        }
    };

    return (
        <div className="d-flex">
            {/* Sidebar Menu */}
            <div
                className={`sidebar-menu bg-light p-3 shadow-sm ${isMenuOpen ? 'show' : 'hide'}`}
                style={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '250px',
                    height: '100%',
                    overflowY: 'auto',
                    transition: 'transform 0.3s ease',
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(-100%)',
                    backgroundColor: '#f8f9fa',
                }}
            >
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addCategory')}>Add Category</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addBrand')}>Add Brand</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addproduct')}>Add Product</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addProductCat')}>Add Product Category</button>
                <button className="btn btn-outline-primary w-100 mb-2" onClick={() => handleMenuClick('addArtCategory')}>Add Art Category</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('artistList')}>Artist List</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('buyerList')}>Buyer List</button>
                <button className="btn btn-outline-secondary w-100 mb-2" onClick={() => handleMenuClick('productList')}>Product List</button> {/* New Menu Item */}
            </div>

            {/* Main Content */}
            <div className="flex-grow-1">
                <nav className="navbar navbar-light bg-light d-flex justify-content-between">
                    <div className="d-flex align-items-center">
                        <button 
                            className="btn btn-primary me-3" 
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? 'Close Menu' : 'Menu'}
                        </button>
                        <span className="navbar-brand mb-0 h1" style={{ fontFamily: 'Cursive', fontWeight: 'bold', animation: 'colorChange 3s infinite' }}>
                            <span style={{ color: '#ff0000' }}>A</span>
                            <span style={{ color: '#ff7f00' }}>R</span>
                            <span style={{ color: '#ffff00' }}>T</span>
                            <span style={{ color: '#00ff00' }}> </span>
                            <span style={{ color: '#0000ff' }}>W</span>
                            <span style={{ color: '#4b0082' }}>O</span>
                            <span style={{ color: '#8b00ff' }}>R</span>
                            <span style={{ color: '#ff0000' }}>L</span>
                            <span style={{ color: '#ff7f00' }}>D</span>
                        </span>
                    </div>
                    <button className="btn btn-danger" onClick={handleLogout}>
                        <FaSignOutAlt className="me-1" /> Logout
                    </button>
                </nav>

                {/* Render content based on the selected view */}
                <div className="container mt-4" style={{ fontFamily: 'Arial, sans-serif', color: '#343a40' }}>
                    {renderContent()}
                </div>
            </div>

            {/* Keyframes for animation */}
            <style>
                {`
                    @keyframes colorChange {
                        0% { color: #007bff; }
                        50% { color: #28a745; }
                        100% { color: #007bff; }
                    }
                `}
            </style>
        </div>
    );
}
