import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';
import './Product.css';

const ProductItem = ({product, onAddToCartClicked}) => (
    <li className="product-list__item">
        <div className="product thumbnail">
            <div className="caption">
                <Product
                title={product.title}
                price={product.price}/>
            <button
            className='btn btn-primary'
                onClick={onAddToCartClicked}
                >
             Add to cart
            </button>
            </div>
        </div>
    </li>
)


ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
