import React from "react";
import BaseCard from "../common/BaseCard";
import CardContent from "../common/CardContent";
const UserArtworksCard = ({ url_image, title, price, artistName, onClick }) => {
  return (
    <BaseCard url_image={url_image} title={title} onClick={onClick}>
      <CardContent title={title} artistName={artistName} price={price} />
    </BaseCard>
  );
};
export default UserArtworksCard;
