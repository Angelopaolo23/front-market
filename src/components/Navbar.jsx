import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      {/* Fila superior */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Logo</div>

        {/* Barra de búsqueda */}
        <div className="flex-grow mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full py-2 px-4 pr-10 rounded-full bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Carrito y menú de usuario */}
        <div className="flex items-center space-x-4">
          <FaShoppingCart className="text-2xl" />
          <div className="relative group">
            <FaUser className="text-2xl cursor-pointer" />
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Mi perfil
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Mis pedidos
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Cerrar sesión
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fila inferior - Categorías */}
      <div className="bg-gray-700">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center space-x-4">
          <a href="#" className="hover:text-blue-300">
            Categoría 1
          </a>
          <a href="#" className="hover:text-blue-300">
            Categoría 2
          </a>
          <a href="#" className="hover:text-blue-300">
            Categoría 3
          </a>
          <a href="#" className="hover:text-blue-300">
            Categoría 4
          </a>
          <a href="#" className="hover:text-blue-300">
            Categoría 5
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
