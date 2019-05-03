const defaultState = {
    isLoggedIn: false,
    user: null
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'AUTH_USER_LOGIN': 
            return Object.assign({}, state, { 
                isLoggedIn: true,
                user: action.user
            });
        case 'AUTH_USER_LOGOUT':
            return Object.assign({}, state, { 
                isLoggedIn: false,
                user: false
            });
        default:
            return state;
    }
}