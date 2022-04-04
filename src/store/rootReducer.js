import { combineReducers } from "redux";
import productsReducer from "./products/reducer";

const reducer = combineReducers({
  products: productsReducer,
});
export default reducer;
