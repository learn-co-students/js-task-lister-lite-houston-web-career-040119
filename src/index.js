document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //remember to do inspect on the webpage and see the html structure for guidance
    let form = document.querySelector('#create-task-form')
      // creates variable form and equates is to the first thing that has an id = create-task-form
    let submitButton = form.querySelectorAll('input')[1]
    // creates submitButton object so that the method below can be used
    let input = document.querySelector('#new-task-description')
    //variable that holds the text input into the form
    let taskList = document.querySelector('#tasks')//# in argument means id
    //variable that holds the first tag with id =  tasks


    submitButton.addEventListener('click',function(e){
      let newLi =  document.createElement('li')
      // variable that holds a created <li> element
      newLi.innerText = `${input.value}`;
      //insert into <li> element the input value
      taskList.appendChild(newLi);
      //add to the list
      form.reset()
      //empty the input space in form
      e.preventDefault()
      // prevent everything from disappearing when refreshed

    })


   // let form = document.querySelector('#create-task-form')
   // let submitButton = form.querySelectorAll('input')[1]
   // let input = document.querySelector('#new-task-description')
   // let taskList = document.querySelector('#tasks')
   //
   // submitButton.addEventListener('click', function(e) {
   //   let newLi = document.createElement('li')
   //   newLi.innerText = `${input.value}`;
   //   taskList.appendChild(newLi);
   //   form.reset()
   //   e.preventDefault()
   //
   // })


});
