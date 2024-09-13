import createAxiosInstance from "../axiosConfig.js";
const apiWithAuth = createAxiosInstance(true);

export const getFavorites = async (user_id) => {
  try {
    const response = await apiWithAuth.get(`/favorites/${user_id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener las obras de arte:", error);
    throw error;
  }
};
export const addFavorite = async (user_id, artwork) => {
  try {
    const response = await apiWithAuth.post(`/favorites/${user_id}`, artwork);
    return response.data;
  } catch (error) {
    console.error("Error al agregar obra a favoritos: ", error);
    throw error;
  }
};
export const removeFavorite = async (user_id, product_id) => {
  try {
    const response = await apiWithAuth.delete(`/favorites/${user_id}`, {
      data: {
        product_id: product_id,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al quitar obra de favoritos: ", error);
    throw error;
  }
};
