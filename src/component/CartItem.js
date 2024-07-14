import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import icon6 from "./assest/icon6.png";
import { FaMinus, FaPlus } from "react-icons/fa";

function CartItem() {
  const [product, setProduct] = useState([]);
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

  const {
    cartItem,
    removeAllItems,
    increment,
    decrement,
    removeFromCart,
  } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let newTotal = 0;
    product.forEach((item) => {
      const price = parseFloat(item.current_price && item.current_price[0]?.NGN[0] || 0);
      newTotal += (cartItem[item.id] || 0) * price;
    });
    setTotal(newTotal.toFixed(2));
  };

  const decrementQty = (itemId) => {
    decrement(itemId);
  };

  const incrementQty = (itemId) => {
    increment(itemId);
  };

  const deleteSingleCart = (itemId) => {
    removeFromCart(itemId);
  };

  useEffect(() => {
    calculateTotal();
  }, [cartItem]);

  const isCartEmpty = Object.values(cartItem).every(
    (quantity) => quantity === 0
  );
  const totalUniqueItems = Object.keys(cartItem).filter(
    (itemId) => cartItem[itemId] > 0
  ).length;

  return (
    <div className="mx-4 md:mx-16 lg:mx-32 my-10 md:my-20">
      {error && <p className="text-red-500">{error}</p>}
      <div className="flex gap-5 text-left mb-4 md:mb-8">
        <h3>Cart({totalUniqueItems})</h3>
        {!isCartEmpty && (
          <p onClick={removeAllItems} className="cursor-pointer text-red-500">
            Remove all
          </p>
        )}
      </div>
      <div className="block lg:flex gap-10">
        <div className="border-2 w-full p-5 lg:p-10 rounded border-gray-100">
          {isCartEmpty ? (
            <p className="text-xl font-semibold justify-center items-center text-center ">
              Your cart is empty
            </p>
          ) : (
            Object.keys(cartItem).map((itemId) => {
              const quantity = cartItem[itemId];
              if (quantity > 0) {
                const item = product.find((productItem) => productItem.id === itemId);
                if (item) {  // Check if item exists
                  return (
                    <div className="" key={itemId}>
                      <div className="bg-white p-3 md:p-5 lg:p-7 border mb-5 md:mb-10">
                        <div className="flex md:flex-wrap gap-6 md:gap-10 items-center">
                          <div className="">
                            {item.photos && item.photos.length > 0 ? (
                              <img
                                src={item.photos[0].url}
                                alt={item.name}
                                className="object-contain h-20 w-20 md:h-40 md:w-40"
                              />
                            ) : (
                              <div className="object-contain h-20 w-20 md:h-40 md:w-40 bg-gray-200 flex justify-center items-center text-gray-400">
                                No Image
                              </div>
                            )}
                          </div>
                          <div className="text-left flex-1">
                            <p className="text-base md:text-xl font-semibold">
                              {item.name}
                            </p>
                            <p className="mt-3 text-xs md:text-sm">
                              {item.description}
                            </p>
                            <div className="flex justify-between items-center mt-3">
                              <div className="flex gap-2 items-center">
                                <button
                                  onClick={() => decrementQty(itemId)}
                                  className="border p-1"
                                >
                                  <FaMinus />
                                </button>
                                <p className="border px-2 py-1 text-xs">
                                  {quantity}
                                </p>
                                <button
                                  onClick={() => incrementQty(itemId)}
                                  className="border font-light p-1"
                                >
                                  <FaPlus />
                                </button>
                              </div>
                              <p className="block md:hidden">${item.current_price && item.current_price[0]?.NGN[0]}</p>
                            </div>
                          </div>
                          <div className="hidden md:block text-left">
                            <p>${item.current_price && item.current_price[0]?.NGN[0]}</p>
                          </div>
                        </div>
                        <div className="flex justify-center md:justify-end mt-4">
                          <div className="bg-red-500 hover:bg-red-600 ml-4 md:ml-0 border rounded p-2 text-sm">
                            <button
                              onClick={() => deleteSingleCart(itemId)}
                              className="flex gap-3 items-center"
                            >
                              <img src={icon6} alt="" className="w-4 h-4" />{" "}
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              }
              return null;
            })
          )}
        </div>
        <div className="border-2 w-full lg:w-96 h-full p-5 rounded border-gray-100 mt-5 lg:mt-0">
          <h2 className="text-xl font-semibold text-left">Order Summary</h2>
          {!isCartEmpty && (
            <div>
              {Object.keys(cartItem).map((itemId) => {
                const quantity = cartItem[itemId];
                if (quantity > 0) {
                  const item = product.find((productItem) => productItem.id === itemId);
                  if (item) {  // Check if item exists
                    return (
                      <div
                        key={itemId}
                        className="flex justify-between items-center mt-3"
                      >
                        <p className="text-xs">
                          {quantity} x {item.name.slice(0, 14)}
                        </p>
                        <p>
                          ${(quantity * parseFloat(item.current_price && item.current_price[0]?.NGN[0])).toFixed(2)}
                        </p>
                      </div>
                    );
                  }
                }
                return null;
              })}
              <hr className="text-gray-100 mt-5 mb-2" />
              <div className="flex justify-between items-center mt-5">
                <p className="font-semibold">Total</p>
                <p>${total}</p>
              </div>
              <Link to="/checkout">
                <button className="bg-purple-700 hover:bg-purple-800 w-full cursor-pointer mt-5 rounded p-2 text-sm text-white">
                  Proceed To Checkout
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartItem;
