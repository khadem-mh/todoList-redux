// Actions
export const addTodo = 'ADD_TODO'
export const getAllTodos = 'GET_ALL_TODOS'
export const clearAllTodos = 'CLEAR_ALL_TODOS'
export const removeTodo = 'REMOVE_TODO'
export const completeTodo = 'COMPLETE_TODO'

// Reducer
export default function reducer(state = [], action) {
    let stateArr = [...state]
    switch (action.type) {
        case addTodo: {
            let newTod = {
                id: stateArr.length + 1,
                text: action.text,
                completed: false
            }
            stateArr.push(newTod)
            return stateArr
        }
        case getAllTodos: return state
        case clearAllTodos: return []
        case removeTodo: return stateArr.filter(todo => todo.id !== +action.ID)
        case completeTodo: {
            stateArr.some(todo => {
                if (todo.id === Number(action.ID)) {
                    todo.completed = !todo.completed
                }
            })
            return stateArr
        }
        default: return state
    }
}

// Action Creators
export const addTodoAction = text => {
    return {
        type: addTodo,
        id: 0,
        text,
        completed: false
    }
}

export const getAllTodosAction = () => {
    return {
        type: getAllTodos,
    }
}

export const clearAllTodosAction = () => {
    return {
        type: clearAllTodos,
    }
}

export const removeTodoAction = ID => {
    return {
        type: removeTodo,
        ID
    }
}

export const completeTodoAction = ID => {
    return {
        type: completeTodo,
        ID
    }
}