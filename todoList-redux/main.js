import { createStore } from 'redux'
import {
    addTodoAction, clearAllTodosAction, removeTodoAction, completeTodoAction
} from "./src/Redux/todoList.js"

const $ = document
const inputElemTodo = $.getElementById("inputElemTodo")
const divElemMain = $.getElementById('mainTodos')
const addTodoBtn = $.getElementById("addTodoBtn")
const clearTodoBtn = $.getElementById("clearTodoBtn")
const alert = $.getElementById('alert')