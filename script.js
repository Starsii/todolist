// date
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January","February","March","April","May","June","July","August","September", "October","November","December"];
const d = new Date();

const todayDay = days[d.getDay()];
const todayDayNumber = d.getDate();
const currentMonth = months[d.getMonth()];

document.getElementById("day").innerHTML = `${todayDay},`;
document.getElementById("numberDay").innerHTML = todayDayNumber;
document.getElementById("month").innerHTML = currentMonth;

// task
const tasksContainer = document.querySelector('.tasks-list');
document.getElementById("btn").addEventListener("click", createTask);

const compeltedtasksContainer = document.querySelector('.completed-task');

let listOfTasks = [];

let completedTask = []

let numberOfTask = 0; // Initialize the count to zero
let numberOfCompletedTask = 0; // Initialize the count to zero

function updateTaskCounts() {
    numberOfTask = listOfTasks.length;
    numberOfCompletedTask = completedTask.length;
    // Update the display or perform any other actions based on the counts
    console.log(`Number of tasks: ${numberOfTask}, Number of completed tasks: ${numberOfCompletedTask}`);

    const taskLeftCountHeading = document.getElementById('left-count');
    taskLeftCountHeading.textContent = `${numberOfTask}`;

    const taskDoneCountHeading = document.getElementById('completed-count')
    taskDoneCountHeading.textContent = `${numberOfCompletedTask}`
}


function createTask() {
    //.trim() ---> removes whitespaces from the ends of string
    const taskInput = document.getElementById("userInput").value.trim();

    if (taskInput) { //if task input is true
        listOfTasks.push(taskInput); //add taskInput to listOfTasks array

        const newTask = createTaskElement(taskInput); //run createTaskElement function with taskInput as a parameter
        tasksContainer.appendChild(newTask); 

        document.getElementById("userInput").value = ""; //Input Box goes back to blank
    }
    updateTaskCounts()
}

function createTaskElement(taskText) {
    const newTask = document.createElement('div'); //creates task div/container
    newTask.classList.add('task'); // add class 'task' to div/container

    newTask.innerHTML = `
        <div class="task-content">
            <span class="material-symbols-outlined unChecked" onClick="removeTask(this)">
                radio_button_unchecked
            </span>
            <p class="task-value">${taskText}</p>
        </div>`; //create HTML

    return newTask;
}

function removeTask(clickedElement) {
    const taskValue = clickedElement.nextElementSibling.textContent;

    completedTask.push(taskValue);

    const index = listOfTasks.indexOf(taskValue);
    if (index !== -1) {
        listOfTasks.splice(index, 1);
        clickedElement.closest('.task').remove();
    }

    createCompletedTask(taskValue); // Call createCompletedTask with the taskValue
    updateTaskCounts()
}

function createCompletedTask(task) {
    if (!checkIfDivExists(task)) {
        const newCompletedTask = createCompeltedTaskElement(task);
        compeltedtasksContainer.appendChild(newCompletedTask);
    }
}

function checkIfDivExists(textToCheck) {
    const divs = document.querySelectorAll('.completed-task .task-value');

    for (const element of divs) {
        if (element.textContent === textToCheck)  {
            return true;
        }
    }
    return false;
}

function createCompeltedTaskElement(task) {
    //store new compelted task div into a varible
    const newCompletedTask = document.createElement('div');

    //add the class done-task completed task to div
    newCompletedTask.classList.add('done-task')

    //HTML for the completed task div
    newCompletedTask.innerHTML = `<div class="task-content">
            <p class="task-value">${task}</p>
        </div>`

    return newCompletedTask;
}
