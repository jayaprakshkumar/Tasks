const defaultState = {
    isAppLoading: true
};
 
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'APP_LOADING_DONE': 
            return Object.assign({}, state, { 
                isAppLoading: action.loading
            });
        default:
            return state;
    }
}