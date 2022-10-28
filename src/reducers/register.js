var listUser = [];
listUser = JSON.parse(localStorage.getItem('USER'));
var initialState = listUser ? listUser : [];

const register = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTIONS_REGISTER':
            state?.push(action.user);
            localStorage.setItem('USER', JSON.stringify(state));
        default: return state;
    }
}

export default register;