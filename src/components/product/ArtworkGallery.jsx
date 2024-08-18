import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./Card.jsx";

const ArtworkGallery = forwardRef(({ artworkData }, ref) => {
  const navigate = useNavigate();
  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
    >
      {artworkData?.map((element, index) => (
        <Card
          key={index}
          url_image={element.url_image}
          title={element.title}
          artistName={element.artist}
          price={element.price}
          onClick={() => navigate(`/artworks/${element.product_id}`)}
        />
      ))}
    </div>
  );
});

export default ArtworkGallery;
