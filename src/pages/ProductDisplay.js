import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Review2 from "../component/Review2";

const ProductDescription = () => {
  const { id } = useParams();
  const { addToCart, data, error } = useContext(ShopContext);
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");

  // Find the specific product based on the id from params
  const product = data.find((item) => item.id === id);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product.id);
    }
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>No product found</div>;
  }

  const productImageUrl = product.photos && product.photos[0] ? product.photos[0].url : "";
  const productPrice = product.current_price && product.current_price[0] ? product.current_price[0].NGN[0] : "No price";

  return (
    <div className="mx-10 md:mx-20 lg:mx-32 my-10">
      <div className="mb-16">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          <FaRegArrowAltCircleLeft className="mr-2 w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row gap-8 md:gap-16 lg:gap-32 items-center">
        <div className="bg-gray-100 h-72 w-72 flex justify-center items-center md:block">
          {productImageUrl ? (
            <img
              src={`https://api.timbu.cloud/images/${productImageUrl}`}
              alt={product.name}
              className="w-60 h-60 lg:w-72 lg:h-72 object-cover"
            />
          ) : (
            <div>No image available</div>
          )}
        </div>
        <div className="w-full lg:w-96 text-left">
          <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
          <p>{product.description}</p>
          <div className="mt-3 flex gap-8 items-center">
            <label
              htmlFor="size"
              className="block text-sm font-semibold text-gray-700"
            >
              Size:
            </label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="mt-1 block pl-3 pr-7 py-2 text-base shadow bg-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {[...Array(50).keys()].map((size) => (
                <option key={size + 1} value={size + 1}>
                  {size + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex gap-8 items-center">
            <label className="block text-sm font-semibold text-gray-700">
              Color:
            </label>
            <div className="flex space-x-2 mt-2">
              {["Red", "Black", "Gray", "Brown"].map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`w-6 h-6 rounded-full ${
                    selectedColor === color
                      ? "ring-2 ring-offset-2 ring-indigo-500"
                      : ""
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>
          <p className="mt-2 font-semibold text-sm">
            <span className="mr-7">Price:</span> NGN {productPrice}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-4 px-4 py-2 flex gap-2 bg-purple-700 text-white rounded cursor-pointer focus:outline-none hover:bg-purple-800"
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <Review2 />
    </div>
  );
};

export default ProductDescription;
