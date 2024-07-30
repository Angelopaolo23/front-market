import React from "react";

const ImageContainer = ({ url_image, title, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={url_image}
        alt={title}
        className="w-full h-auto object-cover max-w-lg mx-auto"
        loading="lazy"
      />
    </div>
  );
};

export default ImageContainer;
