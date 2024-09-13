import React, { useContext } from "react";
import { formatCLP } from "../../utils/commonUtils.js";
import MyContext from "../../my_context.js";
import FavoriteButton from "./FavoriteButton.jsx";

const Card = ({
  url_image,
  title,
  price,
  artistName,
  onClick,
  onRemove,
  type = "standard",
  product_id,
}) => {
  const { isLoggedIn } = useContext(MyContext);

  const handleRemove = (e) => {
    e.stopPropagation();
    onRemove();
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg overflow-hidden group"
      onClick={onClick}
    >
      <img src={url_image} alt={title} className="w-full h-full object-cover" />

      {type === "userArtworks" && (
        <button
          onClick={handleRemove}
          className="absolute top-2 right-2 p-1 rounded-full bg-black bg-opacity-50 focus:outline-none transition-opacity opacity-0 group-hover:opacity-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-300 text-sm mb-2">{artistName}</p>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">{formatCLP(price)}</span>
          {(type === "standard" || type === "favorite") && isLoggedIn && (
            <FavoriteButton productId={product_id} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
