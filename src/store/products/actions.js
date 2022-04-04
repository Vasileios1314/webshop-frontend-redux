import axios from "axios";
import { config } from "../../config";

const setProducts = (products) => ({
  type: "SET_PRODUCTS",
  payload: products,
});

export const fetchProducts = async (dispatch, getState) => {
  const setLoader = () => ({
    type: "START_LOADING",
  });
  dispatch(setLoader());

  const products = await axios.get(`${config.API_URL}/products`);
  dispatch(setProducts(products.data));
};

// const setProduct = (product) => ({
//   type: "SET_PRODUCT",
//   payload: product,
// });

export const fetchProductDetails = (id) => {
  return async function (dispatch, getState) {
    const setLoader = () => ({
      type: "START_LOADING",
    });
    dispatch(setLoader());

    const response = await axios.get(`${config.API_URL}/products/${id}`);
    // dispatch(setProduct(response.data));

    dispatch({
      type: "SET_PRODUCT",
      payload: response.data,
    });
  };
};
export const search = (id) => ({
  type: "SEARCH",
  payload: id,
});
