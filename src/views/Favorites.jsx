import React, { useEffect, useContext } from "react";
import MyContext from "../my_context.js";
import ArtworkGallery from "../components/product/ArtworkGallery.jsx";
import { getFavorites } from "../services/favoritesService.js";

const Favorites = () => {
  const { loggedUser, reloadData, setReloadData, favorites, setFavorites } =
    useContext(MyContext);

  useEffect(() => {
    getFavorites(loggedUser.user_id)
      .then((data) => {
        setFavorites([...data]);
      })
      .catch((error) =>
        console.error("Error al obtener información desde servidor.", error)
      )
      .finally(() => {
        setReloadData(false);
      });
  }, [reloadData]);

  return (
    <div className="w-100">
      <div className="max-w-4xl mx-auto text-center py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Mis favs
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 italic mb-2">
          "Sin pasión, el arte es solo una técnica. Con ella, es una vida."
        </p>
        <p className="text-md text-gray-500">Twyla Tharp</p>
      </div>
      <ArtworkGallery artworkData={favorites} type="favorite" />
    </div>
  );
};

export default Favorites;
