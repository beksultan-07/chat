const initialState = {
    auth: false,
    userEmail: null,
    userFirebaseId: null,
    login: true,
    users: [
        {
            id: 0,
            name: 'bekas bakytov',
            phone: '+996 212 123 123',
            email: 'butsing@gmail.com'
        },
        {
            id: 1,
            name: 'Sanya Bktv',
            phone: '+996 212 123 123',
            email: 'asad@gmail.com'
        },
        {
            id: 2,
            name: 'aman bbbb',
            phone: '+996 212 123 123',
            email: 'aman@gmail.com'
        },
        {
            id: 3,
            name: 'bakyt shhhhh',
            phone: '+996 212 123 123',
            email: 'bakyt@gmail.com'
        },
    ],
    messages: [
        {id: 0, sms: 'hi', from: 'asad@gmail.com', to: 'butsing@gmail.com'},
        {id: 1, sms: 'sup', from: 'butsing@gmail.com', to: 'asad@gmail.com'},
        {id: 2, sms: 'how u doing', from: 'asad@gmail.com', to: 'butsing@gmail.com'},
        {id: 3, sms: 'im good', from: 'butsing@gmail.com', to: 'asad@gmail.com'}
    ]
}

const reducer  = (state = initialState, action) => {

    switch (action.type) {
        case 'changeAuth':
            return {...state, auth: action.value}
        case 'authBtn':
            return {...state, login: action.value}
        case 'userEmail':
            return {...state, userEmail: action.value}
        case 'messageSend':
            return {...state, messages: action.value}
        default:
            return state
    }
}

export default reducer;