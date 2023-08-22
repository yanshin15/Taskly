window.onload = () => {

    let addBtn = document.getElementById("add-task-btn");
    let taskOutput = document.querySelector(".output-task-container")
    let taskList = []
    
    
    addBtn.addEventListener("click", () =>{
        let userInput = document.querySelector("#task-input").value;
        taskList.push(userInput)
        let newTask = document.createElement("div");
        newTask.innerText = userInput
        newTask.classList = "task-item"
        for (let i = 0; i < taskList.length; i++){
            taskOutput.append(newTask); 
        }
    })







}
