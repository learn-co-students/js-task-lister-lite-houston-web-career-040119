document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.getElementById("tasks"); 
  const form = document.querySelector("form#create-task-form");
  const inputField = document.querySelector("input#new-task-description");
  const submitButton = form.querySelector("input[type=submit]");

  let count = 1;

  function addTask(description,color) {
    let task = document.createElement("li");
    task.innerText = description;
    tasks.appendChild(task);
    createButtonsAndColor(task,color);
  }

  function createButtonsAndColor(task,color) {
    let description = task.innerText;
    task.innerHTML = `<span style="color:${color}">${description}</span><button id='delete-task${count}'>X</button><button id='edit-task${count}'>edit</button>`;
    let deleteButton = task.querySelector(`button#delete-task${count}`);
    let editButton = task.querySelector(`button#edit-task${count}`);
    deleteButton.addEventListener("click", function(e) {
      e.preventDefault();
      e.target.parentElement.remove();
    });
    editButton.addEventListener("click", function(e) {
      e.preventDefault();
      let task_description = e.target.parentElement.querySelector("span").innerText;
      task_description = prompt("New task description",task_description);
      if (task_description != null) {
        e.target.parentElement.querySelector("span").innerText = task_description;
      }
    });
    count += 1;
  }


  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    if(inputField.value.trim() !== "") {
      addTask(inputField.value, form.querySelector("select").value);
    }
    inputField.value = "";
  });

});
