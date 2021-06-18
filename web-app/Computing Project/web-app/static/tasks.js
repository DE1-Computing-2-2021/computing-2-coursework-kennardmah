const Task = Object.create(null);

Task.addList = function (task_list, task1) {
    task_list.push(task1);
    console.log(task_list);
};

export default Object.freeze(Task);