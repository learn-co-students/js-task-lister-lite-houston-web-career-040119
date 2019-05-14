document.addEventListener("DOMContentLoaded", () => {
  const tasks = document.getElementById("tasks"); 
  const form = document.querySelector("form#create-task-form");
  const inputField = document.querySelector("input#new-task-description");
  const submitButton = form.querySelector("input[type=submit]");
  const sortAscButton = document.querySelector("button#asc");
  const sortDescButton = document.querySelector("button#desc");

  let count = 1;

  let taskList = [];


  function addTask(description,color) {
    taskList.push({description:description,color:color,number:count});
    count += 1;
  }



  function sortTasks(multiplier) {
    taskList = taskList.sort( function(a,b) {
      let colors = {red:3, yellow:2, green:1};
      return multiplier*( colors[a.color] - colors[b.color] );
    });
  }

  function sortTasksAsc() {
    sortTasks(1);
  }

  function sortTasksDesc() {
    sortTasks(-1);
  }


  function removeTaskById(id) {
    let newTaskList = []
    for(let i = 0; i < taskList.length; i++) {
      if (taskList[i].number !== parseInt(id)) {
        newTaskList.push(taskList[i]);
      }
    }
    taskList = newTaskList;
  }

  function editTaskById(id,description) {
    for(let i=0; i < taskList.length; i++) {
      if (taskList[i].number === parseInt(id)) {
        taskList[i].description = description;
      }
    }
  }

  function renderList() {
    tasks.innerHTML = "";

    for(let i = 0; i < taskList.length; i++) {
      let task = document.createElement("li");
      tasks.appendChild(task);
      let description = taskList[i].description;
      let color = taskList[i].color;
      let number = taskList[i].number;
      task.id = number;

      let descriptionSpan = document.createElement("span");
      descriptionSpan.style.color = color;
      descriptionSpan.innerText = description;
      task.appendChild(descriptionSpan);

      let deleteButton = document.createElement("button");
      deleteButton.innerText = "X";
      task.appendChild(deleteButton);
      
      let editButton = document.createElement("button");
      editButton.innerText = "edit";
      task.appendChild(editButton);

      deleteButton.addEventListener("click", function(e) {
        e.preventDefault();
        removeTaskById(e.target.parentElement.id);
        renderList();
      });

      editButton.addEventListener("click", function(e) {
        e.preventDefault();
        let taskDescription = e.target.parentElement.querySelector("span").innerText;
        taskDescription = prompt("New task description",taskDescription);
        if (taskDescription != null) {
          editTaskById(e.target.parentElement.id,taskDescription);
          renderList();
        }
      });
    }
  }


  submitButton.addEventListener("click", function(e) {
    e.preventDefault();
    if(inputField.value.trim() !== "") {
      addTask(inputField.value, form.querySelector("select").value);
    }
    inputField.value = "";
    renderList(); 
  });

  sortAscButton.addEventListener("click",function(e) {
    e.preventDefault();
    sortTasksAsc();
    renderList();
  });

  sortDescButton.addEventListener("click",function(e) {
    e.preventDefault();
    sortTasksDesc();
    renderList();
  });
});
