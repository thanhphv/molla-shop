import React from 'react'

const TotalCheckout = (props) => {
    const { carts } = props
    const totalCart = (carts) => {
        if (carts.length > 0) {
            var total = 0;
            for (let i = 0; i < carts.length; i++) {
                total += carts[i].product.price * carts[i].quantity;
            }
        }
        return total;
    }
    return (
        <div>
            <div className="product-checkout-total">
                <span>Total</span>
                <span>${carts.length === 0 ? 0 : totalCart(carts) + 10}</span>
            </div>
        </div>
    )
}

export default TotalCheckout
