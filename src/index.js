document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const input = form.querySelector('input')
  const submit = document.querySelectorAll('form input')[1]
  const ul = document.getElementById('tasks')

  submit.addEventListener('click', function(e){
    e.preventDefault()
    const li = document.createElement('li')
    const btn = document.createElement('button')
    btn.innerText = 'X'
    li.innerHTML = `${input.value}`
    btn.setAttribute('data-description', `${input.value}`)
    li.appendChild(btn)
    ul.append(li)
    // console.log('1')

    btn.addEventListener('click', function(e) {
      e.preventDefault
      if (e.target.attributes[0].value == btn.attributes[0].value) {
        let li = e.target.parentElement
        ul.removeChild(li)
      }
    // console.log('1')
    })
  })


});
