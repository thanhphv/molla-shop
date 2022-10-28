let initialState = {
    by: '',
    value: 1
}

const sortPrice = (state = initialState, action) => {
    switch (action.type) {
        case 'SORT_BY_PRICE_PRODUCT':
            return {
                by: action.sort.by,
                value: action.sort.value
            }

        default:
            return state
    }
}

export default sortPrice