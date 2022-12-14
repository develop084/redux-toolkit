import React, { useState, useEffect } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
      setLoading(false);
    };

    fetchProducts();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        gap: 50,
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <p>loading...</p>
      ) : (
        products.map((item) => (
          <div>
            <Product
              item={item}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          </div>
        ))
      )}
    </div>
  );
}

export default Products;
