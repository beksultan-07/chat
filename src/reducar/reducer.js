const initialState = {
    auth: false,
    userEmail: null,
    userFirebaseId: null,
    login: true,
}

const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'changeAuth':
            return {...state, auth: action.value}
        case 'headerBtn':
            return {...state, login: action.value}
        case 'userEmail':
            return {...state, userEmail: action.value}

        default:
            return state
    }
}

export default reducer;