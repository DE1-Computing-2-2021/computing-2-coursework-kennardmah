import Calendar from "../static/calendar.js";
import fc from "fast-check";
import Property from "./property.js";
import Task from "../static/tasks.js";

// POSSIBLE THINGS TO TEST, SETMONTH DECREASES OR INCREASES MONTHID WHEN PRESSING THE ARROWS
// MONTHID REFLECTS THE ARRAY MONTH

describe("count tasks", function() {

    property(
        "the length of the list will increase when tasks are added;" +
        "in this case, 4 times"
        function (test_task){
            let test_list = [];
            test_list = Task.addList(test_list, "");
            test_list = Task.addList(test_list, "");
            test_list = Task.addList(test_list, "");
            test_list = Task.addList(test_list, "");
            return test_list.length() === 4;
    });
})
