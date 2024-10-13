import React from "react";

const BaseCard = ({ url_image, title, onClick, children }) => {
  return (
    <div
      className="relative w-full h-96 rounded-lg overflow-hidden group"
      onClick={onClick}
    >
      <img src={url_image} alt={title} className="w-full h-full object-cover" />
      {children}
    </div>
  );
};

export default BaseCard;
