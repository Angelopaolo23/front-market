import createAxiosInstance from "../axiosConfig";
const apiWithAuth = createAxiosInstance(true);

export const createCartUtils = (context) => {
  const { setReloadData, allArtworks, loggedUser } = context;

  const sustractFunction = async (product_id) => {
    try {
      /*const selectedProduct = allArtworks.filter(
        (e) => e.product_id === Number(id)
      );*/
      const body = {
        user_id: loggedUser.user_id,
        product_id: product_id,
      };
      await apiWithAuth.put("/cart/sustract", body);

      setReloadData(true);
    } catch (error) {
      console.error("Error en petición PUT:", error);
      throw error;
    }
  };

  const addFunction = async (product_id, product_price, counter = null) => {
    try {
      const body = {
        user_id: loggedUser.user_id,
        product_id: product_id,
        price: product_price,
        quantity: counter !== null ? counter : undefined,
      };
      await apiWithAuth.post("/cart", body);

      setReloadData(true);
    } catch (error) {
      console.error("Error en petición POST:", error);
      throw error;
    }
  };
  const removeProduct = async (product_id) => {
    try {
      await apiWithAuth.delete("/cart", {
        data: {
          user_id: loggedUser.user_id,
          product_id: product_id,
        },
      });

      setReloadData(true);
    } catch (error) {
      console.error("Error en petición DELETE:", error);
      throw error;
    }
  };

  return { sustractFunction, addFunction, removeProduct };
};
