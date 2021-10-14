const SET_USER_DATA = 'SET_USER_DATA'


let InitialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export default AuthReducer
export const setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}})