export const actAddToCart = (product, quantity) => {
    return {
        type: 'ADD_TO_CART',
        product: product,
        quantity
    }
}

export const actUpdateCart = (product, quantity) => {
    return {
        type: 'UPDATE_CART',
        product: product,
        quantity
    }
}

export const actDeleteCart = (product) => {
    return {
        type: 'DELETE_CART',
        product: product
    }
}

export const actSortByName = (sort) => {
    return {
        type: 'SORT_BY_NAME_PRODUCT',
        sort: sort,
    }
}

export const actSortByPrice = (sort) => {
    return {
        type: 'SORT_BY_PRICE_PRODUCT',
        sort: sort,
    }
}

export const actRegister = (user) => {
    return {
        type: 'ACTIONS_REGISTER',
        user: user,
    }
}

export const actUserLogin = (user) => {
    return {
        type: "USER_LOGIN",
        user: user,
    }
}

export const actLogout = (user) => {
    return {
        type: "LOGOUT",
        user: user,
    }
}

export const actCheckout = (checkout, cart) => {
    return {
        type: 'CHECKOUT',
        checkout: checkout,
        cart
    }
}

export const actPaymentDeleteCart = (cart) => {
    return {
        type: 'PAY_DELETE_CART',
        cart: cart
    }
}