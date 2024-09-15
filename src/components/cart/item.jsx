import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { formatCLP } from "../../utils/commonUtils";
import { createCartUtils } from "../../utils/cartUtils";
import MyContext from "../../my_context";

const CartItem = ({ product }) => {
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const { addFunction, sustractFunction, removeProduct } =
    createCartUtils(context);

  return (
    <div className="border-b border-gray-200 py-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex flex-col sm:flex-row items-start">
          <div className="w-full sm:w-48 mb-4 sm:mb-0 sm:mr-4 flex justify-center sm:justify-start">
            <img
              onClick={() => navigate(`/artworks/${product.product_id}`)}
              src={product.url_image}
              className="w-48 h-48 object-cover rounded-md shadow-xl"
            />
          </div>
          <div className="w-full sm:flex-1">
            <h3 className="font-bold text-lg mb-2">{product.title}</h3>
            <h4 className="text-md text-gray-600 my-2">Categoria</h4>
            <p className="text-sm text-gray-600 my-2">
              Paisaje nevado que captura la serenidad y belleza de un bosque en
              invierno.
            </p>
            <div className="flex items-center my-4">
              <span className="text-sm mr-2">Cantidad:</span>
              <div className="flex items-center">
                <button
                  onClick={() => sustractFunction(product.product_id)}
                  className="bg-gray-200 text-sm text-black font-semibold py-1 px-2 rounded-l-lg hover:bg-gray-300 transition-colors"
                >
                  -
                </button>
                <span className="bg-gray-100 text-sm text-black font-semibold py-1 px-4">
                  {product.quantity}
                </span>
                <button
                  onClick={() => addFunction(product.product_id, product.price)}
                  className="bg-gray-200 text-sm text-black font-semibold py-1 px-2 rounded-r-lg hover:bg-gray-300 transition-colors"
                >
                  +
                </button>
              </div>
            </div>
            <p className="font-bold text-xl text-pink-600">
              {formatCLP(product.quantity * product.price)}
            </p>
          </div>
        </div>
        <div className="text-right">
          <button
            onClick={() => removeProduct(product.product_id)}
            className="text-gray-400 hover:text-black transition-colors"
          >
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
