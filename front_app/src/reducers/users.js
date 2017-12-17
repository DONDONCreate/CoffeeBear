const users = (state = [], action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [
                ...state,
                {
                    id: action.id,
                    status: action.status,
                    text: action.text
                }
            ]
        case 'CHANGE_USER_STATUS':
            return state.map((user) => {
                if (user.id === action.id) {
                    return Object.assign({}, user, {
                        status: !user.status
                    })
                } else {
                    return Object.assign({}, user)
                }
            })
        case 'REMOVE_USERS':
            return state.filter(n => n.id !== action.id)
        default:
            return state
    }
}

export default users
