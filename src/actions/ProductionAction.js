import * as types from '../constants/ActionTypes';

export const showInventory = () => {
  let products = {
    1: {"id": 1, "tag": "classic", "title": "Classic Ad", "price": 269.99, "inventory": 9999},
    2: {"id": 2, "tag":"standout", "title": "Standout Ad", "price": 322.99, "inventory": 9999},
    3: {"id": 3, "tag":"premium", "title": "Premium Ad", "price": 394.99, "inventory": 9999}
  }
  return {
    type: types.SHOW_INVENTORY,
    products
  }
}

export const addToCart = productId => {
  return ({
    type: types.ADD_TO_CART,
    productId
  })
}
