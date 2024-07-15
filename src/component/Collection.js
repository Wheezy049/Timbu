import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGreaterThan, FaLessThan } from "react-icons/fa"
import { ShopContext } from "../context/shopContext";

function Collection() {
  const {data, handleNextPage, handlePreviousPage, currentPage, totalPages} = useContext(ShopContext)
  return (
    <div id="collection" className="lg:mx-32 md:mx-20 mx-10 mt-10">
      <p className="bg-purple-300 text-md text-left p-2 text-black font-semibold">
        Featured Collections
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              <div className="bg-white shadow p-6 text-left text-sm font-semibold">
                <div className="flex justify-center m-auto items-center">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={`https://api.timbu.cloud/images/${item.photos[0]?.url}`}
                    alt={item.name}
                    className="h-40 w-40 cursor-pointer object-cover"
                  />
                </Link>
                </div>
                <p className="mt-4">{item.name}</p>
                <p>NGN {item.current_price[0].NGN[0]}</p>
              </div>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div className="flex justify-center gap-3 items-center mt-10">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}><FaLessThan /></button>
        <span> Page {currentPage} of {totalPages} </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <FaGreaterThan />
        </button>
      </div>
    </div>
  );
}

export default Collection;
