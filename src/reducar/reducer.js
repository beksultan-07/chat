const initialState = {
    auth: false,
    userEmail: null,
    userFirebaseId: null,
    login: true,
    chatUserName: {
        email: '',
        name: ''
    }
}

const reducer  = (state = initialState, action) => {
    switch (action.type) {
        case 'changeAuth':
            return {...state, auth: action.value}
        case 'headerBtn':
            return {...state, login: action.value}
        case 'userEmail':
            return {...state, userEmail: action.value}
        case 'changeTUser':
            return {...state, chatUserName: action.value}

        default:
            return state
    }
}

export default reducer;