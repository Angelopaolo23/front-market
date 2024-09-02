import React, { useState } from "react";
import { formatCLP } from "../../utils/commonUtils";

const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    console.log("AUMENTANDO LA CANTIDAD");
  };

  const decrementQuantity = () => {
    console.log("DISMINUYENDO LA CANTIDAD");
  };

  return (
    <div className="border-b border-gray-200 py-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="w-full sm:w-48 mb-4 sm:mb-0 sm:mr-4 flex justify-center sm:justify-start">
            <img
              src="https://images.unsplash.com/photo-1518204928-69aa89a61291?q=80&w=1586&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Quietud Invernal"
              className="w-48 h-48 object-cover rounded-md shadow-xl"
            />
          </div>
          <div className="w-full sm:flex-1">
            <h3 className="font-bold text-lg mb-2">Quietud Invernal</h3>
            <h4 className="text-md text-gray-600 my-2">Categoria</h4>
            <p className="text-sm text-gray-600 my-2">
              Paisaje nevado que captura la serenidad y belleza de un bosque en
              invierno.
            </p>
            <div className="flex items-center my-4">
              <span className="text-sm mr-2">Cantidad:</span>
              <div className="flex items-center">
                <button
                  onClick={decrementQuantity}
                  className="bg-gray-200 text-sm text-black font-semibold py-1 px-2 rounded-l-lg hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="bg-gray-100 text-sm text-black font-semibold py-1 px-4">
                  {quantity}
                </span>
                <button
                  onClick={incrementQuantity}
                  className="bg-gray-200 text-sm text-black font-semibold py-1 px-2 rounded-r-lg hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <p className="font-bold text-xl text-pink-600">
              {formatCLP(55000)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <button className="text-gray-400 hover:text-black transition-colors">
            ✕
          </button>
        </div>
      </div>
      <button className="flex items-center text-sm text-gray-600 hover:text-pink-600 mt-2 transition-colors">
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Mover a tus favoritos
      </button>
    </div>
  );
};

export default CartItem;
