document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let button = document.getElementById('submit')

  button.addEventListener('click',function(e){
    e.preventDefault()
    //get the task to be logged
    let taskItem = document.getElementById('new-task-description').value
    //get the priority of the task
    let priority = document.body.querySelector('select').value
    createTask(taskItem,priority)
  })

  let sort = document.getElementById('sort')

  sort.addEventListener('click',function(){
    let tasks = document.getElementsByTagName('li')
    let highPrioirty = getTasksByColor(tasks,"red")
    let mediumPriority = getTasksByColor(tasks,"yellow")
    let lowPriority = getTasksByColor(tasks,"green")
    deleteTasks(tasks)
    rebuildToDo(highPrioirty,mediumPriority,lowPriority)
  })

  function createTask(taskItem,priority){
    //create the list item to append to the list
    let task = document.createElement('li')
    //create the delete button
    let delete_button = document.createElement('button')
    delete_button.name = "Delete"
    delete_button.innerText = "Delete"
    delete_button.addEventListener('click',function(e){
      let content = e.target.parentElement
      content.remove()
    })
    //add attributes to the task item
    task.innerText = taskItem
    if (priority == "high") {task.style.color = "red"}
    if (priority == "medium") {task.style.color = "yellow"}
    if (priority == "low") {task.style.color = "green"}
    task.append(delete_button)
    let task_list = document.getElementById('tasks')
    task_list.append(task)
  }

  function getTasksByColor(array,color){
    let new_array = []
    for (var i=0,length=array.length;i<length;i++){
      if(array[i].style.color == color){new_array.push(array[i])}
    }
    return new_array
  }

  function deleteTasks(array){
    for (var i=array.length-1,length=array.length;i>=0;i--){
      array[i].remove()
    }
  }

  function rebuildToDo(arr1,arr2,arr3){
    for (var i=0,length=arr1.length;i<length;i++){
      createTask(arr1[i].innerText.replace('Delete',''),"high")
    }
    for (var i=0,length=arr2.length;i<length;i++){
      createTask(arr2[i].innerText.replace('Delete',''),"medium")
    }
    for (var i=0,length=arr3.length;i<length;i++){
      createTask(arr3[i].innerText.replace('Delete',''),"low")
    }
  }

});
