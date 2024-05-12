// Actions
export const addTodo = 'ADD_TODO'
export const clearAllTodos = 'CLEAR_ALL_TODOS'
export const removeTodo = 'REMOVE_TODO'
export const completeTodo = 'COMPLETE_TODO'

// Reducer
export default function reducer(state = 0, action) {
    switch (action.type) {
        case increaseNumber: {
            return state + 1
        }
        case decreaseNumber: {
            return state - 1
        }
        case setZeroNumber: {
            return 0
        }
        case rotateCounterBox: {
            state = typeof state === 'number' ? false : state ? true : false
            return !state
        }
        default: return state
    }
}

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