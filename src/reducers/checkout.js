var data = JSON.parse(localStorage.getItem('CHECKOUT'))
var initialState = data ? data : []

const checkout = (state = initialState, action) => {
    var { checkout, cart } = action
    switch (action.type) {
        case 'CHECKOUT':
            state.push({
                checkout,
                cart
            })
            localStorage.setItem('CHECKOUT', JSON.stringify(state))

        default: return state
    }
}


export default checkout