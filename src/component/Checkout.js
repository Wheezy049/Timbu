// import React, { useContext, useState, useEffect } from "react";
// import icon7 from "./assest/icon7.png";
// import icon8 from "./assest/icon8.png";
// import icon9 from "./assest/icon9.webp";
// import { Link } from "react-router-dom";
// import { ShopContext } from "../context/shopContext";

// function Checkout() {
//   const { data, cartItem } = useContext(ShopContext);
//   const [total, setTotal] = useState(0);

//   const [formValues, setFormValues] = useState({
//     paymentMethod: "",
//     cardNumber: "",
//     expirationDate: "",
//     cvv: "",
//     country: "",
//     billingAddress: "",
//   });

//   const [errors, setErrors] = useState({});

//   const calculateTotal = () => {
//     let newTotal = 0;
//     data.forEach((item) => {
//       const price = parseFloat(item.price);
//       newTotal += cartItem[item.id] * price;
//     });
//     setTotal(newTotal.toFixed(2));
//   };

//   useEffect(() => {
//     calculateTotal();
//   }, [cartItem]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({
//       ...formValues,
//       [name]: value,
//     });
//   };

//   const validate = () => {
//     const newErrors = {};
//     if (!formValues.paymentMethod) {
//       newErrors.paymentMethod = "Payment method is required";
//     }
//     if (!formValues.cardNumber || !/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(formValues.cardNumber)) {
//       newErrors.cardNumber = "Valid card number is required";
//     }
//     if (!formValues.expirationDate || !/^\d{2}\/\d{2}$/.test(formValues.expirationDate)) {
//       newErrors.expirationDate = "Valid expiration date is required";
//     }
//     if (!formValues.cvv || !/^\d{3}$/.test(formValues.cvv)) {
//       newErrors.cvv = "Valid CVV is required";
//     }
//     if (!formValues.country) {
//       newErrors.country = "Country is required";
//     }
//     if (!formValues.billingAddress) {
//       newErrors.billingAddress = "Billing address is required";
//     }
//     return newErrors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Proceed with payment
//       console.log("Payment Details:", formValues);
//     }
//   };

