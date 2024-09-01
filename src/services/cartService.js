import createAxiosInstance from "../axiosConfig.js";
const apiWithAuth = createAxiosInstance(true);

export const getCart = async (id) => {
  try {
    const response = await apiWithAuth.get(`/cart/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener el carro de compras:", error);
    throw error;
  }
};
