// Actions
export const addTodo = 'ADD_TODO'
export const clearAllTodos = 'CLEAR_ALL_TODOS'
export const removeTodo = 'REMOVE_TODO'
export const completeTodo = 'COMPLETE_TODO'

// Reducer

// Action Creators
const addTodoAction = text => {
    return {
        type: addTodo,
        text,
        completed: false
    }
}
const clearAllTodosAction = () => {
    return {
        type: clearAllTodos,
    }
}
const removeTodoAction = ID => {
    return {
        type: removeTodo,
        ID
    }
}
const completeTodoAction = ID => {
    return {
        type: completeTodo,
        ID,
        completed: true
    }
}