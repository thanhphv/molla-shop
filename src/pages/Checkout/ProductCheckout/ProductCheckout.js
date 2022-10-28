import React from 'react'
import { useSelector } from 'react-redux'
import TotalCheckout from './TotalCheckout'

const ProductCheckout = (props) => {
    const carts = useSelector(state => state.carts)
    const { cartList } = props

    return (
        <div className="product-checkout">
            <div className="product-checkout-wrapper">
                <h3>Your Order</h3>
                <div className="product-checkout-title">
                    <span>Product</span>
                    <span>Total</span>
                </div>
                {cartList.map((item, index) => {
                    return (
                        <div className="product-checkout-item">
                            <span className="product-checkout-name">{item.product.name}</span>
                            <span className="product-checkout-price">${item.product.price}</span>
                        </div>
                    )
                })}
                <div className="product-checkout-shipping">
                    <span>Shipping</span>
                    <span>$10</span>
                </div>
                <TotalCheckout carts={carts} />
            </div>

        </div>
    )
}

export default ProductCheckout
