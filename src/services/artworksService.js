import createAxiosInstance from "../axiosConfig.js";
const apiWithAuth = createAxiosInstance(true);
const apiWithouthAuth = createAxiosInstance(false);
export const getArtworks = async () => {
  try {
    const response = await apiWithouthAuth.get("/artworks");
    return response.data;
  } catch (error) {
    console.error("Error al obtener las obras de arte:", error);
    throw error;
  }
};
export const getCategories = async (currentCategory, page) => {
  try {
    const response = await apiWithouthAuth.get(
      `/artworks/${currentCategory}?page=${page}`
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener las obras de arte:", error);
    throw error;
  }
};

export const addArtwork = async (artwork) => {
  try {
    const response = await apiWithAuth.post("/artworks", artwork);
    return response.data;
  } catch (error) {
    console.error("Error al agregar el producto: ", error);
    throw error;
  }
};
