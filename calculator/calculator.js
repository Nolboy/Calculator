var screenArray = [];
var firstSet;
var operator;
var secondSet;
var equalSet;

var newAddValue

function screenRender(val) {
    var valueCheck = screenArray.length;

    if (valueCheck < 12) {
        screenArray.push(val);
        const arrayJoin = screenArray.join("");
        newAddValue = arrayJoin.toString();
        document.getElementById("screenText").innerHTML = newAddValue;
    }
}

function addingNumbers() {
    operator = document.getElementById("calAdd").textContent;

    if (firstSet && secondSet && equalSet && newAddValue) {
        firstSet = equalSet;
        secondSet = "";
        newAddValue = "";
        equalSet = "";

    } else {
        if (!firstSet) {
            firstSet = newAddValue;
            document.getElementById("screenText").innerHTML = firstSet;
            screenArray = [];
            if (newAddValue) {
                newAddValue = "";
            }
        } else if (firstSet) {
            secondSet = newAddValue;
            screenArray = [];
            equalSet = Number(firstSet) + Number(secondSet);
            document.getElementById("screenText").innerHTML = equalSet;

            if (newAddValue) {
                newAddValue = "";
                firstSet = equalSet;
            }
        }

    }

}

function subtractNumbers() {
    operator = document.getElementById("calSub").textContent;

    if (firstSet && secondSet && equalSet && newAddValue) {
        firstSet = equalSet;
        secondSet = "";
        newAddValue = "";
        equalSet = "";
    } else {
        if (!firstSet) {
            firstSet = newAddValue;
            document.getElementById("screenText").innerHTML = firstSet;
            screenArray = [];
            if (newAddValue) {
                newAddValue = "";
            }
        } else if (firstSet) {
            secondSet = newAddValue;
            screenArray = [];
            equalSet = Number(firstSet) - Number(secondSet);
            document.getElementById("screenText").innerHTML = equalSet;

            if (newAddValue) {
                newAddValue = "";
                firstSet = equalSet;
            }
        }
    }
}

function multiplyNumbers() {
    operator = document.getElementById("calMulti").textContent;

    if (firstSet && secondSet && equalSet && newAddValue) {
        firstSet = equalSet;
        secondSet = "";
        newAddValue = "";
        equalSet = "";
    } else {
        if (!firstSet) {
            firstSet = newAddValue;
            document.getElementById("screenText").innerHTML = firstSet;
            screenArray = [];
            if (newAddValue) {
                newAddValue = "";
            }
        } else if (firstSet) {
            secondSet = newAddValue;
            screenArray = [];
            equalSet = Number(firstSet) * Number(secondSet);
            document.getElementById("screenText").innerHTML = equalSet;

            if (newAddValue) {
                newAddValue = "";
                firstSet = equalSet;
            }
        }
    }
}

function divideNumbers() {
    operator = document.getElementById("calDiv").textContent;

    if (firstSet && secondSet && equalSet && newAddValue) {
        firstSet = equalSet;
        secondSet = "";
        newAddValue = "";
        equalSet = "";
    } else {
        if (!firstSet) {
            firstSet = newAddValue;
            document.getElementById("screenText").innerHTML = firstSet;
            screenArray = [];
            if (newAddValue) {
                newAddValue = "";
            }
        } else if (firstSet) {
            secondSet = newAddValue;
            screenArray = [];
            equalSet = Number(firstSet) / Number(secondSet);
            document.getElementById("screenText").innerHTML = equalSet;

            if (newAddValue) {
                newAddValue = "";
                firstSet = equalSet;
            }
        }
    }
}

function equalNumbers() {
    if (operator === "+") {
        secondSet = newAddValue;
        screenArray = [];
        equalSet = Number(firstSet) + Number(secondSet);
        document.getElementById("screenText").innerHTML = equalSet;
    } else if (operator === "-") {
        secondSet = newAddValue;
        screenArray = [];
        equalSet = Number(firstSet) - Number(secondSet);
        document.getElementById("screenText").innerHTML = equalSet;
    } else if (operator === "*") {
        secondSet = newAddValue;
        screenArray = [];
        equalSet = Number(firstSet) * Number(secondSet);
        document.getElementById("screenText").innerHTML = equalSet;
    } else if (operator === "/") {
        secondSet = newAddValue;
        screenArray = [];
        equalSet = Number(firstSet) / Number(secondSet);
        document.getElementById("screenText").innerHTML = equalSet;
    }
}