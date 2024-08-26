import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/products/allproducts')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.error('Error fetching products:', error);
                setError('Failed to load products.');
            });
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Product List</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            {products.length > 0 ? (
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Stock Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product.p_id}>
                                <td>{product.p_id}</td>
                                <td>{product.p_name}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>{product.stock_quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-muted text-center">No products available.</p>
            )}
        </div>
    );
}
