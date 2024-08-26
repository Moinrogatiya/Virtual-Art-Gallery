import React, { useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define the initial state and reducer for the form
const initialState = {
    artName: '',
    description: '',
    categories: [],
    artNameError: '',
    descriptionError: '',
    loading: false,
    error: null,
    success: false
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_ART_NAME':
            return { ...state, artName: action.payload };
        case 'SET_DESCRIPTION':
            return { ...state, description: action.payload };
        case 'SET_ART_NAME_ERROR':
            return { ...state, artNameError: action.payload };
        case 'SET_DESCRIPTION_ERROR':
            return { ...state, descriptionError: action.payload };
        case 'SET_LOADING':
            return { ...state, loading: action.payload };
        case 'SET_ERROR':
            return { ...state, error: action.payload, loading: false };
        case 'SET_SUCCESS':
            return { ...state, success: action.payload, loading: false };
        case 'SET_CATEGORIES':
            return { ...state, categories: action.payload };
        default:
            return state;
    }
}

// Validation functions
const validateArtName = (name) => {
    if (name.trim() === '') {
        return 'Art name is required.';
    }
    return '';
};

const validateDescription = (desc) => {
    if (desc.trim() === '') {
        return 'Description is required.';
    }
    return '';
};

export default function AddArtCat() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Fetch categories when the component mounts
    useEffect(() => {
        fetch('http://localhost:8080/category/allcategories')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SET_CATEGORIES', payload: data });
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
                dispatch({ type: 'SET_ERROR', payload: 'Failed to load categories.' });
            });
    }, []);

    const submitHandle = (e) => {
        e.preventDefault();

        // Validate fields
        const artNameError = validateArtName(state.artName);
        const descriptionError = validateDescription(state.description);

        // Update state with validation errors
        dispatch({ type: 'SET_ART_NAME_ERROR', payload: artNameError });
        dispatch({ type: 'SET_DESCRIPTION_ERROR', payload: descriptionError });

        // Check for validation errors
        if (artNameError || descriptionError) {
            return;
        }

        const sendData = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                acat_name: state.artName,
                description: state.description,
            })
        };

        dispatch({ type: 'SET_LOADING', payload: true });

        fetch('http://localhost:8080/category/addcategory', sendData)
            .then(response => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(text || 'Network response was not ok.');
                    });
                }
                return response.json(); 
            })
            .then(() => {
                dispatch({ type: 'SET_SUCCESS', payload: true });
                dispatch({ type: 'SET_ART_NAME', payload: '' });
                dispatch({ type: 'SET_DESCRIPTION', payload: '' });
                dispatch({ type: 'SET_ART_NAME_ERROR', payload: '' });
                dispatch({ type: 'SET_DESCRIPTION_ERROR', payload: '' });
                alert('Art Category added successfully!');

                // Re-fetch categories to update the list
                fetch('http://localhost:8080/category/allcategories')
                    .then(response => response.json())
                    .then(data => {
                        dispatch({ type: 'SET_CATEGORIES', payload: data });
                    })
                    .catch(error => {
                        console.error('Error fetching categories:', error);
                        dispatch({ type: 'SET_ERROR', payload: 'Failed to load categories.' });
                    });
            })
            .catch(error => {
                console.error('There was an error adding the art category!', error);
                dispatch({ type: 'SET_ERROR', payload: error.message });
                alert('Failed to add art category.');
            })
            .finally(() => {
                dispatch({ type: 'SET_LOADING', payload: false });
            });
    };

    return (
        <div className="container mt-5" style={{ maxWidth: '800px' }}>
            <h1 className="mb-4 text-center">Add Art Category</h1>
            
            {/* Form Section */}
            <div className="card border-primary rounded shadow-sm mb-4 p-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">New Category</h2>
                    <form onSubmit={submitHandle}>
                        <div className="mb-3">
                            <label htmlFor="artName" className="form-label">Art Category:</label>
                            <input
                                type="text"
                                id="artName"
                                name="artName"
                                value={state.artName}
                                onChange={(e) => dispatch({ type: 'SET_ART_NAME', payload: e.target.value })}
                                className={`form-control ${state.artNameError ? 'is-invalid' : ''}`}
                            />
                            {state.artNameError && <div className="invalid-feedback">{state.artNameError}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label">Description:</label>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                value={state.description}
                                onChange={(e) => dispatch({ type: 'SET_DESCRIPTION', payload: e.target.value })}
                                className={`form-control ${state.descriptionError ? 'is-invalid' : ''}`}
                            />
                            {state.descriptionError && <div className="invalid-feedback">{state.descriptionError}</div>}
                        </div>
                        <button type="submit" className="btn btn-primary w-100" disabled={state.loading}>
                            {state.loading ? 'Adding...' : 'Add Art Category'}
                        </button>
                        {state.error && <div className="alert alert-danger mt-3">{state.error}</div>}
                        {state.success && <div className="alert alert-success mt-3">Art Category added successfully!</div>}
                    </form>
                </div>
            </div>
            
            {/* Categories List Section */}
            <div className="card border-primary rounded shadow-sm p-4">
                <div className="card-body">
                    <h2 className="card-title mb-4">Existing Categories</h2>
                    {state.categories.length > 0 ? (
                        <table className="table table-bordered table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {state.categories.map(category => (
                                    <tr key={category.acat_id}>
                                        <td>{category.acat_id}</td>
                                        <td>{category.acat_name}</td>
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
