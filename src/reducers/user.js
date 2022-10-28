var initialState = {
    email: '',
    password: '',
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                email: action.user.email,
                password: action.user.password,
            }
        case 'LOGOUT':
            return {
                email: action.user.email,
                password: action.user.password,
            }
        default:
            return state;
    }
}

export default user;