import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

const ArtworkGallery = forwardRef(({ artworkData, type = "standard" }, ref) => {
  const navigate = useNavigate();

  const handleRemoveArtwork = (artworkId) => {
    console.log(`Removiendo obra con ID: ${artworkId}`);
    // aqui debe ir la logica de remover una obra de un usuario, o pausarla
  };

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
          type={type}
          onClick={
            type === "standard"
              ? () => navigate(`/artworks/${element.product_id}`)
              : undefined //  aqui debe ir el navigate, desde la vista de usuario cuando quiere modificar la informacion de una obra
          }
          product_id={element.product_id}
          onRemove={
            type === "userArtworks"
              ? () => handleRemoveArtwork(element.product_id)
              : undefined
          }
        />
      ))}
    </div>
  );
});

export default ArtworkGallery;
