
function getNumbers() {
    return document.getElementById("numbers").value
        .split(",")
        .map(Number);
}


// 1. Spread Operator
function spreadExample() {
    let arr1 = getNumbers();
    let arr2 = [100, 200];

    let combined = [...arr1, ...arr2];

    document.getElementById("result").innerHTML =
        "Spread Operator:<br>" +
        "Original Array: [" + arr1 + "]<br>" +
        "New Array: [" + combined + "]";
}


// 2. Rest Operator
function restExample() {
    let numbers = getNumbers();

    function sum(...values) {
        return values.reduce((total, num) => total + num, 0);
    }

    let result = sum(...numbers);

    document.getElementById("result").innerHTML =
        "Rest Operator:<br>" +
        "Numbers: [" + numbers + "]<br>" +
        "Sum: " + result;
}


// 3. Object Destructuring
function destructuringExample() {
    let student = {
        name: "Onkar",
        age: 20,
        course: "CSBS"
    };

    let { name, age, course } = student;

    document.getElementById("result").innerHTML =
        "Object Destructuring:<br>" +
        "Name: " + name + "<br>" +
        "Age: " + age + "<br>" +
        "Course: " + course;
}


// 4. Map Method
function mapExample() {
    let numbers = getNumbers();

    let squares = numbers.map(num => num * num);

    document.getElementById("result").innerHTML =
        "Map Method:<br>" +
        "Original: [" + numbers + "]<br>" +
        "Squares: [" + squares + "]";
}


// 5. Filter Method
function filterExample() {
    let numbers = getNumbers();

    let evenNumbers = numbers.filter(num => num % 2 === 0);

    document.getElementById("result").innerHTML =
        "Filter Method:<br>" +
        "Original: [" + numbers + "]<br>" +
        "Even Numbers: [" + evenNumbers + "]";
}


// 6. forEach Method
function forEachExample() {
    let numbers = getNumbers();

    let output = "";

    numbers.forEach(num => {
        output += num + "<br>";
    });

    document.getElementById("result").innerHTML =
        "forEach Method:<br>" + output;
}
