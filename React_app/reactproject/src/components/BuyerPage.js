import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaShoppingCart, FaTrashAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

export default function BuyerPage() {
  const [artworks, setArtworks] = useState([]);
  const [artCategories, setArtCategories] = useState([]);
  const [artSubcategories, setArtSubcategories] = useState([]);
  const [selectedArtCategory, setSelectedArtCategory] = useState('');
  const [selectedArtSubcategory, setSelectedArtSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [addedToCart, setAddedToCart] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch categories and artworks
    fetch("http://localhost:8080/category/allcategories")
      .then((resp) => resp.json())
      .then((cat) => setArtCategories(cat))
      .catch((err) => console.error("Failed to fetch art categories", err));

    fetchArtworks();
  }, [selectedArtCategory, selectedArtSubcategory, searchTerm, priceRange]);

  useEffect(() => {
    if (selectedArtCategory) {
      fetch(`http://localhost:8080/category/subcategory?cid=${selectedArtCategory}`)
        .then((resp) => resp.json())
        .then((subcat) => setArtSubcategories(subcat))
        .catch((err) => console.error("Failed to fetch art subcategories", err));
    } else {
      setArtSubcategories([]);
      setSelectedArtSubcategory('');
    }
  }, [selectedArtCategory]);

  useEffect(() => {
    // Retrieve cart items from local storage on component mount
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
    // Update addedToCart state based on cartItems
    const addedItems = savedCartItems.reduce((acc, item) => {
      acc[item.art_id] = true;
      return acc;
    }, {});
    setAddedToCart(addedItems);
  }, []);

  const fetchArtworks = () => {
    let url = `http://localhost:8080/artwork/allartwork`;
    if (selectedArtCategory) {
      url += `?categoryId=${selectedArtCategory}`;
    }
    if (selectedArtSubcategory) {
      url += `${selectedArtCategory ? '&' : '?'}subcategoryId=${selectedArtSubcategory}`;
    }
    if (priceRange) {
      url += `${selectedArtCategory || selectedArtSubcategory ? '&' : '?'}priceRange=${priceRange}`;
    }

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setArtworks(data))
      .catch((err) => console.error("Failed to fetch artworks", err));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredArtworks = artworks.filter((artwork) => {
    return (
      (searchTerm === '' || artwork.art_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const getImageUrl = (blob) => {
    return `data:image/jpeg;base64,${blob}`;
  };

  const addToCart = (artwork) => {
    const updatedCartItems = [...cartItems, artwork];
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    setAddedToCart(prev => ({ ...prev, [artwork.art_id]: true }));
  };

  const handleAddToCart = (artwork) => {
    if (!addedToCart[artwork.art_id]) {
      addToCart(artwork);
    } else {
      alert(`${artwork.art_name} is already in your cart.`);
    }
  };

  return (
    <div className="container-fluid p-0">
      {/* Header Section */}
      <div
        className="bg-light p-3 mb-0 rounded"
        style={{
          backgroundColor: '#6c63ff',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/headerBackground.jpg)`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          margin: '0',
          padding: '0'
        }}
      >
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div>
            <h3 className="text-dark" style={{ fontWeight: 'bold' }}>ART WORLD</h3>
          </div>
          <div className="d-flex align-items-center mt-2 mt-md-0">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search Art"
              value={searchTerm}
              onChange={handleSearch}
              style={{ maxWidth: '300px' }}
            />
            <button
              className="btn"
              onClick={() => navigate('/logout')}
              style={{
                color: 'white',
                backgroundColor: '#6c63ff',
                border: 'none',
                borderRadius: '5px',
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                display: 'flex',
                alignItems: 'center',
                marginLeft: '0.5rem'
              }}
            >
              <FaSignOutAlt className="me-1" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div
        className="row mb-1 align-items-center bg-light p-3 rounded"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/filtersBackground.jpg)`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          margin: '3px 0 0 0',
          padding: '0'
        }}
      >
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedArtCategory}
            onChange={(e) => setSelectedArtCategory(e.target.value)}
          >
            <option value="">All Art Categories</option>
            {artCategories.map((category) => (
              <option key={category.acat_id} value={category.acat_id}>
                {category.acat_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedArtSubcategory}
            onChange={(e) => setSelectedArtSubcategory(e.target.value)}
            disabled={!selectedArtCategory}
          >
            <option value="">All Art Subcategories</option>
            {artSubcategories.map((subcategory) => (
              <option key={subcategory.sc_id} value={subcategory.sc_id}>
                {subcategory.sc_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low-to-high">Low to High</option>
            <option value="high-to-low">High to Low</option>
          </select>
        </div>

        <div className="col-md-3 d-flex justify-content-between align-items-center mb-2">
          <button
            className="btn"
            onClick={() => navigate('/products')}
            style={{ backgroundColor: '#6c63ff', color: 'white', width: '100%' }}
          >
            Go to Product Page
          </button>
          <button
            className="btn rounded-circle"
            onClick={() => navigate('/cart')}
            style={{
              backgroundColor: '#6c63ff',
              color: 'white',
              width: '40px',
              height: '40px',
              marginLeft: '0.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>

      {/* Artworks Display Section */}
      <div
        className="row mb-4"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/artworksBackground.jpg)`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          padding: '0'
        }}
      >
        {filteredArtworks.length > 0 ? (
          filteredArtworks.map((artwork) => (
            <div className="col-lg-4 col-md-6 mb-4" key={artwork.art_id}>
              <div className="card h-100">
                <LazyLoad height={200} offset={100}>
                  <img
                    src={getImageUrl(artwork.art_photo)}
                    className="card-img-top"
                    alt={artwork.art_name}
                  />
                </LazyLoad>
                <div className="card-body">
                  <h5 className="card-title">{artwork.art_name}</h5>
                  {/* <p className="card-text">
                    <strong>Category:</strong> {artwork.categoryName}
                  </p> */}
                  <p className="card-text">
                    <strong>Price:</strong> Rs. {artwork.amount}
                  </p>
                  {/* <p className="card-text">
                    <strong>Artist:</strong> {artwork.artistName}
                  </p> */}
                  <button
                    className="btn"
                    style={{
                      backgroundColor: '#6c63ff',
                      color: 'white',
                      width: '100%',
                      cursor: addedToCart[artwork.art_id] ? 'not-allowed' : 'pointer',
                    }}
                    onClick={() => handleAddToCart(artwork)}
                    disabled={addedToCart[artwork.art_id]}
                  >
                    {addedToCart[artwork.art_id] ? 'Added' : <><FaShoppingCart className="me-1" /> Add to Cart</>}
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <p>No artworks found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
