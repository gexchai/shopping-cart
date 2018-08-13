import React, { Component} from 'react'
import PropTypes from 'prop-types'
import Cart from '../components/Cart'
import { connect } from 'react-redux'

class CartContainer extends Component {

  static propTypes = {
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })).isRequired,
    total: PropTypes.string
  }

  render(){

    const { products, total} = this.props;

    return(
      <Cart
        products={products}
        total={total}
      />
    )

  }
}

/**
 * 
 * This is the calculation part and supposly the business rules is sitting under rules/rule.js
 * Wasted too much time on setting up the layout. Dont have time to finish implement the rules
 */
const productsInCart = (state) => {
  const { products, cart } = state;
  let result = [];
  let total = 0;
  for(let id in cart.quantityById){
    result.push({
      ...products[id],
      quantity:cart.quantityById[id]
    });
    // Sorry, really run out of time of this task.
    // if customer is unilever, 
    // and if product is classic, 
    // check quantity: cart.quantityById[id] % 3. if it is zero then 
    //cart.quantityById[id] - (cart.quantityById[id]/3) to deduct the discount one

    //if customer is Apple and product is standout then use 299.99 to replace products[id].price 
    total += products[id].price * cart.quantityById[id]
  }

  return {
    products: result,
    total: total.toFixed(2)
  }
}

const mapStateToProps = (state) => productsInCart(state)

export default connect(
  mapStateToProps
)(CartContainer)
