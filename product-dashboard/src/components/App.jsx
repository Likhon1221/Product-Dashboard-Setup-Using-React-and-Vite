// Task 2. Create the App Component

import React, { useState } from "react";
import ProductList from "./components/ProductList";
import AddProductForm from "./components/AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, description: "A high-performance gaming laptop." },
    { id: 2, name: "Phone", price: 800, description: "Latest smartphone." },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;