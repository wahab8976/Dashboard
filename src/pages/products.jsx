import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="flex">
      <SideNavbar />
      <div className="w-full">
        <div className="flex justify-between p-4 items-center">
          <h2 className="text-2xl font-serif">Products</h2>
          <button
            onClick={() => navigate("/users/addProducts")}
            className="bg-blue-600 text-white p-3 rounded-xl"
          >
            Add Product
          </button>
        </div>

        <div className="flex flex-wrap justify-between p-4 gap-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                brand={product.brand}
                category={product.category}
                description={product.description}
                price={product.price}
                stock={product.stock}
              />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
