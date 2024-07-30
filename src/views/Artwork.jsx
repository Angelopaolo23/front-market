import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../my_context";
import ImageContainer from "../components/ImageContainer.jsx";

const Artwork = () => {
  const { artworks } = useContext(MyContext);
  const { id } = useParams();
  let selectedArtwork =
    artworks[
      artworks.findIndex((element) => element.product_id === Number(id))
    ];
  console.log("SOY EL VISTA DETALLE");
  console.log(selectedArtwork?.url_image);
  return (
    <div className="container mx-auto my-4 p-4 md:flex rounded shadow-xl">
      <div className="relative overflow-hidden w-1/2 h-full mb-4">
        <img
          src={selectedArtwork?.url_image}
          alt={selectedArtwork?.title}
          className="w-full h-auto object-cover max-w-lg mx-auto"
          loading="lazy"
        />
      </div>

      <div className="w-1/2 px-6 bg-white">{selectedArtwork?.title}</div>
    </div>
  );
};

export default Artwork;
