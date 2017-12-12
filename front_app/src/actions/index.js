let nextTodoId = 0
export const addUser = (text) => ({
    type: 'ADD_USER',
    id: nextTodoId++,
    status: 'Employee',
    text
})
