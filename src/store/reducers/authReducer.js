const initState = {
    authError: null
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            console.log('Success Login');
            return {
                ...state,
                authError: null
            }
        case "LOGIN_FAILURE":
            console.log('Failure Login');
            return {
                ...state,
                authError: 'Login failed'
            }
        case "SIGNOUT_SUCCESS":
            console.log('Signout Success');
            return state;
        case "SIGNOUT_FAILURE":
            console.log('Signout Failure');
            return state;
        case "SIGNUP_ERROR":
            console.log('Signup Failure', action.err.message);
            return {
                ...state,
                authError: action.err.message
            };
        case "SIGNUP_SUCCESS":
            console.log('Signup Success');
            return {
                ...state,
                authError: null
            };

        default: return state;
    }
}
export default authReducer;