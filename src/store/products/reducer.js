const initialState = {
  loading: false,
  allProducts: [],
  product: null,
};

export default function productsReducer(state = initialState, action) {
  console.log("two", action);
  switch (action.type) {
    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        loading: false,
        allProducts: action.payload,
      };
    case "SET_PRODUCT":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "SEARCH":
      return {
        ...state,
        id: action.payload,
      };

    default: {
      return state;
    }
  }
}
