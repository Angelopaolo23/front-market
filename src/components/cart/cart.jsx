import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "./Item";
import Summary from "./Summary";

const Cart = ({ cartInfo }) => {
  const navigate = useNavigate();

  const calculatingTotal = (cartInfo) => {
    if (!Array.isArray(cartInfo) || cartInfo.length === 0) {
      return 0;
    }
    return cartInfo.reduce((total, product) => {
      return total + (product.price || 0) * (product.quantity || 0);
    }, 0);
  };
  const totalPrice = useMemo(() => calculatingTotal(cartInfo), [cartInfo]);

  console.log("Cart Info:", cartInfo);
  console.log("Total Price:", totalPrice);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Carrito de compras
            </h2>
            <button
              onClick={() => navigate("/")}
              className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
            >
              Seguir comprando
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="md:flex md:space-x-6">
            <div className="md:w-2/3">
              {Array.isArray(cartInfo) &&
                cartInfo
                  .filter((product) => product.quantity > 0)
                  .map((product, index) => (
                    <CartItem key={index} product={product} />
                  ))}
            </div>
            <Summary cartPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
