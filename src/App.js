import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, price, description };

    // Post data to backend (adjust URL to match your API endpoint)
    fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => {
        if (response.ok) {
          alert("Product added successfully!");
          // Clear the form
          setProductName("");
          setPrice("");
          setDescription("");
        } else {
          alert("Failed to add product");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while adding the product.");
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <button type="submit">Add Product</button>
        </form>
      </header>
    </div>
  );
}

export default App;