//   return (
//     <div className="mx-10 md:mx-16 lg:mx-32 my-10 md:my-20">
//       <h1 className="text-left text-xl font-semibold">Checkout</h1>
//       <div className="block lg:flex gap-10">
//         <div className="rounded border-2 border-gray-100 w-full p-5 lg:p-10">
//           <h1 className="text-left">Payment Details</h1>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <label className="text-sm flex mt-3 text-left text-gray-300">
//                 Payment method
//               </label>
//               <div className="flex gap-10 justify-between mt-2">
//                 <div
//                   className={`flex justify-between w-full border-2 rounded-md p-2 cursor-pointer ${
//                     formValues.paymentMethod === "Card" ? "border-blue-500" : "border-gray-100"
//                   }`}
//                   onClick={() => setFormValues({ ...formValues, paymentMethod: "Card" })}
//                 >
//                   <img src={icon7} alt="icon7" className="h-5 w-5" />
//                   <p>Card</p>
//                 </div>
//                 <div
//                   className={`flex justify-between w-full border-2 rounded-md p-2 cursor-pointer ${
//                     formValues.paymentMethod === "Paypal" ? "border-blue-500" : "border-gray-100"
//                   }`}
//                   onClick={() => setFormValues({ ...formValues, paymentMethod: "Paypal" })}
//                 >
//                   <img src={icon8} alt="icon8" className="h-5 w-5" />
//                   <p>Paypal</p>
//                 </div>
//               </div>
//               {errors.paymentMethod && <p className="text-red-500 text-sm">{errors.paymentMethod}</p>}
//               <div className="mt-2">
//                 <label className="text-sm flex mt-3 text-left text-gray-300">
//                   Card number
//                 </label>
//                 <div className="flex justify-between w-full border-2 rounded-md border-gray-100 p-2">
//                   <input
//                     type="text"
//                     name="cardNumber"
//                     value={formValues.cardNumber}
//                     onChange={handleInputChange}
//                     placeholder="1234 1234 1234 1234"
//                     className="border-none outline-none w-full"
//                   />
//                   <div className="border-2 border-gray-100 px-2">
//                     <img src={icon9} alt="icon9" className="h-10 w-10" />
//                   </div>
//                 </div>
//                 {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber}</p>}
//               </div>
//               <div className="block md:flex justify-between mt-2">
//                 <div className="w-full md:w-1/2 md:pr-2">
//                   <label className="text-sm flex mt-3 text-left text-gray-300">
//                     Expiration date
//                   </label>
//                   <div className="flex justify-between w-full border-2 rounded-md border-gray-100 p-2">
//                     <input
//                       type="text"
//                       name="expirationDate"
//                       value={formValues.expirationDate}
//                       onChange={handleInputChange}
//                       placeholder="MM/YY"
//                       className="border-none outline-none w-full"
//                     />
//                   </div>
//                   {errors.expirationDate && <p className="text-red-500 text-sm">{errors.expirationDate}</p>}
//                 </div>
//                 <div className="w-full md:w-1/2 md:pl-2">
//                   <label className="text-sm flex mt-3 text-left text-gray-300">
//                     CVV
//                   </label>
//                   <div className="flex justify-between w-full border-2 rounded-md border-gray-100 p-2">
//                     <input
//                       type="text"
//                       name="cvv"
//                       value={formValues.cvv}
//                       onChange={handleInputChange}
//                       placeholder="123"
//                       className="border-none outline-none w-full"
//                     />
//                   </div>
//                   {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <label className="text-sm flex mt-3 text-left text-gray-300">
//                   Country
//                 </label>
//                 <div className="flex justify-between w-full border-2 rounded-md border-gray-100 p-2">
//                   <select
//                     name="country"
//                     value={formValues.country}
//                     onChange={handleInputChange}
//                     className="w-full border-none outline-none"
//                     defaultValue=""
//                   >
//                     <option value="" disabled>
//                       Select your country
//                     </option>
//                     <option value="nigeria">Nigeria</option>
//                     <option value="usa">United States</option>
//                     <option value="canada">Canada</option>
//                     <option value="uk">United Kingdom</option>
//                     <option value="australia">Australia</option>
//                     <option value="germany">Germany</option>
//                   </select>
//                 </div>
//                 {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
//               </div>
//               <div className="mt-2">
//                 <label className="text-sm flex mt-3 text-left text-gray-300">
//                   Billing Address
//                 </label>
//                 <div className="flex justify-between w-full border-2 rounded-md border-gray-100 p-2">
//                   <input
//                     type="text"
//                     name="billingAddress"
//                     value={formValues.billingAddress}
//                     onChange={handleInputChange}
//                     placeholder="123, John Doe Street"
//                     className="border-none outline-none w-full"
//                   />
//                 </div>
//                 {errors.billingAddress && <p className="text-red-500 text-sm">{errors.billingAddress}</p>}
//               </div>
//             </div>
//             <button type="submit" className="bg-purple-700 hover:bg-purple-800 w-full cursor-pointer mt-7 rounded p-2 text-sm text-white">
//               Proceed Payment
//             </button>
//           </form>
//         </div>
//         <div className="border-2 w-full lg:w-96 h-full p-5 rounded border-gray-100 mt-5 lg:mt-0">
//           <h2 className="text-xl font-semibold text-left">Order Summary</h2>
//           {Object.keys(cartItem).map((itemId) => {
//             const quantity = cartItem[itemId];
//             if (quantity > 0) {
//               const product = data.find((item) => item.id === Number(itemId));
//               if (!product) {
//                 return null;
//               }
//               return (
//                 <div
//                   key={itemId}
//                   className="flex justify-between items-center mt-3"
//                 >
//                   <p className="text-sm">
//                     {quantity} x {product.name}
//                   </p>
//                   <p>${(quantity * parseFloat(product.price)).toFixed(2)}</p>
//                 </div>
//               );
//             }
//             return null;
//           })}
//           <hr className="text-gray-100 mt-5 mb-2" />
//           <div className="flex justify-between items-center mt-5">
//             <p className="font-semibold">Total</p>
//             <p>${total}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Checkout;
