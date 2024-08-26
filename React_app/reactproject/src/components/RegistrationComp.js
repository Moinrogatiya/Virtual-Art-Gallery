import React, { useState, useReducer, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaCogs, FaCity, FaBuilding } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../images/loginBackground.jpg";

// Initial state for the form
const initialState = {
  FirstName: "",
  LastName: "",
  EmailId: "",
  Contact: "",
  cityId: "",
  areaId: "",
  UserName: "",
  Password: "",
  address: "",
  description: "",
};

// Reducer function to handle state updates
const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

// Validation function
const validateForm = (user) => {
  const errors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.EmailId)) errors.emailidError = "Invalid email format.";

  const contactRegex = /^[0-9]{10}$/;
  if (!contactRegex.test(user.Contact)) errors.contactError = "Contact Number must be 10 digits and contain only numbers.";

  if (/\s/.test(user.UserName)) errors.usernameError = "Username must not contain spaces.";
  
  if (user.UserName.trim() === "") errors.usernameError = "Username cannot be empty.";

  const pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&])[a-zA-Z0-9!@#$%^&*]{6,}$/;
  if (!pwdRegex.test(user.Password)) errors.pwdError = "Password must contain at least one digit, one special character, and be at least 6 characters long.";

  if (!user.cityId) errors.cityError = "City selection is required.";
  if (!user.areaId) errors.areaError = "Area selection is required.";

  if (!user.FirstName) errors.fnameError = "First Name is required.";
  if (!user.LastName) errors.lnameError = "Last Name is required.";
  if (!user.address) errors.addressError = "Address is required.";
  if (!user.description) errors.descriptionError = "Description is required.";

  return errors;
};

