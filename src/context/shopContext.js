// import React, { createContext, useEffect, useState } from "react";
// import all_product from "../component/assest/AllProduct";


// export const ShopContext = createContext(null);


// const ShopContextProvider = (props) => {
//   const [product, setProduct] = useState([]);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchProductDetails = async () => {
//       const url = `/api/products/`;
//       const params = new URLSearchParams({
//         organization_id: "c569c6cec7a4417fbe55088fa5c20077",
//         Appid: "VBPENXNU8XPGMM0",
//         Apikey: "620e806b56cf4065b016f1365d1659cb20240713043720400979"
//       });
  
//       try {
//         const response = await fetch(`${url}?${params.toString()}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             'Appid': 'VBPENXNU8XPGMM0',
//             'Apikey': '620e806b56cf4065b016f1365d1659cb20240713043720400979'
//           }
//         });
  
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
  
//         const result = await response.json();
//         setProduct(result);
//       } catch (error) {
//         setError(error.message);
//       } 
//     };
  
//     fetchProductDetails();
//   }, []);

//   const getDefaultCart = () => {

//     let cart = {};
//     product.forEach((product) => {
//       cart[product.id] = 0;
//     });
//     return cart;
//   };
//   const [cartItem, setCartItem] = useState(getDefaultCart);

//   useEffect(() => {
//     const storedCart = localStorage.getItem("cart");
//     if (storedCart) {
//       setCartItem(JSON.parse(storedCart));
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItem));
//   }, [cartItem]);

//   const addToCart = (itemId) => {
//     setCartItem((prev) => {
//       if (prev[itemId] === 0) {
//         return { ...prev, [itemId]: 1 };
//       } else {
//         return prev;
//       }
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCartItem((prevItems) => ({
//       ...prevItems,
//       [itemId]: 0,
//     }));
//   };

//   const increment = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const decrement = (itemId) => {
//     setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const removeAllItems = () => {
//     setCartItem(getDefaultCart());
//   };

//   const contextValue = {
//     all_product,
//     addToCart,
//     cartItem,
//     removeAllItems,
//     increment,
//     decrement,
//     removeFromCart,
//   };
//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useEffect, useState } from "react";
// import all_product from "../component/assest/AllProduct";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [product, setProduct] = useState([]);
  const [cartItem, setCartItem] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      const url = `/api/products/`;
      const params = new URLSearchParams({
        organization_id: "c569c6cec7a4417fbe55088fa5c20077",
        Appid: "VBPENXNU8XPGMM0",
        Apikey: "620e806b56cf4065b016f1365d1659cb20240713043720400979"
      });

      try {
        const response = await fetch(`${url}?${params.toString()}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Appid': 'VBPENXNU8XPGMM0',
            'Apikey': '620e806b56cf4065b016f1365d1659cb20240713043720400979'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setProduct(result.items); // Assuming the response contains an 'items' array
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProductDetails();
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItem(JSON.parse(storedCart));
      } else {
        let initialCart = {};
        product.forEach((product) => {
          initialCart[product.id] = 0;
        });
        setCartItem(initialCart);
      }
    }
  }, [product]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
  }, [cartItem]);

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
    let clearedCart = {};
    product.forEach((product) => {
      clearedCart[product.id] = 0;
    });
    setCartItem(clearedCart);
  };

  const contextValue = {
    product,
    addToCart,
    cartItem,
    removeAllItems,
    increment,
    decrement,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

