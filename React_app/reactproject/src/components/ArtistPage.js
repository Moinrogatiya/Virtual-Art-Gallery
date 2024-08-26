import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import AddArtWork from './AddArtwork';
import { Modal, Button } from 'react-bootstrap';
import './ArtistPage.css'; // Add any custom styles you may need
import LazyLoad from 'react-lazyload';

export default function ArtistPage() {
  const navigate = useNavigate();

  const [artworks, setArtworks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [selectedArtist, setSelectedArtist] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddArtworkForm, setShowAddArtworkForm] = useState(false);

  useEffect(() => {
    // Fetch all categories
    fetch("http://localhost:8080/category/allcategories")
      .then((resp) => resp.json())
      .then((cat) => setCategories(cat));

    // Fetch all artists
    fetch("http://localhost:8080/user/getuserbyrole?roleId=2")
      .then((resp) => resp.json())
      .then((artists) => setArtists(artists));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      // Fetch subcategories based on selected category
      fetch(`http://localhost:8080/category/subcategory?cid=${selectedCategory}`)
        .then((resp) => resp.json())
        .then((subcat) => setSubcategories(subcat))
        .catch((error) => console.error("Error fetching subcategories:", error));
    } else {
      setSubcategories([]);
    }
  }, [selectedCategory]);

  // useEffect(() => {
  //   // Fetch artworks based on filters
  //   let url = "http://localhost:8080/artworks/allartworks";
  //   // const filters = [];

    // if (selectedCategory) filters.push(`categoryId=${selectedCategory}`);
    // if (selectedSubcategory) filters.push(`subcategoryId=${selectedSubcategory}`);
    // if (selectedArtist) filters.push(`artistId=${selectedArtist}`);
    // if (searchTerm) filters.push(`searchTerm=${searchTerm}`);

    // if (filters.length > 0) {
    //   url += `?${filters.join('&')}`;
    // }
    useEffect(() => {
      // Fetch artworks based on filters
      let url = "http://localhost:8080/artwork/allartwork";
    
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          console.log("Fetched Artworks:", data); // Log the fetched data
          setArtworks(data);
          console.log("Artworks State:", artworks); // Log the state to verify
        })
        .catch((error) => console.error("Error fetching artworks:", error));
    }, []);
  

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/logout');
  };

  const toggleAddArtworkForm = () => {
    setShowAddArtworkForm(!showAddArtworkForm);
  };

  const handleClearFilters = () => {
    setSelectedCategory('');
    setSelectedSubcategory('');
    setSelectedArtist('');
    setSearchTerm('');
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="website-name">Art World</h3>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search by artwork name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <Button className="btn btn-primary me-2" onClick={toggleAddArtworkForm}>
            <FaUserPlus className="me-1" />
            {showAddArtworkForm ? 'Hide Form' : 'Add Artwork'}
          </Button>
          <Button className="btn btn-outline-secondary" onClick={handleLogout}>
            <FaSignOutAlt className="me-1" />
            Logout
          </Button>
        </div>
      </div>

      <Modal show={showAddArtworkForm} onHide={toggleAddArtworkForm} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Artwork</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddArtWork />
        </Modal.Body>
      </Modal>

      <div className="row mb-3">
        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedArtist}
            onChange={(e) => setSelectedArtist(e.target.value)}
          >
            <option value="">All Artists</option>
            {artists.map((artist) => (
              <option key={artist.id} value={artist.id}>
                {artist.first_name} {artist.last_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Art Categories</option>
            {categories.map((category) => (
              <option key={category.acat_id} value={category.acat_id}>
                {category.acat_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2">
          <select
            className="form-select"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={!selectedCategory}
          >
            <option value="">All Art Subcategories</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory.sc_id} value={subcategory.sc_id}>
                {subcategory.sc_name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3 mb-2 d-flex justify-content-end">
          <Button className="btn btn-secondary" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        </div>
      </div>

      <div className="row">
        {artworks.length > 0 ? (
          artworks.map((artwork) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={artwork.art_id}>
              <div className="card h-100 shadow-sm">
              <LazyLoad height={200} offset={100
                
              }>
                <img
                  src={artwork.art_photo ? `data:image/jpeg;base64,${artwork.art_photo}` : ''} // Replace 'default_image_url' with actual URL
                  className="card-img-top"
                  alt={artwork.art_name}
                 // style={{ height: '200px', objectFit: 'cover' }}
                  onError={(e) => e.target.src = 'default_image_url'} // Fallback image URL
                />
                </LazyLoad>
                <div className="card-body">
                  <h5 className="card-title">{artwork.art_name}</h5>
                  <p className="card-text">{artwork.description}</p>
                  <p className="card-text"><strong>Price:</strong> {artwork.amount}</p>
                  <Link to={`/artworks/${artwork.art_id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <p className="text-center">No artworks found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
