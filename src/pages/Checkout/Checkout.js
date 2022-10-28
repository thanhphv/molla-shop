import React from 'react'
import './checkout.css'
import FormCheckout from './FormCheckout/FormCheckout'
import ProductCheckout from './ProductCheckout/ProductCheckout'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const cartList = useSelector(state => state.carts)
    return (
        <div className="checkout-wrapper">
            <div className="container">
                <div className="page-header">
                    <h1 className="page-title">Checkout</h1>
                </div>
                <div className="checkout">
                    <FormCheckout />
                    <ProductCheckout cartList={cartList} />
                </div>
            </div>
        </div>
    )
}

export default Checkout
