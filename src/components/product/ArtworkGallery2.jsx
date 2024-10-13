import React, { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import StandardCard from "./StandardCard";
import FavoriteCard from "./FavoriteCard";
import UserArtworksCard from "./userArtworksCard";

const ArtworkGallery = forwardRef(({ artworkData, type = "standard" }, ref) => {
  const navigate = useNavigate();

  const CardComponent =
    {
      standard: StandardCard,
      favorite: FavoriteCard,
      userArtworks: UserArtworksCard,
    }[type] || StandardCard;

  const getOnClickHandler = (productId) => {
    if (type === "userArtworks") {
      return () => navigate(`/userConfigArtworks/${productId}`);
    }
    return () => navigate(`/artworks/${productId}`);
  };

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6"
    >
      {artworkData?.map((element, index) => {
        const commonProps = {
          key: index,
          url_image: element.url_image,
          title: element.title,
          artistName: element.artist,
          price: element.price,
          onClick: getOnClickHandler(element.product_id),
          product_id: element.product_id,
        };

        return <CardComponent {...commonProps} />;
      })}
    </div>
  );
});

export default ArtworkGallery;
