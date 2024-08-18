import React, { useState } from "react";

const CartItem = ({ item, onRemove, onMoveToWishlist, onUpdateQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  const formatNumber = (number) => {
    return typeof number === "number" ? number.toLocaleString() : "0";
  };

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onUpdateQuantity(item.id, newQuantity);
    }
  };

  if (!item) return null;

  return (
    <div className="border-b border-gray-200 py-4 mb-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-bold text-lg">
            {item.name || "Producto sin nombre"}
          </h3>
          <p className="text-sm text-gray-600">{item.description || ""}</p>
          <p className="text-xs text-gray-500 mt-1">
            ID de FARFETCH: {item.id || "N/A"}
          </p>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="text-gray-400 hover:text-black transition-colors"
        >
          ✕
        </button>
      </div>
      <div className="flex mt-4">
        {item.imageUrl && (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-24 h-24 object-cover rounded-md mr-4"
          />
        )}
        <div className="flex-grow">
          {item.tag && (
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mb-2">
              {item.tag}
            </span>
          )}
          <p className="text-sm mb-1">
            Talla: <span className="font-semibold">{item.size || "N/A"}</span>
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline ml-2 transition-colors"
            >
              Cambiar
            </a>
          </p>
          <div className="flex items-center mt-2">
            <span className="text-sm mr-2">Cantidad:</span>
            <button
              onClick={decrementQuantity}
              className="text-gray-500 hover:text-black transition-colors focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="mx-2 text-sm font-semibold">{quantity}</span>
            <button
              onClick={incrementQuantity}
              className="text-gray-500 hover:text-black transition-colors focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-4 text-right">
        <p className="line-through text-gray-500">
          ${formatNumber(item.originalPrice)}
        </p>
        <p className="text-gray-600">
          -${formatNumber(item.discount1)} (50% en rebajas)
        </p>
        <p className="text-gray-600">
          -${formatNumber(item.discount2)} (-20% extra)
        </p>
        <p className="font-bold text-xl text-red-600">
          ${formatNumber(item.finalPrice)}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Impuestos aduaneros incluidos
        </p>
      </div>
      <button
        onClick={() => onMoveToWishlist(item.id)}
        className="flex items-center text-sm text-gray-600 hover:text-gray-800 mt-4 transition-colors"
      >
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
        Mover a la lista de deseos
      </button>
    </div>
  );
};

const ShoppingCart = ({
  items,
  subtotal,
  shipping,
  discount,
  promotion,
  total,
}) => {
  const onRemoveItem = (id) => {
    // Implementar lógica para remover item
    console.log(`Removing item with id: ${id}`);
  };

  const onMoveToWishlist = (id) => {
    // Implementar lógica para mover a lista de deseos
    console.log(`Moving item with id: ${id} to wishlist`);
  };

  const onUpdateQuantity = (id, newQuantity) => {
    // Implementar lógica para actualizar la cantidad
    console.log(`Updating quantity for item with id: ${id} to ${newQuantity}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">BOLSA DE COMPRAS</h2>
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition-colors"
        >
          Seguir comprando
        </a>
      </div>

      <div className="md:flex md:space-x-6">
        <div className="md:w-2/3">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={onRemoveItem}
              onMoveToWishlist={onMoveToWishlist}
              onUpdateQuantity={onUpdateQuantity}
            />
          ))}
        </div>

        <div className="md:w-1/3 mt-6 md:mt-0">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="font-bold text-lg mb-4">Resumen</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Entrega</span>
                <span>${shipping.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Rebajas</span>
                <span>-${discount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Promoción</span>
                <span>-${promotion.toLocaleString()}</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-200">
              <span>Total</span>
              <span>CLP ${total.toLocaleString()}</span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Impuestos aduaneros incluidos
            </p>
          </div>

          <button className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg mt-6 hover:bg-gray-800 transition-colors">
            Ir al checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
