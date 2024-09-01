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
  const quotesByCategory = [
    {
      category: "Fotografías",
      artist: "Diane Arbus",
      quote:
        "Una fotografía es un secreto sobre un secreto. Cuanto más te dice, menos sabes.",
    },
    {
      category: "Pinturas",
      artist: "David Hockney",
      quote:
        "Pintar es una forma de ver. Siempre estás buscando algo para mirar, para ver lo que nunca has visto antes.",
    },
    {
      category: "Ilustraciones",
      artist: "Shaun Tan",
      quote: "Una ilustración es la chispa que enciende la imaginación.",
    },
    {
      category: "Collages",
      artist: "Hannah Höch",
      quote:
        "El collage es una poesía visual, donde los fragmentos se unen para contar nuevas historias.",
    },
  ];
  const currentQuote = quotesByCategory.find(
    (q) => q.category.toLowerCase() === currentCategory.toLowerCase()
  );
  return (
    <div className="w-100">
      <div className="max-w-4xl mx-auto text-center py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {currentQuote ? currentQuote.category : currentCategory}
        </h1>
        {currentQuote && (
          <>
            <p className="text-lg sm:text-xl text-gray-600 italic mb-2">
              "{currentQuote.quote}"
            </p>
            <p className="text-md text-gray-500">- {currentQuote.artist}</p>
          </>
        )}
      </div>
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
