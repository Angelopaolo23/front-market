import React, { useEffect, useContext } from "react";
import MyContext from "../my_context.js";
import Cart from "../components/cart/Cart.jsx";
import { getCart } from "../services/cartService.js";
const sustractFunction = async (id) => {
  try {
    const selectedProduct = artworks.filter((e) => e.product_id === Number(id));
    const body = {
      user_id: user.user_id,
      product_id: selectedProduct[0].product_id,
    };
    await axios.put(urlServer + "/cart/sustract", body);

    const artwork_index = artworks.findIndex(
      (element) => element.product_id === Number(id)
    );
    artworks[artwork_index].amount = artworks[artwork_index].amount - 1;
    setArtworks([...artworks]);
    setNavTotal(updatingNavTotal);

    setReloadData(true);
  } catch (error) {
    console.error("Error en petición PUT:", error);
    throw error;
  }
};
const addFunction = async (id, counter = null) => {
  try {
    const selectedProduct = artworks.filter((e) => e.product_id === Number(id));
    const body = {
      user_id: user.user_id,
      product_id: selectedProduct[0].product_id,
      price: selectedProduct[0].price,
      quantity: counter !== null ? counter : undefined,
    };
    await axios.post(urlServer + "/cart", body);

    const artwork_index = artworks.findIndex(
      (element) => element.product_id === Number(id)
    );

    if (counter === null) {
      artworks[artwork_index].amount = artworks[artwork_index].amount + 1;
    } else {
      artworks[artwork_index].amount = artworks[artwork_index].amount + counter;
    }

    setArtworks([...artworks]);
    setNavTotal(updatingNavTotal);

    setReloadData(true);
  } catch (error) {
    console.error("Error en petición POST:", error);
    throw error;
  }
};
export const ShoppingCart = () => {
  const { loggedUser, cartInfo, setCartInfo } = useContext(MyContext);
  console.log(loggedUser);
  console.log("AQUI DEBERIA ESTAR EL LOGGEDUSER");
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
      );
  }, []);

  return <Cart />;
};

export default ShoppingCart;
