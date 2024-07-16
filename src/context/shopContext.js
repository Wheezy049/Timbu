import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/products";
      const params = new URLSearchParams({
        organization_id: "c569c6cec7a4417fbe55088fa5c20077",
        reverse_sort: "false",
        page: currentPage,
        size: itemsPerPage,
        Appid: "VBPENXNU8XPGMM0",
        Apikey: "620e806b56cf4065b016f1365d1659cb20240713043720400979",
      });

      try {
        const response = await fetch(
          `${url}?${params.toString()}`,
          fetch(url, {
            method: "GET",
            headers: {
              Appid: "VBPENXNU8XPGMM0",
              Apikey: "620e806b56cf4065b016f1365d1659cb20240713043720400979",
            },
          })
        );
        console.log(response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result.items || []);
        if (result.total) {
          setTotalPages(Math.ceil(result.total / itemsPerPage));
        } else {
          setTotalPages(1);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [currentPage]);

  const getDefaultCart = () => {
    let cart = {};
    data.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItem, setCartItem] = useState(getDefaultCart);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // useEffect(() => {
  //   if (product.length > 0) {
  //     const storedCart = localStorage.getItem("cart");
  //     if (storedCart) {
  //       setCartItem(JSON.parse(storedCart));
  //     } else {
  //       let initialCart = {};
  //       product.forEach((product) => {
  //         initialCart[product.id] = 0;
  //       });
  //       setCartItem(initialCart);
  //     }
  //   }
  // }, [product]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItem));
  // }, [cartItem]);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItem((prevItems) => ({
      ...prevItems,
      [itemId]: 0,
    }));
  };

  const increment = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const decrement = (itemId) => {
    setCartItem((prev) => {
      const newCount = (prev[itemId] || 0) - 1;
      return { ...prev, [itemId]: newCount > 0 ? newCount : 0 };
    });
  };

  const removeAllItems = () => {
    // let clearedCart = {};
    // data.forEach((product) => {
    //   clearedCart[product.id] = 0;
    // });
    setCartItem(getDefaultCart());
  };

  const contextValue = {
    data,
    addToCart,
    cartItem,
    removeAllItems,
    increment,
    decrement,
    removeFromCart,
    handleNextPage,
    handlePreviousPage,
    currentPage,
    totalPages,
    error,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
