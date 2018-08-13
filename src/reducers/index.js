import { combineReducers } from 'redux'
import ProductsReducer from './ProductReducer';
import CartReducer from './CartReducer'

export default combineReducers({
  products: ProductsReducer,
  cart: CartReducer
});
