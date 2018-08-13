import React from 'react';
import PropTypes from 'prop-types';
import './Product.css';

const Product = ({price, num, title}) => (
    
    <div>
        <h3>{title}</h3>
        <div className="product__price">{price}</div>
    </div>
)

Product.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string
}

export default Product
