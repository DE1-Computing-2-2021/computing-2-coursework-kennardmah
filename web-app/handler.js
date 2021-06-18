const Handler = Object.create(null);
let Tasks_list = [];

Handler.save_tasks = function (request_object) {
    console.log(request_object);
    Tasks_list = request_object.list;
    return Promise.resolve({
        "hello": "bye"
    });
};

Handler.get_tasks = function (request_object) {
    console.log(request_object);
    return Promise.resolve({
        "list": Tasks_list
    });
};

// Handler.delete_tasks = function(request_object) {
//     console.log(request_object);
//     Tasks_list = Tasks_list.filter( r => r !== request_object.name)
//     return Promise.resolve({
//         "task":Tasks_list
//     })
// }

// const months = [
//     "January", "February", "March", "April",
//     "May", "June", "July", "August", "September",
//     "October", "November", "December"
// ];

export default Object.freeze(Handler);