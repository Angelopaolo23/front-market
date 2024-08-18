import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

import ArtworkGallery from "../components/product/ArtworkGallery.jsx";
import Pagination from "../components/common/Pagination.jsx";
import { getCategories } from "../services/artworksService.js";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [paginationData, setPaginationData] = useState([]);
  let { currentCategory, page } = useParams();
  const galleryRef = useRef(null);
  useEffect(() => {
    getCategories(currentCategory, page)
      .then((data) => {
        setCategory(data.products);
        setPaginationData(data.metadata);
        //scroll al inicio de ArtworkGallery cuando cambie la pagina
        if (galleryRef.current) {
          galleryRef.current.scrollIntoView({ behavior: "smooth" });
        }
      })
      .catch((error) =>
        console.error("Error al obtener las obras de esta categoria:", error)
      );
  }, [currentCategory, page]);

  const handlePageChange = () => {
    //funcion para hacer el scroll automatico a Pagination
    if (galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-100 pt-5 mt-4 mt-5">
      <ArtworkGallery ref={galleryRef} artworkData={category} />
      <Pagination
        data={paginationData}
        category={currentCategory}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
export default Category;
