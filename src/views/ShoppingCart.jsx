import React, { useEffect, useContext } from "react";
import MyContext from "../my_context.js";
import Cart from "../components/cart/Cart.jsx";
import { getCart } from "../services/cartService.js";

export const ShoppingCart = () => {
  const { loggedUser, cartInfo, setCartInfo, reloadData, setReloadData } =
    useContext(MyContext);
  useEffect(() => {
    getCart(loggedUser.user_id)
      .then((data) => {
        const cart = data.map((product) => ({
          ...product,
        }));
        setCartInfo([...cart]);
      })
      .catch((error) =>
        console.error("Error al obtener informacion desde servidor.", error)
      )
      .finally(() => {
        setReloadData(false);
      });
  }, [reloadData]);

  return <Cart cartInfo={cartInfo} />;
};

export default ShoppingCart;
