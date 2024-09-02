import React from "react";
import { formatCLP } from "../../utils/commonUtils";

const Summary = () => {
  return (
    <div className="md:w-1/3 mt-6 md:mt-0">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl mb-4">Resumen de tu compra</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCLP(647162)}</span>
          </div>
          <div className="flex justify-between">
            <span>Entrega</span>
            <span>{formatCLP(25000)}</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
          <span>Total</span>
          <span>{formatCLP(283865)}</span>
        </div>
      </div>

      <button className="w-full bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg mt-6 hover:bg-pink-700 transition-colors">
        Ir al checkout
      </button>
    </div>
  );
};

export default Summary;
