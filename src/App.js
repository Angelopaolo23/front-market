import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyContext from "./my_context";

import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import { getArtworks } from "./services/artworksService.js";
import Artwork from "./views/Artwork.jsx";

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getArtworks()
      .then((data) => {
        const artworksWithAmount = data.map((artwork) => ({
          ...artwork,
          amount: 0,
        }));
        setArtworks([...artworksWithAmount]);
      })
      .catch((error) =>
        console.error("Error al obtener las obras de arte:", error)
      );
  }, []);
  const sharedState = { artworks, setArtworks };
  console.log(artworks);
  console.log("holito");
  return (
    <MyContext.Provider value={sharedState}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artwork/:id" element={<Artwork />} />
        </Routes>
      </BrowserRouter>
    </MyContext.Provider>
  );
}

export default App;
