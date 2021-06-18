import fc from "fast-check";
import Calendar from "../static/calendar.js";
import property from "./property.js";

// POSSIBLE THINGS TO TEST, SETMONTH DECREASES OR INCREASES
// MONTHID WHEN PRESSING THE ARROWS, MONTHID REFLECTS THE ARRAY MONTH

const arbitrary_move = fc.constantFrom(
    "prev",
    "next",
    ""
);
const testDate = new(Date)();
const testMonth = testDate.getMonth();

describe("count month", function () {
    it("Checks month increases by 1 when right arrow is pressed", function () {
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

describe("count tasks", function () {

    property(
        "if month decreases, outcome would result in prior month",
        [testDate, arbitrary_move],
        function (testDate, move) {
            if (move === "prev") {
                return Calendar.changeMonth(testDate, "prev");
            }
        }
    );
    property(
        "if month increases, outcome would result in next month",
        [testDate, arbitrary_move],
        function (testDate, move) {
            if (move === "next") {
                return Calendar.changeMonth(testDate, "next");
            }
        }
    );
    it("If neither move is shown, month date does not change", function () {
        if (Calendar.changeMonth(testDate, "") !== testMonth) {
            throw "Month is unaffected, as neither moves were made";
        }
    });
});