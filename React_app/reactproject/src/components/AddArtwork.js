import { useState, useReducer, useEffect } from "react";

export default function AddArtWork() {
  const init = {
    art_name: "",
    amount: "",
    description: "",
    dimension: "",
    weight: "",
    u_id: "",
    sub_cat_id: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val };
      case 'reset':
        return init;
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [acat, setacat] = useState("");
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [file, setFile] = useState(null); // New state for file
  const [artist , setartist] = useState();

  useEffect(() => {
    const loginid = JSON.parse(localStorage.getItem("loggedUser")).id;
  
    fetch(`http://localhost:8080/user/getalluserById?uid=${loginid}`)
      .then(resp => resp.json())
      .then(obj => {
        localStorage.setItem("ArtistLoggedIn", JSON.stringify(obj));
        setartist(obj.id); // Set artist ID in the state
      })
      .catch(err => console.error("Failed to fetch artist", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/category/allcategories")
      .then(resp => resp.json())
      .then(cat => setCategories(cat))
      .catch(err => console.error("Failed to fetch categories", err));
  }, []);

  useEffect(() => {
    if (acat) {
      fetch(`http://localhost:8080/category/subcategory?cid=${acat}`)
        .then(resp => resp.json())
        .then(subcat => {
          setSubcategories(subcat);
        })
        .catch(err => console.error("Failed to fetch subcategories", err));
    } else {
      setSubcategories([]);
    }
  }, [acat]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const submitHandle = (e) => {
    e.preventDefault();

    const sendData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        art_name: user.art_name,
        amount: user.amount,
        description: user.description,
        dimension: user.dimension,
        weight: user.weight,
        u_id: artist,
        sub_cat_id: user.sub_cat_id,
      }),
    };

    fetch("http://localhost:8080/artwork/uploadartwork", sendData)
      .then(resp => resp.json())
      .then(async obj => {
        if (obj.art_id) {
          localStorage.setItem("artworkdata" ,JSON.stringify(obj))
          alert("Artwork added successfully");

          // Upload the image if a file is selected
          if (file) {
            const formData = new FormData();
            formData.append('file', file);

            const imageResponse = await fetch(`http://localhost:8080/artwork/uploadartimage/${obj.art_id}`, {
              method: "POST",
              body: formData,
            });

            if (imageResponse.ok) {
              localStorage.setItem("artworkImg" ,JSON.stringify(obj));
              alert("Image uploaded successfully");
            } else {
              alert("Failed to upload image");
            }
          }

          dispatch({ type: "reset" });
          setFile(null); // Reset file state
        } else {
          alert(`Error: ${obj.message}`);
        }
      })
      .catch(error => alert(`Failed to add artwork: ${error.message}`));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Artwork</h2>
      <form onSubmit={submitHandle}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="art_name" className="form-label">Artwork Name:</label>
            <input
              type="text"
              className="form-control"
              id="art_name"
              name="art_name"
              value={user.art_name}
              onChange={(e) =>
                dispatch({ type: "update", fld: "art_name", val: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="amount" className="form-label">Amount:</label>
            <input
              type="text"
              className="form-control"
              id="amount"
              name="amount"
              value={user.amount}
              onChange={(e) =>
                dispatch({ type: "update", fld: "amount", val: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="description" className="form-label">Description:</label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              value={user.description}
              onChange={(e) =>
                dispatch({ type: "update", fld: "description", val: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="dimension" className="form-label">Dimension:</label>
            <input
              type="text"
              className="form-control"
              id="dimension"
              name="dimension"
              value={user.dimension}
              onChange={(e) =>
                dispatch({ type: "update", fld: "dimension", val: e.target.value })
              }
            />
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="weight" className="form-label">Weight:</label>
            <input
              type="text"
              className="form-control"
              id="weight"
              name="weight"
              value={user.weight}
              onChange={(e) =>
                dispatch({ type: "update", fld: "weight", val: e.target.value })
              }
            />
          </div>

          {/* <div className="col-md-6 mb-3">
            <label htmlFor="u_id" className="form-label">u_id:</label>
            <input
              type="text"
              className="form-control"
              id="u_id"
              name="u_id"
              value={user.u_id}
              onChange={(e) =>
                dispatch({ type: "update", fld: "u_id", val: e.target.value })
              }
            />
          </div> */}

          <div className="col-md-6 mb-3">
            <label htmlFor="acat_id" className="form-label">Category:</label>
            <select
              className="form-select"
              id="acat_id"
              value={acat}
              onChange={(e) => {
                setacat(e.target.value);
              }}
            >
              <option value="">Select Category</option>
              {categories.map((artcat) => (
                <option key={artcat.acat_id} value={artcat.acat_id}>
                  {artcat.acat_name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="sub_cat_id" className="form-label">Subcategory:</label>
            <select
              className="form-select"
              id="sub_cat_id"
              value={user.sub_cat_id}
              onChange={(e) =>
                dispatch({ type: "update", fld: "sub_cat_id", val: e.target.value })
              }
            >
              <option value="">Select Subcategory</option>
              {subcategories.map((artsub) => (
                <option key={artsub.sc_id} value={artsub.sc_id}>
                  {artsub.sc_name}
                </option>
              ))}
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="image" className="form-label">Upload Image:</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          <div className="col-md-12 mb-3">
            <button type="submit" className="btn btn-primary">Add Artwork</button>
          </div>
        </div>
      </form>
    </div>
  );
}
