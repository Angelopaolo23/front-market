import React, { useState } from "react";
import { formatCLP } from "../../utils.js";
const Card = ({ url_image, title, price, artistName, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div
      className="relative w-full h-96 rounded-lg overflow-hidden group"
      onClick={onClick}
    >
      {/* Artwork Image */}
      <img src={url_image} alt={title} className="w-full h-full object-cover" />

      {/* Overlay with artwork info */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-white font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-300 text-sm mb-2">{artistName}</p>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold">{formatCLP(price)}</span>
          <button onClick={toggleLike} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill={isLiked ? "red" : "none"}
              viewBox="0 0 24 24"
              stroke={isLiked ? "red" : "white"}
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
