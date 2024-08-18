import React from "react";
import ShoppingCart from "../components/cart/cartItem.jsx";
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
const Cart = () => {
  const cartItems = [
    {
      id: "23625145",
      name: "Philipp Plein",
      description: "tenis Big Bang Runner",
      imageUrl: "/path/to/image.jpg",
      originalPrice: 647162,
      finalPrice: 258865,
      size: "40 IT",
      quantity: 1,
      tag: "Última pieza",
    },
    // ... más items
  ];

  const cartSummary = {
    subtotal: 647162,
    shipping: 25000,
    discount: 323581,
    promotion: 64716,
    total: 283865,
  };

  return <ShoppingCart items={cartItems} {...cartSummary} />;
};

export default Cart;
