import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import Review2 from '../component/Review2';

const ProductDescription = () => {
  const { id } = useParams();
  const { all_product } = useContext(ShopContext);
  const product = all_product ? all_product.find((item) => item.id === parseInt(id)) : null;

  const [selectedSize, setSelectedSize] = useState(1);
  const [selectedColor, setSelectedColor] = useState('');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className='mx-32 my-10'>
        <div className='mb-10'>
        <a href="/" className="flex items-center text-gray-500 hover:text-gray-700">
            <FaRegArrowAltCircleLeft className="mr-2" />
          </a>
        </div>
      <div className='flex gap-32 items-center'>
        <div className=" bg-gray-100 h-72 w-72 flex justify-center items-center">
          <img src={product.image} alt={product.name} className="" />
        </div>
        <div className=" w-96 text-left">
          <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
          <p>The square Versace flats is a cool and professional footwear for every female fashionista. It is perfect for showing your inner IT girl.</p>
          <div className="mt-3 flex gap-8 items-center">
            <label htmlFor="size" className="block text-sm font-semibold text-gray-700">Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="mt-1 block  pl-3 pr-10 py-2 text-base shadow bg-white border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              {[...Array(50).keys()].map((size) => (
                <option key={size + 1} value={size + 1}>
                  {size + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4 flex gap-8 items-center">
            <label className="block text-sm font-semibold text-gray-700">Color:</label>
            <div className="flex space-x-2 mt-2">
              {['Red', 'Black', 'Gray', 'Brown'].map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorChange(color)}
                  className={`w-6 h-6 rounded-full ${selectedColor === color ? 'ring-2 ring-offset-2 ring-indigo-500' : ''}`}
                  style={{ backgroundColor: color.toLowerCase() }}
                />
              ))}
            </div>
          </div>
          <p className="mt-2 font-semibold text-sm">Price: ${product.price}</p>
          <button className="mt-4 px-4 py-2 bg-purple-700 text-white rounded focus:outline-none hover:bg-purple-800">
            ADD TO CART
          </button>
        </div>
      </div>
      <Review2 />
    </div>
  );
};

export default ProductDescription;
