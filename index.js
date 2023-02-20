const form = document.getElementById('todo-form')
const todoInput = document.getElementById('todo-input')
const todoList = document.getElementById('todo-list')
// const todos = JSON.stringify(localStorage.getItem('todos')) || []

// Adicionar tarefa
function addTask() {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    if (todoInput.value === '') {
      alert('Preencha o Campo de Adicionar Tarefa')
    } else {
      const newTodo = document.createElement('div')
      newTodo.className = 'todo'
      newTodo.id = 'todo'

      // h4 texto da tarefa
      const todoText = document.createElement('h4')
      todoText.classList.add('text-todo')
      todoText.innerText = todoInput.value
      newTodo.appendChild(todoText)


      // button finish
      const finishButton = document.createElement('button')
      const finishIcon = document.createElement('i')
      finishIcon.classList.add('fa-solid', 'fa-check')
      finishButton.appendChild(finishIcon)
      newTodo.appendChild(finishButton)


      // button edit
      const editButton = document.createElement('button')
      const editIcon = document.createElement('i')
      editIcon.classList.add('fa-solid', 'fa-pen')
      editButton.appendChild(editIcon)
      newTodo.appendChild(editButton)


      // button remove
      const removeButton = document.createElement('button')
      const removeIcon = document.createElement('i')
      removeIcon.classList.add('fa-solid', 'fa-xmark')
      removeButton.appendChild(removeIcon)
      newTodo.appendChild(removeButton)

      todoList.appendChild(newTodo)
      todoInput.value = ''
    }
  })
}

addTask()


function finish() {
  const finish = document.getElementById('finish-todo')
  const newTodo = document.getElementById('todo')


  finish.addEventListener('click', () => {

    if (newTodo.className === 'todo')
      newTodo.classList.add('done');
    else
      newTodo.classList.remove('done');
  })
}

finish()





