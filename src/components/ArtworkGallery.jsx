import React from "react";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Card from "./CardArtwork.jsx";

import MyContext from "../my_context";
function ArtworkGallery() {
  const { artworks } = useContext(MyContext);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {artworks.map((element, index) => (
        <Card
          key={index}
          url_image={element.url_image}
          title={element.title}
          price={element.price}
          onClick={() => navigate(`/artwork/${element.product_id}`)}
        />
      ))}

      {/* Añade más tarjetas aquí */}
    </div>
  );
}

export default ArtworkGallery;
