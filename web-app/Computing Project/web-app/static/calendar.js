const Calendar = Object.create(null);

Calendar.updateMonth = function (monthID){
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August", "September",
        "October", "November", "December"
    ];
    const currentMonth = months[monthID];
    return currentMonth;
};

Calendar.changeMonth = function(date, name){
    if (name === "next"){
        return date.setMonth(date.getMonth() + 1);
    };
    if (name === "prev"){
        return date.setMonth(date.getMonth() - 1);
    };
}

export default Object.freeze(Calendar);