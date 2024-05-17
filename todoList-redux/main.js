import { createStore } from 'redux'
import {
  addTodoAction, clearAllTodosAction, removeTodoAction, completeTodoAction, getAllTodosAction
} from "./src/Redux/todoList.js"
import reducer from "./src/Redux/todoList.js"

const $ = document
const inputElemTodo = $.getElementById("inputElemTodo")
const filterTodos = $.getElementById("filterTodos")
const addTodoBtn = $.getElementById("addTodoBtn")
const clearTodoBtn = $.getElementById("clearTodoBtn")
const containerMainTodos = $.getElementById("mainTodos")
const alert = $.getElementById('alert')

const store = createStore(reducer)

const addTodoHandler = () => {
  let inpElemVal = inputElemTodo.value
  if (inpElemVal.length) {
    store.dispatch(addTodoAction(inpElemVal))
    const todos = store.getState()
    console.log(todos);
    generateTodosInDom(todos)

    inputElemTodo.value = ''
    alert.classList.remove('text-danger')
    alert.classList.add('text-success')
    alert.innerHTML = 'Success'
  } else {
    alert.classList.remove('text-success')
    alert.classList.add('text-danger')
    alert.innerHTML = 'Error : Input Empty'
  }
}

const clearTodoListHandler = () => {
  store.dispatch(clearAllTodosAction())
  containerMainTodos.innerHTML = ''
}

const generateTodosInDom = todos => {
  containerMainTodos.innerHTML = ''
  todos.forEach(todo => {
    containerMainTodos.insertAdjacentHTML('beforeend', `
      <section class='card card-body bg-transparent border-success parent-todo mt-2'>
        <div class='d-flex flex-row-reverse align-items-center justify-content-between'>
          <div class='btn-group'>
            <i class="btn btn-outline-success" onclick=isCompltedTodoHandler(${todo.id})>Complete</i>
            <i class="btn btn-outline-danger" onclick=removeTodoHandler(${todo.id})>Delete</i>
          </div>
          <p class='card-title todo-title-user h5 mb-0 bg-dark py-2 px-3 me-3 rounded overflow-auto fst-italic  ${todo.completed ? 'lineOver' : ''}'>${todo.text}
          </p>
        </div>
      </section>
    `)
  })
}

const isCompltedTodoHandler = ID => {
  store.dispatch(completeTodoAction(ID))
  generateTodosInDom(store.getState())
}

const removeTodoHandler = ID => {
  store.dispatch(removeTodoAction(ID))
  generateTodosInDom(store.getState())
}

const filterTodosHandler = e => {
  let selectOptionVal = e.target.value
  store.dispatch(getAllTodosAction())
  let newState = store.getState()
  if (selectOptionVal === 'all') generateTodosInDom(newState)
  else if (selectOptionVal === 'complete') generateTodosInDom(newState.filter(todo => todo.completed))
  else if (selectOptionVal === 'incomplete') generateTodosInDom(newState.filter(todo => !todo.completed))
}

window.isCompltedTodoHandler = isCompltedTodoHandler
window.removeTodoHandler = removeTodoHandler
addTodoBtn.addEventListener('click', addTodoHandler)
clearTodoBtn.addEventListener('click', clearTodoListHandler)
clearTodoBtn.addEventListener('click', clearTodoListHandler)
filterTodos.addEventListener('change', e => filterTodosHandler(e))