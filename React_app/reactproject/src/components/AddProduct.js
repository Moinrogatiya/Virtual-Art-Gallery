import { useState, useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure Bootstrap is imported

export default function AddProduct() {
  const init = {
    p_name: "",
    price: "",
    description: "",
    stock_quantity: 0,
    b_id: 0,
    psub_id: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "update":
        return { ...state, [action.fld]: action.val };
      case "reset":
        return init;
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, init);
  const [pcat, setpcat] = useState("");
  const [brands, setBrand] = useState("");
  const [psubcat, setpsubcat] = useState("");
  const [allbrand, setallbrand] = useState([]);
  const [allpcat, setallpcat] = useState([]);
  const [allpsc, setallpsc] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/brand/getallbrand")
      .then((resp) => resp.json())
      .then((data) => setallbrand(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/products/allproductcategory")
      .then((resp) => resp.json())
      .then((data) => setallpcat(data));
  }, []);

  useEffect(() => {
    if (pcat) {
      fetch(`http://localhost:8080/products/psubcategory?sid=${pcat}`)
        .then((resp) => resp.json())
        .then((data) => setallpsc(data))
        .catch((error) => console.error("Error fetching subcategories:", error));
    }
  }, [pcat]);


  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Set the selected file
  };

  const submitHandle = (e) => {
    e.preventDefault();

    
    const sendData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        p_name: user.p_name,
        price: user.price,
        description: user.description,
        stock_quantity: user.stock_quantity,
        b_id: user.b_id,
        psub_id: user.psub_id,
      }),
    };

    fetch("http://localhost:8080/products/addproduct", sendData)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Error: ${resp.status} ${resp.statusText}`);
        }
        return resp.json();
      })
      .then(async (obj) => {
        console.log(JSON.stringify(obj));
        if (obj.p_id) {
          alert("Product added successfully");

          // Upload the image if a file is selected
          if (file) {
            const formData = new FormData();
            formData.append('file', file);

            const imageResponse = await fetch(`http://localhost:8080/products/uploadproductimage/${obj.p_id}`, {
              method: "POST",
              body: formData,
            });

            if (imageResponse.ok) {
              alert("Image uploaded successfully");
            } else {
              alert("Failed to upload image");
            }
          }

        } else {
          alert(`Error: ${obj.message}`);
        }
      })
      .catch((error) => alert(`Failed to add product: ${error.message}`));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="border border-primary rounded shadow-sm p-4">
            <h1 className="mb-4 text-center">Add Product</h1>
            <form onSubmit={submitHandle} className="row g-3">
              <div className="col-md-12">
                <label htmlFor="p_name" className="form-label">Product Name</label>
                <input
                  type="text"
                  id="p_name"
                  className="form-control"
                  value={user.p_name}
                  onChange={(e) =>
                    dispatch({ type: "update", fld: "p_name", val: e.target.value })
                  }
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="price" className="form-label">Product Price</label>
                <input
                  type="number"
                  id="price"
                  className="form-control"
                  value={user.price}
                  onChange={(e) =>
                    dispatch({ type: "update", fld: "price", val: e.target.value })
                  }
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  id="description"
                  className="form-control"
                  rows="3"
                  value={user.description}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "description",
                      val: e.target.value,
                    })
                  }
                ></textarea>
              </div>

              <div className="col-md-12">
                <label htmlFor="stock_quantity" className="form-label">Stock Quantity</label>
                <input
                  type="number"
                  id="stock_quantity"
                  className="form-control"
                  value={user.stock_quantity}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "stock_quantity",
                      val: e.target.value,
                    })
                  }
                />
              </div>

              <div className="col-md-12">
                <label htmlFor="b_id" className="form-label">Brand</label>
                <select
                  id="b_id"
                  className="form-select"
                  value={user.b_id}
                  onChange={(e) =>
                    dispatch({ type: "update", fld: "b_id", val: e.target.value })
                  }
                >
                  <option value="">Select Brand</option>
                  {allbrand.map((brand) => (
                    <option key={brand.b_id} value={brand.b_id}>
                      {brand.b_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-12">
                <label htmlFor="pcat" className="form-label">Category</label>
                <select
                  id="pcat"
                  className="form-select"
                  value={pcat}
                  onChange={(e) => setpcat(e.target.value)}
                >
                  <option value="">Select Category</option>
                  {allpcat.map((category) => (
                    <option key={category.pcat_id} value={category.pcat_id}>
                      {category.pcat_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-md-12">
                <label htmlFor="psubcat" className="form-label">Subcategory</label>
                <select
                  id="psubcat"
                  className="form-select"
                  value={user.psub_id}
                  onChange={(e) =>
                    dispatch({
                      type: "update",
                      fld: "psub_id",
                      val: e.target.value,
                    })
                  }
                >
                  <option value="">Select Subcategory</option>
                  {allpsc.map((subcategory) => (
                    <option key={subcategory.psub_id} value={subcategory.psub_id}>
                      {subcategory.psub_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
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


              <div className="col-12">
                <button type="submit" className="btn btn-primary w-100">Add Product</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
