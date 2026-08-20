let arr=[];

function arrPush(element) {
    arr.push(element);
    updateResult();
}

function arrPop() {
    arr.pop();
    updateResult();
}

function arrShift() {
    arr.shift();
    updateResult();
}

function arrUnshift(element) {
    arr.unshift(element);
    updateResult();
}

function updateResult() {
    document.getElementById("result").innerHTML = "Stack: " + arr.join(", ");
}