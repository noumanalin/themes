// src/Context/ShopContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { allProducts } from "../assets/data";

const ShopContext = createContext();

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
}

export function ShopProvider({ children }) {
  const [layoutView, setLayoutView] = useState("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating"); // default sort
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);

  const itemsPerPage = 6;

  // Filter products based on search query
  const filteredProducts = allProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const getPrice = (product) => parseFloat(product.salePrice || product.price);

    switch (sortBy) {
      case "price-low":
        return getPrice(a) - getPrice(b);
      case "price-high":
        return getPrice(b) - getPrice(a);
      case "rating":
      default:
        return parseFloat(b.rating) - parseFloat(a.rating);
    }
  });

  // Pagination
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + itemsPerPage);

  // Reset to first page on search/sort change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy]);

  // Cart Functions
  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, {
          id: `cart-${Date.now()}`,
          product,
          quantity,
        }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const cartSubtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.product.salePrice || item.product.price);
    return total + (price * item.quantity);
  }, 0);

  const cartTotal = cartSubtotal;
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const value = {
    layoutView,
    setLayoutView,
    products: allProducts,
    filteredProducts: sortedProducts,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    currentPage,
    setCurrentPage,
    itemsPerPage,
    totalPages,
    paginatedProducts,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    cartTotal,
    cartSubtotal,
    cartItemsCount,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
}
