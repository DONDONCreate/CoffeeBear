const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [
        ...state,
          {
              id: action.id,
              status: 'employee',
              text: action.text
          }
      ]
    default:
      return state
  }
}

export default users
