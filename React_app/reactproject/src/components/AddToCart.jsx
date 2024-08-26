import React, { useState } from 'react';
import { FaShoppingCart, FaCheck } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddToCartComponent = ({ artwork }) => {
  const [cart, setCart] = useState([]);

  const addToCart = () => {
    setCart([...cart, { ...artwork, qty: 1 }]);
  };

  const confirmOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    alert('Order confirmed!');
    // Here you can add functionality to handle the order confirmation
  };

  return (
    <div className="container d-flex flex-column align-items-center min-vh-100">
      <div className="card mb-3" style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={artwork.image} className="img-fluid rounded-start" alt={artwork.title} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{artwork.title}</h5>
              <p className="card-text">{artwork.description}</p>
              <p className="card-text"><strong>Price:</strong> ${artwork.price}</p>
              <button className="btn btn-primary" onClick={addToCart}>
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className="btn btn-success mt-3" onClick={confirmOrder}>
        <FaCheck /> Confirm Order
      </button>
    </div>
  );
};

export default AddToCartComponent;
