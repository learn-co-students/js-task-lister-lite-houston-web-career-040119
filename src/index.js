document.addEventListener("DOMContentLoaded", () => {
  // your code here\
  let form = document.querySelector('#create-task-form')
  let submitButton = form.querySelectorAll('input')[1]
  let input = document.querySelector('#new-task-description')
  let taskList = document.querySelector('#tasks')

  submitButton.addEventListener('click', function(e) {
    let newLi = document.createElement('li')
    newLi.innerText = `${input.value}`;
    taskList.appendChild(newLi);
    form.reset()
    e.preventDefault()

  })


});
