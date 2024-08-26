import { useReducer, useState, useEffect } from "react";

const init = {
  bname: "",
  description: "",
  bnameError: "",
  descriptionError: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.fld]: action.val };
    case "setError":
      return { ...state, [`${action.fld}Error`]: action.val };
    case "reset":
      return init;
    default:
      return state;
  }
};

// Validation functions
const validateBrandName = (bname) => {
  if (bname.trim() === "") {
    return "Brand name is required.";
  }
  return "";
};

const validateDescription = (description) => {
  if (description.trim() === "") {
    return "Description is required.";
  }
  return "";
};

export default function Brand() {
  const [user, dispatch] = useReducer(reducer, init);
  const [msg, setmsg] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/brand/getallbrand")
      .then((resp) => resp.json())
      .then((data) => setBrands(data))
      .catch((error) => setmsg("Failed to fetch brands."));
  }, [msg]);

  const submitHandle = (e) => {
    e.preventDefault();
    
    // Validate fields
    const bnameError = validateBrandName(user.bname);
    const descriptionError = validateDescription(user.description);

    // Update state with validation errors
    dispatch({ type: "setError", fld: "bname", val: bnameError });
    dispatch({ type: "setError", fld: "description", val: descriptionError });

    // Check for validation errors
    if (bnameError || descriptionError) {
      return; // Prevent form submission if there are errors
    }

    const sendData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        b_name: user.bname,
        description: user.description,
      }),
    };

    fetch("http://localhost:8080/brand/addbrand", sendData)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error("Failed to add brand");
        }
        return resp.json();
      })
      .then(() => {
        setmsg("Brand added successfully");
        dispatch({ type: "reset" }); // Reset form fields
      })
      .catch((error) => setmsg(error.message));
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '900px' }}>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="border border-primary rounded shadow-sm p-4">
            <h1 className="mb-4 text-center">Add Brand</h1>
            <form onSubmit={submitHandle} className="mb-5">
              <div className="mb-3">
                <label htmlFor="bname" className="form-label">
                  Brand Name:
                </label>
                <input
                  type="text"
                  id="bname"
                  name="bname"
                  value={user.bname}
                  onChange={(e) =>
                    dispatch({ type: "update", fld: "bname", val: e.target.value })
                  }
                  className={`form-control ${user.bnameError ? 'is-invalid' : ''}`}
                />
                {user.bnameError && <div className="invalid-feedback">{user.bnameError}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={user.description}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "description",
                      val: e.target.value,
                    })
                  }
                  className={`form-control ${user.descriptionError ? 'is-invalid' : ''}`}
                />
                {user.descriptionError && <div className="invalid-feedback">{user.descriptionError}</div>}
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Add
              </button>
              <div className="mt-3">
                <span>{msg}</span>
              </div>
            </form>
          </div>

          {/* Brand Table */}
          <div className="border border-primary rounded shadow-sm p-4 mt-4">
            <h2>Existing Brands</h2>
            {brands.length > 0 ? (
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Brand Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((brand) => (
                    <tr key={brand.b_id}>
                      <td>{brand.b_id}</td>
                      <td>{brand.b_name}</td>
                      <td>{brand.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-muted">No brands available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
