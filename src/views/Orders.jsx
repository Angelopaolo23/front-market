import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../my_context";
import { getOrders } from "../services/ordersService";
import CartItem from "../components/cart/Item";
const Orders = () => {
  const { loggedUser, orders, setOrders } = useContext(MyContext);
  const navigate = useNavigate();
  useEffect(() => {
    getOrders(loggedUser.user_id)
      .then((data) => {
        const allItemsWithDates = Object.entries(data).flatMap(
          ([orderId, orderData]) => {
            return orderData.items.map((item) => ({
              ...item,
              order_date: orderData.order_date,
              order_id: orderId,
            }));
          }
        );
        setOrders(allItemsWithDates);
      })
      .catch((error) =>
        console.error("Error al obtener informacion desde servidor.", error)
      )
      .finally(() => {
        //setReloadData(false);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-800">Mis compras</h2>
            <button
              onClick={() => navigate("/")}
              className="text-pink-600 hover:text-pink-800 font-medium transition-colors"
            >
              Seguir comprando
            </button>
          </div>
        </div>
        <div className="p-6">
          {Array.isArray(orders) &&
            orders
              .filter((product) => product.quantity > 0)
              .map((product, index) => (
                <CartItem key={index} product={product} type="order" />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
