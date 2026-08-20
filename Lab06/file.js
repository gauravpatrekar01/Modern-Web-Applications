let arr=[];

function arrPush(element) {
    arr.push(element);
    updateResult();
}

function arrPop() {
    if (arr.length === 0) {
        alert("Stack is empty. Cannot pop.");
        return;
    }
    arr.pop();
    updateResult();
}

function arrShift() {
    if (arr.length === 0) {
        alert("Stack is empty. Cannot shift.");
        return;
    }
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