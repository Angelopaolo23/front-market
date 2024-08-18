import React from "react";
import { useContext } from "react";
import ArtworkGallery from "../components/product/ArtworkGallery.jsx";
import MyContext from "../my_context";
const Home = () => {
  const { allArtworks } = useContext(MyContext);
  return (
    <div className="w-100 pt-5 mt-4 mt-5">
      <ArtworkGallery artworkData={allArtworks} />
    </div>
  );
};
export default Home;
