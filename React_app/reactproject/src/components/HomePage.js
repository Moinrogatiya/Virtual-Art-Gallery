import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid d-flex flex-column min-vh-100 p-0 justify-content-center align-items-center">
      {/* Welcome Message Section */}
      <div className="row mb-4 p-4 text-center">
        <div className="col-12">
          <h2 className="d-inline-block" style={{ fontSize: '4rem', animation: 'bounce 1.5s infinite' }}>
            <span className="text-danger fw-bold fst-italic">W</span>
            <span className="text-warning fw-bold fst-italic">e</span>
            <span className="text-success fw-bold fst-italic">l</span>
            <span className="text-primary fw-bold fst-italic">c</span>
            <span className="text-info fw-bold fst-italic">o</span>
            <span className="text-dark fw-bold fst-italic">m</span>
            <span className="text-muted fw-bold fst-italic">e</span>
            <span> </span>
            <span className="text-danger fw-bold fst-italic">t</span>
            <span className="text-warning fw-bold fst-italic">o</span>
            <span> </span>
            <span className="text-success fw-bold fst-italic">o</span>
            <span className="text-primary fw-bold fst-italic">u</span>
            <span className="text-info fw-bold fst-italic">r</span>
            <span> </span>
            <span className="text-dark fw-bold fst-italic">w</span>
            <span className="text-muted fw-bold fst-italic">e</span>
            <span className="text-danger fw-bold fst-italic">b</span>
            <span className="text-warning fw-bold fst-italic">s</span>
            <span className="text-success fw-bold fst-italic">i</span>
            <span className="text-primary fw-bold fst-italic">t</span>
            <span className="text-info fw-bold fst-italic">e</span>
          </h2>
          <p className="text-danger fw-bold fst-italic" style={{ fontSize: '2rem' }}>
            Here you can buy or sell artwork and buy or sell products.
          </p>
          <button
            className="btn btn-info mt-3"
            style={{
              backgroundColor: '#17a2b8',
              borderColor: '#17a2b8',
              color: 'white',
              fontSize: '1.5rem',
              padding: '1rem 2rem',
              borderRadius: '0.5rem',
              transition: 'transform 0.3s',
              animation: 'pulse 2s infinite'
            }}
            onClick={() => navigate('/login')}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
}

// Add the keyframes for the bounce and pulse animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);
