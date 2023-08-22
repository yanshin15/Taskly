window.onload = () => {

    let addBtn = document.getElementById("add-task-btn");
    let taskOutput = document.querySelector(".output-task-container")
    let taskList = []
    
    
    addBtn.addEventListener("click", () =>{
        //Adds task into list
        let userInput = document.querySelector("#task-input").value;
        taskList.push(userInput)

        //Task Container
        let newTaskContainer = document.createElement("div"); 
        newTaskContainer.classList = "task-item-container"

        //New Task
        let newTask = document.createElement('div');
        newTask.innerText = userInput
        newTask.style.fontFamily = "cursive"
        newTask.style.fontSize = "1.2em"

        newTaskContainer.append(newTask)

        //Side Buttons
        let buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')
    
        let doneBtn = document.createElement("input");
        doneBtn.setAttribute('type', 'checkbox')
        doneBtn.setAttribute('id', 'done-btn')

        let deleteBtn = document.createElement("button");
        deleteBtn.setAttribute('id', 'delete-btn')
        deleteBtn.innerText = "X"

        doneBtn.addEventListener("click", () =>{
            newTask.classList.toggle("task-completed")
        })

        deleteBtn.addEventListener("click", () =>{
                taskList.pop()
        })


        if(newTaskContainer.classList.contains("task-completed")){
            newTaskContainer.style.backgroundColor = "red"
        }

        

        buttonContainer.append(doneBtn)
        buttonContainer.append(deleteBtn)
        newTaskContainer.append(buttonContainer)

       

        if(userInput == ""){
           alert("Please add a task.")
        }else{
            for (let i = 0; i < taskList.length; i++){
                taskOutput.append(newTaskContainer); 
                
                
            }
           
        }
        
        console.log(taskList)
        
    }







)}
