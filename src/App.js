import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./my_context";

import { getArtworks } from "./services/artworksService.js";
import { getUsers } from "./services/usersService";

import Navbar from "./components/common/Navbar.jsx";
import Home from "./views/Home.jsx";
import Login from "./views/Login.jsx";
import Register from "./views/Register.jsx";
import ArtworkView from "./views/ArtworkView.jsx";
import Category from "./views/Categories.jsx";
import Cart from "./views/ShoppingCart.jsx";
import Favorites from "./views/Favorites.jsx";

const App = () => {
  const [allArtworks, setAllArtworks] = useState([]);
  const [usersInfo, setUsersInfo] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedUser, setLoggedUser] = useState({});
  const [cartInfo, setCartInfo] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [reloadData, setReloadData] = useState(false);

  useEffect(() => {
    getArtworks()
      .then((data) => {
        /*const artworksWithAmount = data.map((artwork) => ({
          ...artwork,
          amount: 0,
        }));
        setAllArtworks([...artworksWithAmount]);*/
        setAllArtworks([...data]);
      })
      .catch((error) =>
        console.error("Error al obtener las obras de arte:", error)
      );
    getUsers()
      .then((data) => {
        const usersWithFavorites = data.map((user) => ({
          user_id: user.user_id,
          username: user.username,
          email: user.email,
          favorites: [],
        }));
        setUsersInfo([...usersWithFavorites]);
      })
      .catch((error) => console.error("Error al obtener los usuarios:", error));
  }, []);

  const sharedState = {
    allArtworks,
    setAllArtworks,
    usersInfo,
    setUsersInfo,
    isLoggedIn,
    setIsLoggedIn,
    loggedUser,
    setLoggedUser,
    cartInfo,
    setCartInfo,
    favorites,
    setFavorites,
    reloadData,
    setReloadData,
  };
  return (
    <MyContext.Provider value={sharedState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/artworks/:id" element={<ArtworkView />} />
          <Route
            path="/artworks/:currentCategory/:page"
            element={<Category />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
};

export default App;
