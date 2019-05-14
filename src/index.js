document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let textField = document.querySelector('#new-task-description')
  let form = document.querySelector('#create-task-form')
  let button = document.querySelectorAll('#create-task-form input')[1]
  let todoList = document.querySelector('#list ul')
  button.addEventListener('click', function(e) {
    e.preventDefault()
    let newTodo = document.createElement('li')
    newTodo.innerText = `${textField.value}`
    let deleteButton = document.createElement('button')
    deleteButton.innerText = 'X'
    newTodo.append(deleteButton)
    deleteButton.addEventListener('click', function(e){
      e.preventDefault()
      for (const li of todoList.children) {
        if (li.children[0] == e.target) {
          todoList.removeChild(li)
        }
      }
    })
    form.reset()
    todoList.append(newTodo)
  })

});