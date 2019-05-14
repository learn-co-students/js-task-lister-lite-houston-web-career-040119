document.addEventListener("DOMContentLoaded", () => {

let list = document.querySelector("ul#tasks")
let button = document.querySelector("input[type=submit]")
let textField = document.getElementById("new-task-description")
button.addEventListener("click", function(e){
  e.preventDefault()
  let description = textField.value
  let myList= document.createElement("li")
  myList.innerText = description
  list.appendChild(myList)
  console.log(`${description}`)

  textField.value = ""

});







});
