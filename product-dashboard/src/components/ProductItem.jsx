// Task 4. Create the ProductItem Component

import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;