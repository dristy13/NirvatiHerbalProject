import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";

export default function App() {
  // State Management
  const [currentPage, setCurrentPage] = useState("home");
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // ============= CART HANDLERS =============
  const handleAddToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);

    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    // Show toast notification (optional)
    console.log(`Added ${product.name} to cart`);
  };

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity === 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(
        cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // ============= ORDER HANDLERS =============
  const handlePlaceOrder = () => {
    // Reset cart and show success page
    setCartItems([]);
    setCurrentPage("success");
  };

  // ============= NAVIGATION HANDLERS =============
  const handleNavClick = (page) => {
    setCurrentPage(page);
    // Scroll to top
    window.scrollTo(0, 0);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setCurrentPage("details");
    window.scrollTo(0, 0);
  };

  // ============= PAGE ROUTING =============
  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavClick={handleNavClick} />;

      case "about":
        return <About onNavClick={handleNavClick} />;

      case "products":
        return (
          <Products
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
          />
        );

      case "details":
        return (
          <ProductDetails
            product={selectedProduct}
            onAddToCart={handleAddToCart}
            onBackClick={() => handleNavClick("products")}
          />
        );

      case "cart":
        return (
          <Cart
            cartItems={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onCheckout={() => handleNavClick("checkout")}
          />
        );

      case "checkout":
        return (
          <Checkout
            cartItems={cartItems}
            onPlaceOrder={handlePlaceOrder}
            onBackClick={() => handleNavClick("cart")}
          />
        );

      case "success":
        return <OrderSuccess onNavigate={handleNavClick} />;

      case "login":
        return (
          <Login
            onNavigate={(page) => {
              setIsLoggedIn(true);
              handleNavClick(page);
            }}
          />
        );

      case "register":
        return (
          <Register
            onNavigate={(page) => {
              setIsLoggedIn(true);
              handleNavClick(page);
            }}
          />
        );

      case "profile":
        return <Profile onNavigate={handleNavClick} />;

      case "orders":
        return <MyOrders />;

      default:
        return <Home onNavClick={handleNavClick} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navbar onNavClick={handleNavClick} cartCount={cartItems.length} />

      {/* Main Content */}
      <main className="flex-1">{renderPage()}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
