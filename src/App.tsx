import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/customers">Customers</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
        <Route path="/customers" element={<AppCustomers/>}/>
        <Route path="/products" element={<AppProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
