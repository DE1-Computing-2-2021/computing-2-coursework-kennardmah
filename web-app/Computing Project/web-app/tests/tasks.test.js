import fc from "fast-check";
import property from "./property.js";
import Task from "../static/tasks.js";

// POSSIBLE THINGS TO TEST, SETMONTH DECREASES OR INCREASES MONTHID
// WHEN PRESSING THE ARROWS MONTHID REFLECTS THE ARRAY MONTH

describe("count tasks", function () {

    property(
        "the length of the list will increase when tasks are added;" +
        "in this case, 4 times",
        [fc.test_string(5, 10)],
        function (test_list = [], test_string = "") {
            test_list = Task.addList(test_list, test_string);
            test_list = Task.addList(test_list, test_string);
            test_list = Task.addList(test_list, test_string);
            test_list = Task.addList(test_list, test_string);
            return test_list.length() === 4;
        }
    );
});
