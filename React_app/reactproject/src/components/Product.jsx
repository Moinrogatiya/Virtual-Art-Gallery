import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [productSubcategories, setProductSubcategories] = useState([]);
  const [selectedProductCategory, setSelectedProductCategory] = useState('');
  const [selectedProductSubcategory, setSelectedProductSubcategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [cartItems, setCartItems] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch product categories
    fetch("http://localhost:8080/products/allproductcategory")
      .then((resp) => {
        console.log('Product Categories Response status:', resp.status); // Debugging line
        return resp.json();
      })
      .then((cat) => setProductCategories(cat))
      .catch((err) => console.error("Failed to fetch product categories", err));

    // Fetch products
    fetchProducts();
  }, [selectedProductCategory, selectedProductSubcategory, searchTerm, priceRange]);

  useEffect(() => {
    if (selectedProductCategory) {
      // Fetch product subcategories based on selected category
      fetch(`http://localhost:8080/products/psubcategory?cid=${selectedProductCategory}`)
        .then((resp) => {
          console.log('Product Subcategories Response status:', resp.status); // Debugging line
          return resp.json();
        })
        .then((subcat) => setProductSubcategories(subcat))
        .catch((err) => console.error("Failed to fetch product subcategories", err));
    } else {
      setProductSubcategories([]);
      setSelectedProductSubcategory('');
    }
  }, [selectedProductCategory]);

  const fetchProducts = () => {
    let url = `http://localhost:8080/products/allproducts`;
    if (selectedProductCategory) {
      url += `?categoryId=${selectedProductCategory}`;
    }
    if (selectedProductSubcategory) {
      url += `${selectedProductCategory ? '&' : '?'}subcategoryId=${selectedProductSubcategory}`;
    }
    if (priceRange) {
      url += `${selectedProductCategory || selectedProductSubcategory ? '&' : '?'}priceRange=${priceRange}`;
    }

    console.log('Fetching products from URL:', url); // Debugging line

    fetch(url)
      .then((resp) => {
        console.log('Products Response status:', resp.status); // Debugging line
        return resp.json();
      })
      .then((data) => {
        console.log('Products data:', data); // Debugging line
        setProducts(data);
      })
      .catch((err) => console.error("Failed to fetch products", err));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleAddToCart = (product, e) => {
    if (e) e.preventDefault();

    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productIndex = existingCart.findIndex(item => item.product_id === product.product_id);

    if (productIndex === -1) {
      existingCart.push({ ...product, quantity: 1 });
    } else {
      existingCart[productIndex].quantity += 1;
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    const updatedCartItems = existingCart.reduce((acc, item) => ({ ...acc, [item.product_id]: item.quantity }), {});
    setCartItems(updatedCartItems);
  };


  const handleQuantityChange = (product, change) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const productIndex = existingCart.findIndex(item => item.product_id === product.product_id);

    if (productIndex > -1) {
      existingCart[productIndex].quantity += change;
      if (existingCart[productIndex].quantity <= 0) {
        existingCart.splice(productIndex, 1);
      }
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
      const updatedCartItems = existingCart.reduce((acc, item) => ({ ...acc, [item.product_id]: item.quantity }), {});
      setCartItems(updatedCartItems);
    }
  };

  const filteredProducts = products.filter((product) => {
    return (
      (searchTerm === '' || product.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

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
              placeholder="Search Products"
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
            value={selectedProductCategory}
            onChange={(e) => setSelectedProductCategory(e.target.value)}
          >
            <option value="">All Product Categories</option>
            {productCategories.map((category) => (
              <option key={category.pcat_id} value={category.pcat_id}>
                {category.pcat_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedProductSubcategory}
            onChange={(e) => setSelectedProductSubcategory(e.target.value)}
            disabled={!selectedProductCategory}
          >
            <option value="">All Product Subcategories</option>
            {productSubcategories.map((subcategory) => (
              <option key={subcategory.psub_id} value={subcategory.psub_id}>
                {subcategory.psub_name}
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
            onClick={() => navigate('/buyer_home')}
            style={{ backgroundColor: '#6c63ff', color: 'white', width: '100%' }}
          >
            Go to Artwork Page
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

      {/* Products Display Section */}
      <div
        className="row mb-4"
        style={{
          backgroundColor: '#f8f9fa',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/productsBackground.jpg)`,
          backgroundRepeat: 'no-repeat',
          width: '100%',
          padding: '0'
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="col-lg-4 col-md-6 mb-4" key={product.product_id}>
              <div className="card h-100">
                <LazyLoad height={200} offset={100}>
  <img
    src={product.product_img ? `data:image/jpeg;base64,${product.product_img}` : ''}
    className="card-img-top"
    alt={product.product_name}
    onError={(e) => {
      console.log('Error loading image, setting default image.');
      e.target.src = 'default_image_url'; // Replace with actual default image URL
    }}
    onLoad={() => console.log('Image loaded successfully.')}
  />
</LazyLoad>
<div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">{product.price} Rs.</p>
                {cartItems[product.product_id] > 0 ? (
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleQuantityChange(product, -1)}
                    >
                      -
                    </button>
                    <span className="mx-2">{cartItems[product.product_id]}</span>
                    <button
                      className="btn btn-secondary"
                      onClick={() => handleQuantityChange(product, 1)}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleAddToCart(product, e)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No products found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
