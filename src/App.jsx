import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home"
import Laptops from "./pages/CatalogLaptops"
import Phones from "./pages/CatalogPhones"
import Accessories from "./pages/CatalogAccessories"
import Special from "./pages/SaleSpecial"
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Marketplace from "./pages/Marketplace";
import Company from "./pages/Company";


// Main app layout and router
export default function App() {
  return (
    // Root container, flex column for sticky footer layout
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top navigation bar */}
      <Header />
      {/* Main content, centered, with padding from the fixed header */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 pt-32 pb-12">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />
          <Route path="/catalog/laptops" element={<Laptops />} />
          {/* Catalog sub-pages */}
          <Route path="/catalog/phones" element={<Phones />} />
          {/* Sale page */}
          <Route path="/catalog/accessories" element={<Accessories />} />
          <Route path="/sale/special" element={<Special />} />
          {/* Auth pages */}
          <Route path="/login" element={<Login />} />
          {/* 404 Not Found route */}
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          {/* Features page */}
          <Route path="/features" element={<Features />} />
          {/* Marketplace page */}
          <Route path="/marketplace" element={<Marketplace />} />
          {/* Page about company */}
          <Route path="/company" element={<Company />} />
        </Routes>
      </main>
      {/* Footer always at the bottom */}
      <Footer />
    </div>
  )
}
