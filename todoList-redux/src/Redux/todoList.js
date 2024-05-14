// Actions
export const addTodo = 'ADD_TODO'
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
        case clearAllTodos: {
            return []
        }
        case removeTodo: return stateArr.filter(todo => todo.id !== action.ID)
        case completeTodo: {
            let beforeTodos = state.filter(todo => todo.id < action.ID)
            let newTodo = state.filter(todo => todo.id == action.ID && (todo.completed ? (todo.completed = false) : (todo.completed = true)))
            let afterTodo = state.filter(todo => todo.id > action.ID)
            const changeState = [
                ...beforeTodos,
                ...newTodo,
                ...afterTodo
            ]
            console.log(changeState);
            return changeState
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
        ID,
        completed: true
    }
}