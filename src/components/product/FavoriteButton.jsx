import React, { useContext } from "react";
import MyContext from "../../my_context";
import { addFavorite, removeFavorite } from "../../services/favoritesService";

const FavoriteButton = ({ productId }) => {
  const { loggedUser, favorites, setFavorites, setReloadData } =
    useContext(MyContext);

  const isLiked = favorites.some((fav) => fav.product_id === productId);

  const toggleLike = async (e) => {
    e.stopPropagation();
    try {
      if (isLiked) {
        await removeFavorite(loggedUser.user_id, productId);
        setFavorites(favorites.filter((fav) => fav.product_id !== productId));
      } else {
        await addFavorite(loggedUser.user_id, { product_id: productId });
        setFavorites([...favorites, { product_id: productId }]);
      }
      setReloadData(true);
    } catch (error) {
      console.error("Error al actualizar favoritos:", error);
    }
  };

  return (
    <button onClick={toggleLike} className="focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill={isLiked ? "white" : "none"}
        viewBox="0 0 24 24"
        stroke="white"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};

export default FavoriteButton;
