function reverseString() {
    // 1. Add .value to get the actual text from the input field
    var str = document.getElementById("inputString").value; 
    
    var arr = str.split("");
    
    // 2. Add .join("") to turn the reversed array back into a continuous string
    var rev = arr.reverse().join(""); 
    
    document.getElementById("result").innerHTML = "<p>Reversed Input => " + rev + "</p>";
}
function sortString() {
    // 1. Get the actual text from the input field
    var str = document.getElementById("inputString").value; 
    
    var arr = str.split("");
    
    // 2. Sort the array alphabetically and join back into a continuous string
    var sorted = arr.sort().join(""); 
    
    document.getElementById("result").innerHTML = "<p>Sorted Input => " + sorted + "</p>";
}