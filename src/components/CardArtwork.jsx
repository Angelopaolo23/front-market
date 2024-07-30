import React from "react";

const Card = ({ url_image, title, price, onClick }) => {
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
      onClick={onClick}
    >
      <div className="h-64 overflow-hidden">
        <img
          className="w-full h-full object-cover object-center"
          src={url_image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4 bg-white">
        <div className="font-bold text-xl mb-2 text-gray-800 truncate">
          {title}
        </div>
        <p className="text-gray-600 text-base font-semibold">
          {price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR",
          })}
        </p>
      </div>
    </div>
  );
};

export default Card;
