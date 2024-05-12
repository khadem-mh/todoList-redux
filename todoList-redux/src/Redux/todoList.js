// Actions
export const addTodo = 'ADD_TODO'
export const clearAllTodos = 'CLEAR_ALL_TODOS'
export const removeTodo = 'REMOVE_TODO'
export const completeTodo = 'COMPLETE_TODO'

// Reducer

// Action Creators
const addTodoAction = () => {
    return {
        type: addTodo,
    }
}
const clearAllTodosAction = () => {
    return {
        type: clearAllTodos,
    }
}
const removeTodoAction = () => {
    return {
        type: removeTodo,
    }
}
const completeTodoAction = () => {
    return {
        type: completeTodo,
    }
}