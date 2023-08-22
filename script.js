window.onload = () => {

    let addBtn = document.getElementById("add-task-btn");
    let taskOutput = document.querySelector(".output-task-container")
    let taskList = []
    
    
    addBtn.addEventListener("click", () =>{
        //Adds task into list
        let userInput = document.querySelector("#task-input").value;
        taskList.push(userInput)
        let newTask = document.createElement("div"); 
        newTask.innerText = userInput
        newTask.classList = "task-item"
        

        let doneBtn = document.createElement("input");
        doneBtn.setAttribute('type', 'checkbox')
        doneBtn.setAttribute('id', 'done-btn')

        doneBtn.addEventListener("click", () =>{
            newTask.classList.toggle("task-completed")
        })

        if(newTask.classList.contains("task-completed")){
            newTask.style.backgroundColor = "red"
        }

        

        newTask.append(doneBtn)

       

        if(userInput == ""){
           alert("Please add a task.")
        }else{
            for (let i = 0; i < taskList.length; i++){
                taskOutput.append(newTask); 
                
                
            }
           
        }
        

        
    }







)}
