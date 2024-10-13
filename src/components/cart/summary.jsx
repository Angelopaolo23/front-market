import React, { useContext } from "react";
import { formatCLP } from "../../utils/commonUtils";
import MyContext from "../../my_context";
import { createCartUtils } from "../../utils/cartUtils";

const Summary = ({ cartPrice }) => {
  const context = useContext(MyContext);
  const { createOrder } = createCartUtils(context);
  const subTotal = cartPrice;
  const delivery = subTotal * 0.1;
  const totalPrice = subTotal + delivery;

  const handleCheckout = async () => {
    try {
      await createOrder();
      alert("Orden creada con éxito");
      // Aquí puedes redirigir al usuario si es necesario
    } catch (error) {
      alert("Error al crear la orden: " + error.message);
    }
  };

  return (
    <div className="md:w-1/3 mt-6 md:mt-0">
      <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-xl mb-4">Resumen de tu compra</h3>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>{formatCLP(subTotal)}</span>
          </div>
          <div className="flex justify-between">
            <span>Entrega</span>
            <span>{formatCLP(delivery)}</span>
          </div>
        </div>
        <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
          <span>Total</span>
          <span>{formatCLP(totalPrice)}</span>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        className="w-full bg-pink-600 text-white font-semibold py-3 px-4 rounded-lg mt-6 hover:bg-pink-700 transition-colors"
      >
        Ir al checkout
      </button>
    </div>
  );
};

export default Summary;
