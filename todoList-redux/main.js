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
const containerMainTodos = $.getElementById("mainTodos")
const alert = $.getElementById('alert')

const store = createStore(reducer)

const addTodoHandler = () => {
  let inpElemVal = inputElemTodo.value
  if (inpElemVal.length) {
    store.dispatch(addTodoAction(inpElemVal))

    containerMainTodos.insertAdjacentHTML('beforeend', `
        <section class='card card-body bg-transparent border-success parent-todo mt-2'>
          <div class='d-flex flex-row-reverse align-items-center justify-content-between'>
            <div class='btn-group' data-id="${store.getState().length}">
              <i class="btn btn-outline-success">Complete</i>
              <i class="btn btn-outline-danger">Delete</i>
            </div>
            <p class='card-title todo-title-user h5 mb-0 bg-dark py-2 px-3 me-3 rounded overflow-auto fst-italic'>${inpElemVal}
            </p>
          </div>
        </section>
    `)
    inputElemTodo.value = ''
    alert.classList.remove('text-danger')
    alert.classList.add('text-success')
    alert.innerHTML = 'Success'

    const arrTodos = document.querySelectorAll('.btn-outline-success')
    const btnRemoveTodos = document.querySelectorAll('.btn-outline-danger')

    //remove-todo
    btnRemoveTodos.forEach(todo => {
      todo.addEventListener('click', e => {
        store.dispatch(removeTodoAction(e.target.parentElement.dataset.id))
        e.target.parentElement.parentElement.parentElement.remove()
      })
    })

    //complete-todo
    arrTodos.forEach(todo => {
      todo.addEventListener('click', e => {
        store.dispatch(completeTodoAction(e.target.parentElement.dataset.id))
        if (e.target.parentElement.nextElementSibling.classList.contains('lineOver')) e.target.parentElement.nextElementSibling.classList.remove('lineOver')
        else e.target.parentElement.nextElementSibling.classList.add('lineOver')
      })
    })

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

addTodoBtn.addEventListener('click', addTodoHandler)
clearTodoBtn.addEventListener('click', clearTodoListHandler)
clearTodoBtn.addEventListener('click', clearTodoListHandler)