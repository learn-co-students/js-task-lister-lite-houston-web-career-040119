document.addEventListener("DOMContentLoaded", () => {
  // your code here


  let btn = document.querySelectorAll('input')[1]
  

  btn.addEventListener("click",function(e){
    e.preventDefault()
    let input = document.getElementById('new-task-description')
    let li = document.createElement('li')
    let ul = document.querySelector('ul')
    let button = document.createElement('button')
    button.innerText = "X"
    button.id = input.value
    li.id = input.value
    li.innerText = input.value
    li.append(button)
    ul.append(li)
    document.querySelector(`button#${input.value}`).addEventListener("click",function(e){
      e.preventDefault()
      ul.removeChild(document.querySelector(`li#${button.id}`))
    })
    input.value = ""
   
  })

});
