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
            return state.map((user, index) => {
                if (index === action.index) {
                    return Object.assign({}, user, {
                        status: !user.status
                    })
                } else {
                    return Object.assign({}, user)
                }
            })
        default:
            return state
    }
}

export default users
