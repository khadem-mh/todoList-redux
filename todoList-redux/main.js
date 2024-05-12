import { createStore } from 'redux'
import {
    addTodoAction, clearAllTodosAction, removeTodoAction, completeTodoAction
} from "./src/Redux/todoList.js"
import reducer from "./src/Redux/todoList.js"

const $ = document
const inputElemTodo = $.getElementById("inputElemTodo")
const divElemMain = $.getElementById('mainTodos')
const addTodoBtn = $.getElementById("addTodoBtn")
const clearTodoBtn = $.getElementById("clearTodoBtn")
const containerMainTodos = $.getElementById("clearTodoBtn")
const alert = $.getElementById('alert')

const store = createStore(reducer)

const addTodoHandler = () => {
    store.dispatch(addTodoAction(inputElemTodo.target.value))
    
    containerMainTodos.insertAdjacentHTML('beforeend', `
        <section class='card card-body bg-transparent border-success mt-2'>
          <div class='d-flex flex-row-reverse align-items-center justify-content-between'>
            <div class='btn-group'>
              <i class="btn btn-outline-success">Complete</i>
              <i class="btn btn-outline-danger">Delete</i>
            </div>
            <p class='card-title text-light h5 mb-0 bg-dark py-2 px-3 me-3 rounded overflow-auto fst-italic'>${inputElemTodo.target.value}
            </p>
          </div>
        </section>
    `)
}

addTodoBtn.addEventListener('click', addTodoHandler)