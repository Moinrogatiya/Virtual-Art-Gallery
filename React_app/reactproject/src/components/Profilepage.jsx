import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ProfilePage() {
  const [UserData, setUserData] = useState({
    publicName: "",
    city: "",
    country: "",
    address: "",
    description: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", UserData);
  };

  return (
    <div>
      <div className="container mt-5">
        <h2>Edit Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="publicName">Public Name:</label>
            <input
              type="text"
              id="publicName"
              name="publicName"
              className="form-control"
              value={UserData.publicName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              className="form-control"
              value={UserData.city}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country:</label>
            <input
              type="text"
              id="country"
              name="country"
              className="form-control"
              value={UserData.country}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              className="form-control"
              value={UserData.address}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={UserData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="profileImage">Upload Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              className="form-control-file"
              onChange={handleChange}
            />
            <small className="form-text text-muted">
              One file only. 5 MB limit. Allowed types: jpg jpeg.
            </small>
          </div>

          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
