import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5173/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllProducts = async (): Promise<any> => {
  const devMode = true;
  const endpoint = devMode ? "dummy.json" : "get-data";
  try {
    const response = await axiosInstance.get(endpoint);
    console.log("dara", response.data);

    return response.data;
  } catch (error) {
    throw new Error(
      error.response
        ? error.response.data.message
        : "An error occurred while fetching data"
    );
  }
};

export const getProductById = async (id: number): Promise<any> => {
  console.log(id);
  const devMode = true;
  const endpoint = devMode ? `dummy.json` : `get-product/${id}`;

  try {
    const response = await axiosInstance.get(endpoint);
    if (devMode) {
      const product = response?.data?.find((p) => p.id === Number(id));

      if (!product) throw new Error("Product not found");

      return product;
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
