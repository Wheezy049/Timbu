import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import icon6 from './assest/icon6.png'
import { FaMinus, FaPlus } from "react-icons/fa";

function CartItem() {
  const { all_product, cartItem, removeAllItems, increment, decrement, removeFromCart } = useContext(ShopContext);
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    let newTotal = 0;
    all_product.forEach((item) => {
      const price = parseFloat(item.price); // Remove commas and parse as float
      newTotal += cartItem[item.id] * price;
    });
    setTotal(newTotal.toFixed(2));
  };

  const decrementQty = (itemId) => {
    decrement(itemId);
  };

  const incrementQty = (itemId) => {
    increment(itemId);
  };

  const deleteSingleCart = (itemId) =>{
    removeFromCart(itemId);
  }

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
    <div className="mx-32 my-20">
      <div className=" flex gap-5 text-left">
        <h3>Cart({totalUniqueItems})</h3>
        {!isCartEmpty && <p onClick={removeAllItems}>Remove all</p>}
      </div>
      <div className="flex gap-10">
      <div className="border-2 w-full p-10 rounded border-gray-100">
      {isCartEmpty ? (
        <p className="text-xl font-semibold justify-center items-center text-center ">
          Your cart is empty
        </p>
      ) : (
        Object.keys(cartItem).map((itemId) => {
          const quantity = cartItem[itemId];
          if (quantity > 0) {
            const product = all_product.find(
              (item) => item.id === Number(itemId)
            );
            return (
              <div className="" key={itemId}>
                <div className="bg-white p-7 border mb-10">
                <div className="flex gap-7 items-center">
                  <div className="">
                    <img src={product.image} alt={product.name} h-10 w-10 />
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-semibold">{product.name}</p>
                    <p className="mt-3 text-sm">The Steppers Boots is a cool and outgoing footwear perfect for going to social gatherings</p>
                    <div className="flex gap-2 items-center mt-3">
                    <button onClick={() => decrementQty(itemId)} className="border p-1"><FaMinus /></button>
                  <p className="border px-2 py-1 text-xs ">{quantity}</p>
                  <button onClick={() => incrementQty(itemId)} className="border font-light p-1"><FaPlus /></button>
                    </div>
                  </div>
                  <div className="text-left">
                     <p>${product.price}</p>
                  </div>
                </div>
                <div className=" flex justify-end">
                  <div className="bg-red-400  border rounded p-2 text-sm">
                  <button onClick={()=> deleteSingleCart(itemId)} className="flex gap-3 items-center"><img src={icon6} alt="" className="w-4 h-4"/> Delete</button>
                  </div>
                </div>
                </div>
              </div>
            );
          }
          return null;
        })
      )}
      </div>
      <div className="border-2 w-96 h-96 p-10 rounded border-gray-100">
      {!isCartEmpty && (
        <div className="cart-total" style={{ marginTop: "10px" }}>
          <p>Total</p>
          <p>${total}</p>
        </div>
      )}
      {!isCartEmpty && (
        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <button className="cart-item-btn">Checkout</button>
        </Link>
      )}
      </div>
      </div>
    </div>
  );
}

export default CartItem;
