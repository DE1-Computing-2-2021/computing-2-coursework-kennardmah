

// CONSTANTS

var taskInput = document.querySelector(".todolist .task-input");
var taskButton = document.querySelector(".todolist .task-button");
var taskList = document.querySelector(".todolist .task-list");
var date = new Date(); // get the current date

// EVENT LISTENERS

taskButton.addEventListener("click", addTask);
taskList.addEventListener("click", deleteCheck);
document.querySelector(".prev").addEventListener("click", prevMonth);
document.querySelector(".next").addEventListener("click", nextMonth);

// FUNCTIONS

function renderCalendar() {
    date.setDate(1);
    var MD = document.querySelector(".days"); // determine the month days
    // determine the last day of the current month
    var LD = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // determine the last day of last month
    var prevLD = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    var FD = date.getDay();
    var months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];

    // getMonth determines the index number
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];
    // display the year of the month
    document.querySelector(".date p").innerHTML = date.getFullYear();

    var days = "";

    // it is not part of the current month give opacity
    for (var counter = FD; counter > 0; counter -= 1) {
        days += `<div class="dif-month">${prevLD - counter + 1}</div>`;
    }
    for (var j = 1; j <= LD; j += 1){
        if (j === new Date().getDate() && date.getMonth()
        === new Date().getMonth()) {
        days += `<div class = "today">${j}</div>`;
        }
        else {
            days += `<div>${j}</div>`;
        }
    }

    MD.innerHTML = days; // display dates of the month found from MD(monthdays)
}
function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
function addTask(event) {
    event.preventDefault(); // prevent form from refreshing
    var taskDiv = document.createElement("div"); // add task div
    taskDiv.classList.add("task"); // create list
    var newTask = document.createElement("li");
    newTask.innerText = taskInput.value; // make the task reflect the input text
    newTask.classList.add("task-item");
    taskDiv.appendChild(newTask);
    var completedbut = document.createElement("button"); // completed button
    completedbut.innerHTML = "<i class = 'fas fa-check'></i>"; // button logo
    completedbut.classList.add("complete-btn");
    taskDiv.appendChild(completedbut);
    var trashbut = document.createElement("button"); // delete button
    trashbut.innerHTML = "<i class = 'fas fa-trash'></i>";
    trashbut.classList.add("trash-btn");
    taskDiv.appendChild(trashbut); // append task to the list
    taskList.appendChild(taskDiv) // clear text left inside the box
    taskInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "trash-btn"){ // delete task
        const task = item.parentElement;
        task.remove(); // remove animation
    }
    if (item.classList[0] === "complete-btn"){
        const task = item.parentElement;
        task.classList.toggle("completed"); // add strike-through to task
    }
}

renderCalendar();
