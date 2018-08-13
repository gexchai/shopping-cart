import React from 'react'
import ProductsListContainer from './ProductsListContainer'
import CartContainer from './CartContainer'

const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h1>Gex interview test</h1>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <ProductsListContainer />
            </div>
            <div className="col-md-4">
                <CartContainer />
            </div>
        </div>
    </div>
)

export default App
