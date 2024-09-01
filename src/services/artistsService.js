import createAxiosInstance from "../axiosConfig.js";
const api = createAxiosInstance(false);

export const getVerifiedArtists = async () => {
  try {
    const response = await api.get("/artist");
    return response.data;
  } catch (error) {
    console.error("Error al obtener los artistas verificados:", error);
    throw error;
  }
};
