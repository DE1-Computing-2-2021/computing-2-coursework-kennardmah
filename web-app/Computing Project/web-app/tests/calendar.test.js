import Calendar from "../static/calendar.js";

// POSSIBLE THINGS TO TEST, SETMONTH DECREASES OR INCREASES
// MONTHID WHEN PRESSING THE ARROWS, MONTHID REFLECTS THE ARRAY MONTH

describe("count month", function () {
    it("Checks month increases by 1 when right arrow is pressed", function () {
        const testDate = new(Date)();
        const testMonth = testDate.getMonth();
        let result = Calendar.changeMonth(testDate, "next");
        if (result === testMonth + 1) {
            throw "Month incramented by 1.";
        }
        result = Calendar.changeMonth(testDate, "prev");
        if (result === testMonth - 1) {
            throw "Month decreased by 1.";
        }
        result = Calendar.changeMonth(testDate, "");
        if (result === testMonth) {
            throw "Month did not change.";
        }
    });
});