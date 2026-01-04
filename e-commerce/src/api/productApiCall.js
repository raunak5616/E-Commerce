import axios from "axios";
const BaseUrl = "https://api.escuelajs.co/api/v1";

export const ProductApiCall = async () => {
  const url = `${BaseUrl}/products`;
  try {
    const PorductData = await axios.get(url);
    return PorductData.data;
  } catch (err) {
    console.error("Error while fetching the product data", err);
  }
};
export const CategoriesApiCall = async () => {
  const url = `${BaseUrl}/categories`;
  try {
    const CategoriesData = await axios.get(url);
    return CategoriesData.data;
  } catch (err) {
    console.error("Error while fetching the product data", err);
  }
};
