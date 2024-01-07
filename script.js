//date
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const months = ["January","February","March","April","May","June","July","August","September", "October","November","December"]

const d = new Date();

const todayDay = days[d.getDay()];

const todayDayNumber = d.getDate()

const currentMonth = months[d.getMonth()]

document.getElementById("day").innerHTML = todayDay;

document.getElementById("numberDay").innerHTML = todayDayNumber;

document.getElementById("month").innerHTML = currentMonth;

//task

document.getElementById("btn").addEventListener("click", createTask)

let listOfTask = [];

function createTask() {
    let task = document.getElementById("userInput").value;
    listOfTask.push(task);
    console.log(listOfTask);

    // Get the container outside the loop
    let container = document.querySelector('.tasks-list');

    // Create a new div element for each task
    let new_task = document.createElement('div');
    new_task.classList.add('task');

    // Construct the task details HTML for each task
    let taskDetails = `<div class="task" id="task-div">
        <span class="material-symbols-outlined" id="unChecked" onClick="removeTask()">
            radio_button_unchecked
        </span>
        <p style="margin-left: 20px;" id = "taskValue">${task}</p>
    </div>`;

    // Set inner HTML for the new_task div with the task details
    new_task.insertAdjacentHTML('beforeend', taskDetails);

    // Append the new_task div to the container
    container.appendChild(new_task);
    
}

function removeTask () {
    console.log("Clicked")
    let value = document.getElementById("taskValue").innerHTML
    let index = listOfTask.indexOf(value)
    let removedTask = listOfTask.splice(index, 1)
    let element = document.getElementById("task-div")
    element.remove();
}
