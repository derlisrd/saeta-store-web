import { BASE } from "../base";

export const productosApiService = {
    lista: async () => {
    try {
      const response = await BASE.get("/productos");
      return response.data
    } catch (error) {
      console.error(error);
      throw error;
    }
    }
}

