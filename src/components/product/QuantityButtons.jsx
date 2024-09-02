import React, { useState } from "react";
const QuantityButtons = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  return (
    <div className="flex items-center mb-4">
      <button
        onClick={decrementQuantity}
        className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-l-lg hover:bg-gray-300 transition-colors"
      >
        -
      </button>
      <span className="bg-gray-100 text-black font-semibold py-2 px-6">
        {quantity}
      </span>
      <button
        onClick={incrementQuantity}
        className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-r-lg hover:bg-gray-300 transition-colors"
      >
        +
      </button>
    </div>
  );
};

export default QuantityButtons;
