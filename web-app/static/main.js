// IMPORTS
import Ajax from "./ajax.js";
import Task from "./tasks.js";
import Calendar from "./calendar.js";

// CONSTANTS
const taskInput = document.querySelector(".todolist .task-input");
const taskButton = document.querySelector(".todolist .task-button");
const taskList = document.querySelector(".todolist .task-list");
const saveButton = document.querySelector(".save-button");
const date = new Date(); // get the current date
var completedTasks = 0;

// EVENT LISTENERS
taskButton.addEventListener("click", addTaskFunctionality);
taskList.addEventListener("click", deleteCheck);
saveButton.addEventListener("click", save);
document.querySelector(".prev").addEventListener("click", prevMonth);
document.querySelector(".next").addEventListener("click", nextMonth);
document.addEventListener("DOMContentLoaded", init);

// load functions when page is refreshed
function init(){
    load_task();
}

// create empty list to store tasks
let task_list = [];

// when save button is pressed, load the list of tasks to Ajax
function save(k){
    k.preventDefault();
    Ajax.query({"type":"save_task"}).then(function(response){
        console.log(response);
    });
}
// when page is refreshed, load the tasks back into the deadlines from save()
function load_task(){
    Ajax.query({"type":"get_task", "list": task_list}).then(function(response){
        console.log(response);
        task_list = task.list;
        task_list.forEach((tasknumber) => {
            addTask(tasknumber); // for each tasks, run the addTask function
        });
    });
}

function addTaskFunctionality(event){
    event.preventDefault(); // prevent form from refreshing
    const task1 = taskInput.value;
    addTask(task1);
    Task.addList(task_list, task1);
}

function addTask(task1){

    const taskDiv = document.createElement("div"); // add task div
    taskDiv.classList.add("task"); // create list
    const newTask = document.createElement("li");
    newTask.innerText = task1; // make the task reflect the input text
    newTask.classList.add("task-item");
    taskDiv.appendChild(newTask);
    const completedbut = document.createElement("button"); // completed button
    completedbut.innerHTML = "<i class = 'fas fa-check'></i>"; // button logo
    completedbut.classList.add("complete-btn");
    taskDiv.appendChild(completedbut);
    const trashbut = document.createElement("button"); // delete button
    trashbut.innerHTML = "<i class = 'fas fa-trash'></i>";
    trashbut.classList.add("trash-btn");
    taskDiv.appendChild(trashbut); // append task to the list
    taskList.appendChild(taskDiv); // clear text left inside the box
    taskInput.value = "";
}
function deleteCheck(e) {
    const item = e.target;
    const task = item.parentElement;
    // delete task
    if (item.classList[0] === "trash-btn"){
        task.remove();
    }
    // give "completed" class to task
    if (item.classList[0] === "complete-btn"){
        task.classList.toggle("completed");
        completedTasks ++;
        console.log(completedTasks);
    }
}

// determine the dates of the calendar and load onto HTML
function renderCalendar() {
    date.setDate(1);
    // determine the month days
    const MD = document.querySelector(".days");
    // determine the last day of the current month
    const LD = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    // determine the last day of last month
    const prevLD = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    const FD = date.getDay();
    const monthID = date.getMonth();
    // getMonth determines the index number
    const currentMonth = Calendar.updateMonth(monthID);
    document.querySelector(".date h1").innerHTML = currentMonth;
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
        };
    };
    // display dates of the month found from MD(monthdays)
    MD.innerHTML = days;
}
// decrease the set month and render the calendar
function prevMonth() {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
}
// increase the set month and render the calendar
function nextMonth() {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
}
// render the calendar
renderCalendar();