document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('h1').style.color = "blue"
  document.querySelectorAll("input")[1].addEventListener("click", function(e){
    e.preventDefault();
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    var button = document.createElement("button")
    li.innerText = document.querySelector("input").value

    ul.appendChild(li);
    console.log("dose");
    document.querySelector("form").reset()
});

});
