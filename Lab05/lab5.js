function reverseString() {
    var str = document.getElementById("inputString").value; 
    var arr = str.split("");
    var rev = arr.reverse().join(""); 
    document.getElementById("result").innerHTML = "<p>Reversed Input: " + rev + "</p>";
}
function sortString() {
    var str = document.getElementById("inputString").value; 
    var arr = str.split("");
    var sorted = arr.sort().join(""); 
    document.getElementById("result").innerHTML = "<p>Sorted Input: " + sorted + "</p>";
}