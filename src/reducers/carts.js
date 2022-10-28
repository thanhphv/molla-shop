var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : [];

var findProductToCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break
            }
        }
    }
    return index
}

const carts = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case 'ADD_TO_CART':
            index = findProductToCart(state, product);
            if (index !== -1) {
                state[index].quantity += 1;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify((state)));
            return [...state];

        case 'UPDATE_CART':
            index = findProductToCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('CART', JSON.stringify((state)));
            return [...state];

        case 'DELETE_CART':
            index = findProductToCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify((state)));
            return [...state]

        case 'PAY_DELETE_CART':
            state = action.cart
            localStorage.setItem('CART', JSON.stringify(state));
            return state

        default: return [...state]

    }
}

export default carts