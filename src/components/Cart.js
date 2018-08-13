import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product'

const Cart = ({products, total}) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map( product =>
      <Product
        title={product.title}
        price={product.price}
        num={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <em>Please add some products to cart.</em>
  )

  return (
    <div>
      <h3> Your Cart </h3>
      <div className="cart">
                <div className="panel panel-default">
        <div>{nodes}</div>
        <div className="cart__total">Total: &#36;{total}</div>
        </div>
        </div>
    </div>
  )
}


Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string
}

export default Cart
