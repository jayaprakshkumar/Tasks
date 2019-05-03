
export const stateLogin = (user) => {
    return {
        type: 'AUTH_USER_LOGIN',
        user: user
    };
};
 
export const stateLogout = () => {
    return {
        type: 'AUTH_USER_LOGOUT',
        user:null
    };
};
