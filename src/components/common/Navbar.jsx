import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../my_context";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import logo from "../../arteviva_logo.png";

const navigation = [
  { name: "Inicio", href: "/", current: true },
  { name: "Noticias", href: "#", current: false },
  { name: "Eventos", href: "#", current: false },
  { name: "Favoritos", href: "#", current: false },
];
const categories = ["Fotografías", "Pinturas", "Ilustraciones", "Collages"];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = () => {
  const { isLoggedIn, loggedUser, setIsLoggedIn, setLoggedUser, cartInfo } =
    useContext(MyContext);
  let linkByCategory = (category) => `/artworks/${category}/1`;
  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoggedUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <>
      <Disclosure as="nav" className="bg-pink-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-pink-400 hover:bg-pink-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </DisclosureButton>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="h-8 w-auto"
                      src={logo}
                      alt="ArteViva Mercado"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-pink-900 text-white"
                              : "text-pink-300 hover:bg-pink-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  {!isLoggedIn ? (
                    <Link to="/login">
                      <button className="bg-black bg-opacity-20 text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200 ease-in-out">
                        <Link to="/login">Iniciar sesión</Link>
                      </button>
                    </Link>
                  ) : (
                    <div className="flex items-center">
                      <button
                        type="button"
                        className="mr-4 bg-black bg-opacity-20 text-white rounded-md p-2 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200 ease-in-out"
                      >
                        <span className="sr-only">Ver carrito</span>

                        <Link to="/cart">
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </Link>
                      </button>

                      <Menu as="div" className="relative">
                        <MenuButton className="flex rounded-full bg-black bg-opacity-20 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 hover:bg-opacity-30 transition duration-200 ease-in-out">
                          <span className="sr-only">Abrir menú de usuario</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src={loggedUser.photo}
                            alt=""
                          />
                        </MenuButton>
                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={() => console.log(typeof cartInfo)}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Perfil de {loggedUser.username}
                              </a>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Mis compras
                              </a>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Mis obras
                              </a>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Configuración
                              </a>
                            )}
                          </MenuItem>
                          <MenuItem>
                            {({ active }) => (
                              <a
                                href="#"
                                onClick={handleLogout}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Cerrar sesión
                              </a>
                            )}
                          </MenuItem>
                        </MenuItems>
                      </Menu>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-pink-900 text-white"
                        : "text-pink-300 hover:bg-pink-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* Categories row */}
      <div className="bg-pink-900 shadow-md overflow-hidden">
        <div className="container mx-auto px-4 py-2 flex items-center justify-start overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 sm:space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                className="flex-shrink-0 px-3 py-2 rounded-md text-pink-300 hover:bg-pink-700 hover:text-white transition duration-150 ease-in-out text-sm font-medium whitespace-nowrap"
              >
                <Link to={linkByCategory(category)}>{category}</Link>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