// Main registration component
export default function RegistrationComp() {
  const [user, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);
  const [areas, setAreas] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/cities")
      .then(resp => resp.json())
      .then(cat => setCities(cat))
      .catch(err => console.error('Error fetching cities:', err));
  }, []);

  useEffect(() => {
    if (user.cityId) {
      fetch(`http://localhost:8080/areas?cityId=${user.cityId}`)
        .then(resp => resp.json())
        .then(cat => setAreas(cat))
        .catch(err => console.error('Error fetching areas:', err));
    } else {
      setAreas([]);
    }
  }, [user.cityId]);

  useEffect(() => {
    fetch("http://localhost:8080/cities")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched cities:', data); // Log data to check structure
        setCities(data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
        setMsg(`Error fetching cities: ${error.message}`);
      });
  }, []);

  const filteredCities = cities
    .filter(city => city.name && city.name.toLowerCase().includes(search.toLowerCase())) // Check if city.name is defined
    .slice(0, 5); // Limit to 5 cities

  const submitHandle = (e) => {
    e.preventDefault();

    const formErrors = validateForm(user);
    if (Object.keys(formErrors).length === 0) {
      setLoading(true);

      fetch("http://localhost:5077/api/UserManagement/SaveArtist", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: user.FirstName,
          lastName: user.LastName,
          emailId: user.EmailId,
          contact: user.Contact,
          cityId: user.cityId,
          areaId: user.areaId,
          username: user.UserName,
          password: user.Password,
          roleId: 2,
          address: user.address,
          artist: {
            about: user.description
          }
        })
      })
      .then(resp => {
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        return resp.json();
      })
      .then(() => {
        setLoading(false);
        setMsg("Registration successful!");
        dispatch({ type: 'reset' }); // Reset form state
        setTimeout(() => navigate("/login"), 2000); // Redirect after a short delay
      })
      .catch(error => {
        setLoading(false);
        setMsg(`Registration failed: ${error.message}`);
      });
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#000' // Adjust text color for better visibility
      }}
    >
      <div
        className="bg-light bg-opacity-50 p-4 mt-5 rounded shadow-lg border"
        style={{ maxWidth: '900px', width: '100%' }}
      >
        <h1 className="text-center text-dark mb-3">Artist Registration Form</h1>
        <form onSubmit={submitHandle} className="p-3">
          {/* First and Last Name in a single row */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="fname" className="form-label">First Name <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
                <input
                  type="text"
                  className={`form-control ${errors.fnameError ? "is-invalid" : ""}`}
                  name="fname"
                  value={user.FirstName}
                  onChange={(e) => dispatch({ type: 'update', fld: 'FirstName', val: e.target.value })}
                  placeholder="Enter your first name"
                />
              </div>
              {errors.fnameError && <div className="text-danger">{errors.fnameError}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="lname" className="form-label">Last Name <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
                <input
                  type="text"
                  className={`form-control ${errors.lnameError ? "is-invalid" : ""}`}
                  name="lname"
                  value={user.LastName}
                  onChange={(e) => dispatch({ type: 'update', fld: 'LastName', val: e.target.value })}
                  placeholder="Enter your last name"
                />
              </div>
              {errors.lnameError && <div className="text-danger">{errors.lnameError}</div>}
            </div>
          </div>

          {/* Email and Contact in a single row */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="emailid" className="form-label">Email Id <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaEnvelope /></span>
                <input
                  type="email"
                  className={`form-control ${errors.emailidError ? "is-invalid" : ""}`}
                  name="emailid"
                  value={user.EmailId}
                  onChange={(e) => dispatch({ type: 'update', fld: 'EmailId', val: e.target.value })}
                  placeholder="Enter your email"
                />
              </div>
              {errors.emailidError && <div className="text-danger">{errors.emailidError}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="contact" className="form-label">Contact Number <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaPhone /></span>
                <input
                  type="text"
                  className={`form-control ${errors.contactError ? "is-invalid" : ""}`}
                  name="contact"
                  value={user.Contact}
                  onChange={(e) => dispatch({ type: 'update', fld: 'Contact', val: e.target.value })}
                  placeholder="Enter your contact number"
                />
              </div>
              {errors.contactError && <div className="text-danger">{errors.contactError}</div>}
            </div>
          </div>

          {/* City and Area dropdowns in a single row */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="city" className="form-label">City <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
                {/* <input
                  type="text"
                  className="form-control"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search city..."
                /> */}
                <select
                  id="city"
                  className={`form-select ${errors.cityError ? "is-invalid" : ""}`}
                  value={user.cityId}
                  onChange={(e) => dispatch({ type: 'update', fld: 'cityId', val: e.target.value })}
                >
                  {/* <option value="">Select City</option>
                  {filteredCities.map(city => (
                    <option key={city.id} value={city.id}>{city.name}</option>
                  ))} */}
                       <option value="">-- Select City --</option>
                    {cities.map((city) => (
                      <option key={city.city_id} value={city.city_id}>
                        {city.city_name}
                      </option>
                    ))}
                </select>
              </div>
              {errors.cityError && <div className="text-danger">{errors.cityError}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="area" className="form-label">Area <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
                <select
                  id="area"
                  className={`form-select ${errors.areaError ? "is-invalid" : ""}`}
                  value={user.areaId}
                  onChange={(e) => dispatch({ type: 'update', fld: 'areaId', val: e.target.value })}
                >
                  <option value="">Select Area</option>
                  {/* Populate areas dynamically here */}
                  <option value="">-- Select Area --</option>
                    {Array.isArray(areas) && areas.length > 0 ? (
                      areas.map((area) => (
                        <option key={area.area_id} value={area.area_id}>
                          {area.area_name}
                        </option>
                      ))
                    ) : (
                      <option value="">No areas available</option>
                    )}
                </select>
              </div>
              {errors.areaError && <div className="text-danger">{errors.areaError}</div>}
            </div>
          </div>

          {/* Username, Password, Address, and Description */}
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaCogs /></span>
                <input
                  type="text"
                  className={`form-control ${errors.usernameError ? "is-invalid" : ""}`}
                  name="username"
                  value={user.UserName}
                  onChange={(e) => dispatch({ type: 'update', fld: 'UserName', val: e.target.value })}
                  placeholder="Enter your username"
                />
              </div>
              {errors.usernameError && <div className="text-danger">{errors.usernameError}</div>}
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
              <div className="input-group">
                <span className="input-group-text bg-primary text-white border-0"><FaLock /></span>
                <input
                  type="password"
                  className={`form-control ${errors.pwdError ? "is-invalid" : ""}`}
                  name="password"
                  value={user.Password}
                  onChange={(e) => dispatch({ type: 'update', fld: 'Password', val: e.target.value })}
                  placeholder="Enter your password"
                />
              </div>
              {errors.pwdError && <div className="text-danger">{errors.pwdError}</div>}
            </div>
          </div>
{/* Address and Description in a single row */}
<div className="row">
  <div className="col-md-6 mb-3">
    <label htmlFor="address" className="form-label">Address <span className="text-danger">*</span></label>
    <div className="input-group">
      <span className="input-group-text bg-primary text-white border-0"><FaBuilding /></span>
      <textarea
        id="address"
        className={`form-control ${errors.addressError ? "is-invalid" : ""}`}
        rows="3"
        value={user.address}
        onChange={(e) => dispatch({ type: 'update', fld: 'address', val: e.target.value })}
        placeholder="Enter your address"
      />
    </div>
    {errors.addressError && <div className="text-danger">{errors.addressError}</div>}
  </div>

  <div className="col-md-6 mb-3">
    <label htmlFor="description" className="form-label">Description <span className="text-danger">*</span></label>
    <div className="input-group">
      <span className="input-group-text bg-primary text-white border-0"><FaCity /></span>
      <textarea
        id="description"
        className={`form-control ${errors.descriptionError ? "is-invalid" : ""}`}
        rows="3"
        value={user.description}
        onChange={(e) => dispatch({ type: 'update', fld: 'description', val: e.target.value })}
        placeholder="Enter a description"
      />
    </div>
    {errors.descriptionError && <div className="text-danger">{errors.descriptionError}</div>}
  </div>
</div>


          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Register'}
          </button> 

          {msg && <div className="mt-3 text-success">{msg}</div>}
        </form>
      </div>
    </div>
  );
}
