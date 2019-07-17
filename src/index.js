document.addEventListener("DOMContentLoaded", () => {
  // your code here
  
  
  let uls = document.querySelector("#tasks")
  

  
  let tasks = document.querySelector("#create-task-form")
  
  let value = tasks[0].value
  
  tasks[1].addEventListener("click",function(e){
      e.preventDefault()
        let lis = document.createElement("li")
        if(tasks[0].value){
        lis.textContent = tasks[0].value
        lis.id = tasks[0].value
        
        let button = document.createElement("button")
        button.textContent="x"
        button.id = tasks[0].value
        
        button.addEventListener("click",function(e){
            e.preventDefault()
            uls.removeChild(document.querySelector(`li#${button.id}`))
        })
        
        
        uls.appendChild(lis)
        
        let liFind = document.querySelectorAll('li')
        liFind[liFind.length-1].appendChild(button)
        
        
        
        
        
        
        
        tasks[0].value = ""
        
        
        
        
        
        
        
        
        }
  })
  
  
});
