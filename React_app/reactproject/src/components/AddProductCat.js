import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

export default function AddProductCat() {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [productNameError, setProductNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const [categories, setCategories] = useState([]);

    const validateProductName = (name) => {
        if (name.trim() === '') {
            return 'Product name is required.';
        }
        return '';
    };

    const validateDescription = (desc) => {
        if (desc.trim() === '') {
            return 'Description is required.';
        }
        return '';
    };

    useEffect(() => {
        fetch('http://localhost:8080/products/allproductcategory')
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => {
                console.error('Error fetching categories:', error);
                setError('Failed to load categories.');
            });
    }, []);

    const submitHandle = (e) => {
        e.preventDefault();

        const nameError = validateProductName(productName);
        const descError = validateDescription(description);

        setProductNameError(nameError);
        setDescriptionError(descError);

        if (nameError || descError) {
            return;
        }

        const sendData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                pcat_name: productName,
                description: description
            })
        };

        fetch('http://localhost:8080/products/addProductcat', sendData)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(() => {
                setSuccess(true);
                setProductName('');
                setDescription('');
                setError(null);
                setProductNameError('');
                setDescriptionError('');
                alert('Product Category added successfully!');

                // Re-fetch categories to update the list
                fetch('http://localhost:8080/products/allproductcategory')
                    .then(response => response.json())
                    .then(data => setCategories(data))
                    .catch(error => {
                        console.error('Error fetching categories:', error);
                        setError('Failed to load categories.');
                    });
            })
            .catch(error => {
                setError(error.message);
                setSuccess(false);
                alert('Failed to add product category.');
            });
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '700px' }}>
            <div className="card border-primary rounded shadow-sm p-4">
                <h1 className="text-center mb-4">Add Product Category</h1>
                <form onSubmit={submitHandle}>
                    <div className="mb-3">
                        <label htmlFor="productnm" className="form-label">Product Name:</label>
                        <input
                            type="text"
                            id="productnm"
                            name="productnm"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            className={`form-control ${productNameError ? 'is-invalid' : ''}`}
                        />
                        {productNameError && <div className="invalid-feedback">{productNameError}</div>}
                    </div>
                    
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Description:</label>
                        <textarea
                            id="desc"
                            name="desc"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className={`form-control ${descriptionError ? 'is-invalid' : ''}`}
                            rows="4"
                        />
                        {descriptionError && <div className="invalid-feedback">{descriptionError}</div>}
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Add Product Category
                    </button>
                    
                    {error && <div className="alert alert-danger mt-3">{error}</div>}
                    {success && <div className="alert alert-success mt-3">Product Category added successfully!</div>}
                </form>
            </div>

            <div className="mt-5">
                <h2 className="mb-4 text-center">Existing Product Categories</h2>
                <div className="card border-primary rounded shadow-sm p-4">
                    {categories.length > 0 ? (
                        <table className="table table-striped table-hover">
                            <thead className="thead-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map(category => (
                                    <tr key={category.pcat_id}>
                                        <td>{category.pcat_id}</td>
                                        <td>{category.pcat_name}</td>
                                        <td>{category.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-muted text-center">No categories available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
