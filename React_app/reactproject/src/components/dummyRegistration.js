import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaCogs } from 'react-icons/fa';

const initialState = {
  FirstName: "",
  LastName: "",
  EmailId: "",
  Contact: "",
  cityId: "",
  areaId: "",
  UserName: "",
  Password: "",
  roleId: "",
  description: "",
  fnameError: "",
  lnameError: "",
  emailidError: "",
  contactError: "",
  cityError: "",
  areaError: "",
  usernameError: "",
  pwdError: "",
  roleError: "",
  descriptionError: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, [action.fld]: action.val };
    case 'setError':
      return { ...state, [`${action.fld}Error`]: action.val };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

export default function DummyRegistrationComp() {
  const [user, dispatch] = useReducer(reducer, initialState);
  const [msg, setmsg] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    const reqData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: user.FirstName,
        lastName: user.LastName,
        emailId: user.EmailId,
        contact: user.Contact,
        areaId: user.areaId,
        username: user.UserName,
        password: user.Password,
        roleId: user.roleId,
        about: user.description,
      })
    };
    fetch("https://localhost:44375/api/UserManagement/SaveArtist", reqData)
      .then(resp => resp.json())
      .then(obj => setmsg(JSON.stringify(obj)))
      .catch(error => setmsg(error.message));
  }

  // Validation functions
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) ? "" : "Invalid email format.";
  };

  const validateContactNumber = (number) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(number) ? "" : "Contact Number must be 10 digits and contain only numbers.";
  };

  const validateUsername = (username) => {
    return !/\s/.test(username) ? "" : "Username must not contain spaces.";
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{2,}$/;
    return regex.test(password) ? "" : "Password must contain at least one digit and one letter.";
  };

  // Additional Validation Functions
  const validateCity = (city) => {
    return city ? "" : "City selection is required.";
  };

  const validateArea = (area) => {
    return area ? "" : "Area selection is required.";
  };

  const validateRole = (role) => {
    return role ? "" : "Role selection is required.";
  };

  const validateForm = () => {
    const errors = {};
    errors.fname = user.FirstName ? "" : "First Name is required.";
    errors.lname = user.LastName ? "" : "Last Name is required.";
    errors.emailid = user.EmailId ? validateEmail(user.EmailId) : "Email Id is required.";
    errors.contact = user.Contact ? validateContactNumber(user.Contact) : "Contact Number is required.";
    errors.city = validateCity(user.cityId);
    errors.area = validateArea(user.areaId);
    errors.username = user.UserName ? validateUsername(user.UserName) : "Username is required.";
    errors.pwd = user.Password ? validatePassword(user.Password) : "Password is required.";
    errors.role = validateRole(user.roleId);
    errors.description = user.description ? "" : "Description is required.";

    Object.keys(errors).forEach(key => {
      dispatch({ type: 'setError', fld: key, val: errors[key] });
    });

    return Object.values(errors).every(error => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Registration user:", user);
      submitHandle(e); // Call submitHandle if form is valid
      dispatch({ type: 'reset' });
    }
  };
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="bg-light p-4 mt-5 rounded shadow-lg border" style={{ maxWidth: '500px', width: '100%' }}>
        <h1 className="text-center text-primary mb-3">Registration Form</h1>
        <form onSubmit={handleSubmit} className="p-3">
          {/* First Name */}
          <div className="mb-3">
            <label htmlFor="fname" className="form-label">First Name <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${user.fnameError ? "is-invalid" : ""}`}
                name="fname"
                value={user.fname}
                onChange={(e) => dispatch({ type: 'update', fld: 'fname', val: e.target.value })}
                placeholder="Enter your first name"
                required
              />
              {user.fnameError && <div className="invalid-feedback">{user.fnameError}</div>}
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label htmlFor="lname" className="form-label">Last Name <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${user.lnameError ? "is-invalid" : ""}`}
                name="lname"
                value={user.lname}
                onChange={(e) => dispatch({ type: 'update', fld: 'lname', val: e.target.value })}
                placeholder="Enter your last name"
                required
              />
              {user.lnameError && <div className="invalid-feedback">{user.lnameError}</div>}
            </div>
          </div>

          {/* Email Id */}
          <div className="mb-3">
            <label htmlFor="emailid" className="form-label">Email Id <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaEnvelope /></span>
              <input
                type="email"
                className={`form-control ${user.emailidError ? "is-invalid" : ""}`}
                name="emailid"
                value={user.emailid}
                onChange={(e) => dispatch({ type: 'update', fld: 'emailid', val: e.target.value })}
                placeholder="Enter your email"
                required
              />
              {user.emailidError && <div className="invalid-feedback">{user.emailidError}</div>}
            </div>
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label htmlFor="contact" className="form-label">Contact Number <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaPhone /></span>
              <input
                type="tel"
                className={`form-control ${user.contactError ? "is-invalid" : ""}`}
                name="contact"
                value={user.contact}
                onChange={(e) => dispatch({ type: 'update', fld: 'contact', val: e.target.value })}
                placeholder="Enter your contact number"
                required
              />
              {user.contactError && <div className="invalid-feedback">{user.contactError}</div>}
            </div>
          </div>

          {/* City */}
          <div className="mb-3">
            <label htmlFor="city" className="form-label">Select City <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
              <select
                className={`form-select ${user.cityError ? "is-invalid" : ""}`}
                name="city"
                value={user.city}
                onChange={(e) => dispatch({ type: 'update', fld: 'city', val: e.target.value })}
                required
              >
                <option value="">Select City</option>
                <option value="1">Pune</option>
                <option value="2">Mumbai</option>
                <option value="3">Delhi</option>
                <option value="4">Bangalore</option>
                <option value="5">Chennai</option>
              </select>
              {user.cityError && <div className="invalid-feedback">{user.cityError}</div>}
            </div>
          </div>

          {/* Area */}
          <div className="mb-3">
            <label htmlFor="area" className="form-label">Select Area <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaMapMarkerAlt /></span>
              <select
                className={`form-select ${user.areaError ? "is-invalid" : ""}`}
                name="area"
                value={user.area}
                onChange={(e) => dispatch({ type: 'update', fld: 'area', val: e.target.value })}
                required
              >
                <option value="">Select Area</option>
                <option value="1">Area1</option>
                <option value="2">Area2</option>
                <option value="3">Area3</option>
                <option value="4">Area4</option>
              </select>
              {user.areaError && <div className="invalid-feedback">{user.areaError}</div>}
            </div>
          </div>

          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaUser /></span>
              <input
                type="text"
                className={`form-control ${user.usernameError ? "is-invalid" : ""}`}
                name="username"
                value={user.username}
                onChange={(e) => dispatch({ type: 'update', fld: 'username', val: e.target.value })}
                placeholder="Enter your username"
                required
              />
              {user.usernameError && <div className="invalid-feedback">{user.usernameError}</div>}
            </div>
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="pwd" className="form-label">Password <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaLock /></span>
              <input
                type="password"
                className={`form-control ${user.pwdError ? "is-invalid" : ""}`}
                name="pwd"
                value={user.pwd}
                onChange={(e) => dispatch({ type: 'update', fld: 'pwd', val: e.target.value })}
                placeholder="Enter your password"
                required
              />
              {user.pwdError && <div className="invalid-feedback">{user.pwdError}</div>}
            </div>
          </div>

          {/* Role */}
          <div className="mb-3">
            <label htmlFor="role" className="form-label">Select Role <span className="text-danger">*</span></label>
            <div className="input-group">
              <span className="input-group-text bg-primary text-white border-0"><FaCogs /></span>
              <select
                className={`form-select ${user.roleError ? "is-invalid" : ""}`}
                name="role"
                value={user.role}
                onChange={(e) => dispatch({ type: 'update', fld: 'role', val: e.target.value })}
                required
              >
                <option value="">Select Role</option>
                <option value="Admin">Admin</option>
                <option value="Artist">Artist</option>
                <option value="Buyer">Buyer</option>
              </select>
              {user.roleError && <div className="invalid-feedback">{user.roleError}</div>}
            </div>
          </div>

          {/* Description */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <div className="input-group">
              <textarea
                className={`form-control ${user.descriptionError ? "is-invalid" : ""}`}
                name="description"
                value={user.description}
                onChange={(e) => dispatch({ type: 'update', fld: 'description', val: e.target.value })}
                placeholder="Enter a brief description"
                rows="3"
              />
              {user.descriptionError && <div className="invalid-feedback">{user.descriptionError}</div>}
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100" onClick={(e) => submitHandle(e)}>REGISTER</button>
        </form>
      </div>
      <div>
            <span>{msg}</span>
            {/* <span>{JSON.stringify(user)}</span> */}
        </div>
    </div>
  );
}
