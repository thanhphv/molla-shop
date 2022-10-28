import React from 'react'
import { Link } from 'react-router-dom'

const CartTotal = (props) => {
    const { carts } = props;
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
        <div className="summary">
            <h3 className="summary-title">Cart Total</h3>
            <div className="summary-subtotal">
                <span>Subtotal:</span>
                <span>${carts.length === 0 ? 0 : totalCart(carts)}</span>
            </div>
            <div className="summary-shipping">
                <span>Shipping:</span>
                <div className="custom-shipping">
                    <div className="btn-shipping">
                        <input type="radio" id="standard" value="standard" />
                        <label for="standard">Standard</label>
                    </div>
                    <span>$10</span>
                </div>
            </div>
            <div className="summary-total">
                <div className="total">
                    <span>Total:</span>
                    <span>${carts.length === 0 ? 0 : totalCart(carts) + 10}</span>
                </div>
                <Link to="/checkout">
                    <button className="product-btn">
                        <span>PROCEED TO CHECKOUT</span>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default CartTotal
