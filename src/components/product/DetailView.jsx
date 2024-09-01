import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../my_context";
import { formatCLP } from "../../utils/commonUtils.js";

const DetailView = () => {
  const { allArtworks, usersInfo } = useContext(MyContext);
  const { id } = useParams();
  let selectedArtwork =
    allArtworks[allArtworks.findIndex((e) => e.product_id === Number(id))];
  let artistInfo =
    usersInfo[
      usersInfo.findIndex((e) => e.user_id === selectedArtwork?.seller_id)
    ];
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6">
      {/* Artwork Image */}
      <div className="md:w-2/3 mb-6 md:mb-0 md:mr-6">
        <img
          src={selectedArtwork?.url_image}
          alt={selectedArtwork?.title}
          className="w-full max-h-[500px] object-contain rounded-lg shadow-lg p-4"
        />
      </div>

      {/* Artwork Details */}
      <div className="md:w-1/3 flex flex-col">
        <button className="bg-pink-800 text-white font-semibold py-2 px-4 mt-4 rounded-lg hover:bg-pink-700 transition-colors mb-10 mt-2 w-1/4 inline-flex items-center justify-center text-sm">
          <svg
            className="w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <h1 className="text-3xl font-bold mb-2">{selectedArtwork?.title}</h1>
        <p className="text-gray-600 mb-2">{selectedArtwork?.artist}</p>
        <h2 className="text-xl font-bold mb-4 pb-4 border-b">
          {formatCLP(selectedArtwork?.price)}
        </h2>
        {/* Quantity Counter */}
        <p className="text-sm text-xl font-semibold mb-2">Cantidad:</p>
        <div className="flex items-center mb-4">
          <button
            onClick={decrementQuantity}
            className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-l-lg hover:bg-gray-300 transition-colors"
          >
            -
          </button>
          <span className="bg-gray-100 text-black font-semibold py-2 px-6">
            {quantity}
          </span>
          <button
            onClick={incrementQuantity}
            className="bg-gray-200 text-black font-semibold py-2 px-4 rounded-r-lg hover:bg-gray-300 transition-colors"
          >
            +
          </button>
        </div>
        <button className="bg-gray-200 text-black font-semibold py-4 px-4 rounded-lg hover:bg-gray-300 transition-colors mb-4 w-full">
          Añadir a tu carrito
        </button>
        <div className="mb-6">
          <h2 className="font-semibold mb-2">Descripción</h2>
          <p className="text-sm text-gray-600">
            {selectedArtwork?.description}
          </p>
        </div>
        <div className="border-t pt-4">
          <h2 className="font-semibold mb-2">Detalles</h2>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <p className="text-gray-600">Formato</p>
            <p>{selectedArtwork?.format}</p>
            <p className="text-gray-600">Materiales</p>
            <p>{selectedArtwork?.materials}</p>
            <p className="text-gray-600">Inspiración</p>
            <p>{selectedArtwork?.inspiration}</p>
            <p className="text-gray-600">Categorias</p>
            <p>{selectedArtwork?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
