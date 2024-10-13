import createAxiosInstance from "../axiosConfig";
const apiWithAuth = createAxiosInstance(true);

export const createCartUtils = (context) => {
  const { setReloadData, loggedUser, cartInfo } = context;

  const sustractFunction = async (product_id) => {
    try {
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
  const createOrder = async () => {
    try {
      if (!cartInfo || !Array.isArray(cartInfo) || cartInfo.length === 0) {
        throw new Error("El carrito está vacío o no es válido");
      }

      const body = {
        items: cartInfo.map((item) => ({
          product_id: item.product_id,
          quantity: item.quantity,
          price: item.price,
        })),
      };

      const response = await apiWithAuth.post(
        `/orders/${loggedUser.user_id}`,
        body
      );

      setReloadData(true);

      return response.data;
    } catch (error) {
      console.error("Error en petición POST al crear una Orden:", error);
      throw error;
    }
  };

  return { sustractFunction, addFunction, removeProduct, createOrder };
};
