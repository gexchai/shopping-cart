import React from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';

const ProductsList = ({title, children}) => (
  <div>
    <h3>{title}</h3>
    <ul className="product-list">{children}</ul>
  </div>
)

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
}

export default ProductsList
