import createAxiosInstance from "../axiosConfig";
const apiWithAuth = createAxiosInstance(true);

export const createCartUtils = (context) => {
  const { setReloadData, allArtworks, loggedUser } = context;

  const sustractFunction = async (id) => {
    try {
      const selectedProduct = allArtworks.filter(
        (e) => e.product_id === Number(id)
      );
      const body = {
        user_id: loggedUser.user_id,
        product_id: selectedProduct[0].product_id,
      };
      await apiWithAuth.put("/cart/sustract", body);

      setReloadData(true);
    } catch (error) {
      console.error("Error en petición PUT:", error);
      throw error;
    }
  };

  const addFunction = async (id, counter = null) => {
    try {
      const selectedProduct = allArtworks.filter(
        (e) => e.product_id === Number(id)
      );
      const body = {
        user_id: loggedUser.user_id,
        product_id: selectedProduct[0].product_id,
        price: selectedProduct[0].price,
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
