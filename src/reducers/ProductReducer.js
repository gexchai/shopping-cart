import * as types from '../constants/ActionTypes';

const initialState = {}

const decreaseInventory = (product) => {
  return {
    ...product
  }
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_INVENTORY:
      return Object.assign({}, action.products)
    case types.ADD_TO_CART:
      const { productId } = action
      return {
        ...state,
        [productId]: decreaseInventory(state[productId])
      }
    default:
      return state
  }
}

export default productsReducer
