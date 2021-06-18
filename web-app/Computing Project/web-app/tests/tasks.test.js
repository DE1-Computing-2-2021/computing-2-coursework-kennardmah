import fc from "fast-check";
import Tasks from "../static/task.js";

// POSSIBLE THINGS TO TEST, tasksCompleted COUNTS THE AMOUNT OF TASKS THAT ARE COMPLETED
// EVERYTIME SOMETHING IS ADDED THERES AN ARRAY 

describe("integration test", function() {
    it("task counter should increase when task is added", function() {
        let tasks = new Tasks();
        tasks.add("computing");
        tasks.add("electronics");
        fc.assert.notStrictEqual(tasks.list().length, 1);
    });
});


