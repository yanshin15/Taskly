window.onload = () => {

    let addBtn = document.getElementById("add-task-btn");
    let taskOutput = document.querySelector(".output-task-container")
    
    
    addBtn.addEventListener("click", () =>{
        let userInput = document.querySelector("#task-input").value;
        taskOutput.innerHTML = `<div>${userInput}</div>`
    })







}
