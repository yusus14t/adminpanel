import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Login from "./authentication/Login";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddNewProduct from "./components/AddNewProduct";
import Product from "./components/Product";
import Account from "./components/Account";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    const user = JSON.parse(localStorage.getItem("userName"));
    return (
      <>
        <Routes>
          {user ? (
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="addnewproduct" element={<AddNewProduct />} />
              <Route path="account" element={<Account />} />
              <Route path="" element={<Product />} />
              <Route path="products" element={<Product />} />
            </Route>
          ) : (
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/*" element={<Navigate to={"/login"} />} />
            </Route>
          )}
        </Routes>
        {/* <ApiData /> */}
        <Footer />
      </>
    );
  }
}

export default App;
