import React from "react";
import Dashboard from "./pages/dashboard";
import Products from "./pages/products";
import Orders from "./pages/orders";
import AddProduct from "./pages/addProduct";
import Categories from "./pages/categories";
import AddCategory from "./pages/addCategory";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleAdminRedirect = () => {
    navigate("/users/dashboard");
  };

  return (
    <main className="p-4">
      <h1>App</h1>
      <button
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded-md"
        onClick={handleAdminRedirect}
      >
        Go to Admin
      </button>
    </main>
  );
};

const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users/dashboard" element={<Dashboard />} />
      <Route path="/users/products" element={<Products />} />
      <Route path="/users/orders" element={<Orders />} />
      <Route path="/users/addProducts" element={<AddProduct />} />
      <Route path="/users/categories" element={<Categories />} />
      <Route path="/users/addCategory" element={<AddCategory />} />
    </Routes>
  </Router>
);

export default Root;
