import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaTrashAlt, FaArrowLeft, FaCheckCircle } from 'react-icons/fa';

export default function ProductCartComp() {
  const [cartItems, setCartItems] = React.useState([]);
  const [showPaymentOptions, setShowPaymentOptions] = React.useState(false);
  const [selectedPaymentOption, setSelectedPaymentOption] = React.useState('');
  const [orderConfirmed, setOrderConfirmed] = React.useState(false);
  const [showOrderSummary, setShowOrderSummary] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(savedCartItems);
  }, []);

  const removeFromCart = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.product_id !== id);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
  };

  const handleCheckout = () => {
    setShowOrderSummary(true);
    setShowPaymentOptions(true);
  };

  const handlePaymentOptionChange = (e) => {
    setSelectedPaymentOption(e.target.value);
  };

  const handleOrderConfirm = () => {
    setOrderConfirmed(true);
    // Clear cart items
    setCartItems([]);
    localStorage.removeItem('cartItems');

    // Hide Order Summary and Payment Options
    setShowOrderSummary(false);
    setShowPaymentOptions(false);

    // Navigate to product_home
    setTimeout(() => {
      navigate('/product_home');
    }, 10000); // 10 seconds delay

    // Hide Order Confirmed message after 10 seconds
    setTimeout(() => {
      setOrderConfirmed(false);
    }, 10000);
  };

  const handleBackToCart = () => {
    setShowOrderSummary(false);
    setShowPaymentOptions(false);
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
          <div className="d-flex align-items-center">
            <button
              className="btn"
              onClick={() => navigate('/products')}
              style={{
                backgroundColor: '#6c63ff',
                color: 'white',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                padding: '0.5rem',
              }}
            >
              <FaArrowLeft />
            </button>
            <h3 className="text-dark mb-0" style={{ fontWeight: 'bold', marginLeft: '10px' }}>
              PRODUCT WORLD
            </h3>
          </div>
          <div className="d-flex align-items-center mt-2 mt-md-0">
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
              }}
            >
              <FaSignOutAlt className="me-1" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Order Confirmed Message */}
      {orderConfirmed && (
        <div className="row mt-3">
          <div className="col-lg-12 text-center">
            <div className="alert alert-success d-inline-flex align-items-center" role="alert">
              <FaCheckCircle className="me-2" style={{ fontSize: '1.5rem' }} />
              <span>Your order has been confirmed!</span>
            </div>
          </div>
        </div>
      )}

      {/* Your Cart Section */}
      <div className="row mt-3">
        <div className="col-lg-12">
          <div className="card shadow-sm">
            <div className="card-header bg-dark text-white">
              <h4 className="mb-0">Your Cart</h4>
            </div>
            <div className="card-body">
              {cartItems.length > 0 ? (
                <div className="list-group">
                  {cartItems.map((item) => (
                    <div className="list-group-item d-flex justify-content-between align-items-center" key={item.product_id}>
                      <div className="d-flex align-items-center">
                        <img
                          src={URL.createObjectURL(
                            new Blob([new Uint8Array(item.product_image)])
                          )}
                          className="img-thumbnail me-3"
                          alt={item.product_name}
                          style={{ width: '100px', height: 'auto' }}
                        />
                        <div>
                          <h5 className="mb-1">{item.product_name}</h5>
                          <p className="mb-1">
                            <strong>Category:</strong> {item.categoryName}
                          </p>
                          <p className="mb-1">
                            <strong>Price:</strong> ${item.price}
                          </p>
                        </div>
                      </div>
                      {!showOrderSummary && (
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.product_id)}
                        >
                          <FaTrashAlt className="me-1" />
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center">Your cart is empty.</p>
              )}
              {!showOrderSummary && cartItems.length > 0 && (
                <div className="text-center mt-4">
                  <button
                    className="btn btn-primary"
                    onClick={handleCheckout}
                    style={{ backgroundColor: '#6c63ff', color: 'white' }}
                  >
                    Proceed to Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Order Summary Section */}
      {showOrderSummary && (
        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="card shadow-sm">
              <div className="card-header bg-dark text-white">
                <h4 className="mb-0">Order Summary</h4>
              </div>
              <div className="card-body">
                {showPaymentOptions && (
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentOption"
                        value="cod"
                        className="form-check-input"
                        onChange={handlePaymentOptionChange}
                      />
                      <label htmlFor="cod" className="form-check-label">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                )}

                <div className="d-flex justify-content-between mt-4">
                  <button
                    className="btn btn-secondary"
                    onClick={handleBackToCart}
                  >
                    Back to Your Cart
                  </button>
                  <button
                    className="btn btn-success"
                    disabled={selectedPaymentOption !== 'cod'}
                    onClick={handleOrderConfirm}
                  >
                    Confirm Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
