console.log("Load cal.js");

function appendNum(num) {
    var numsInput = document.getElementById("nums");
    numsInput.value += num;
}

function btn00() {
    appendNum(0);
    appendNum(0);
}

function btnAdd() {
    appendNum("+");
}

function btnSub() {
    appendNum("-");
}

function btnMul() {
    appendNum("*");
}

function btnDiv() {
    appendNum("/");
}

function btnEqual() {
    var numsInput = document.getElementById("nums");

    try {
        var expression = numsInput.value;


        if (expression === "") {
            throw new Error("Input cannot be empty");
        }

        if (!/^[0-9+\-*/.\s]+$/.test(expression)) {
            throw new Error("Invalid characters in input");
        }

        if (/[+\-*/]$/.test(expression.trim())) {
            throw new Error("Incomplete expression");
        }

        var result = eval(expression);

        if (!Number.isFinite(result)) {
            throw new Error("Invalid calculation");
        }

        numsInput.value = result;

    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
}

function clearInput() {
    var numsInput = document.getElementById("nums");

    try {
        if (numsInput.value === "") {
            throw new Error("Input is already empty");
        }

        numsInput.value = "";

    } catch (error) {
        console.error("Error:", error.message);
        alert(error.message);
    }
}