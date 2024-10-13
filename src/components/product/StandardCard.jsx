import React, { useContext } from "react";
import MyContext from "../../my_context";
import BaseCard from "../common/BaseCard";
import CardContent from "../common/CardContent";
import FavoriteButton from "./FavoriteButton";
const StandardCard = ({
  url_image,
  title,
  price,
  artistName,
  onClick,
  product_id,
}) => {
  const { isLoggedIn } = useContext(MyContext);

  return (
    <BaseCard url_image={url_image} title={title} onClick={onClick}>
      <CardContent title={title} artistName={artistName} price={price}>
        {isLoggedIn && <FavoriteButton productId={product_id} />}
      </CardContent>
    </BaseCard>
  );
};
export default StandardCard;
