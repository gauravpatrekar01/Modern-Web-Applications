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
function btnEqual() {
    var numsInput = document.getElementById("nums");
    numsInput.value = eval(numsInput.value);
}
function clearInput() {
    var numsInput = document.getElementById("nums");
    try {
        if (numsInput.value === "") {
            throw new Error("Input is empty");
        }
        if (numsInput.value.includes("+") || numsInput.value.includes("-")) {
            numsInput.value = eval(numsInput.value);
        }
    }
    catch (error) {
        console.error(error.message);
        alert(error.message);
    }
   
    numsInput.value = "";
}