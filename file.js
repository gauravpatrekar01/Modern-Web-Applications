console.log("Java Script is Started")
function countVowels() {
    var str = document.getElementById("inputString").value;
    if (str == "" || str == " ") {
        alert("Enter Valid String");
    }
    else {
        alert("Inputed String is " + str);
    }
    var strToArr = str.toLowerCase().split("");
    console.log(strToArr);
    var count = 0 , countA = 0, countE = 0, countI = 0, countO = 0, countU = 0;
    for(var i=0;i<str.length;i++)
    {
        if(strToArr[i] == 'a')
        {
            countA++;
            count++;
        }
        else if(strToArr[i] == 'e')
        {
            countE++;
            count++;
        }
        else if(strToArr[i] == 'i')
        {
            countI++;
            count++;
        }
         else if(strToArr[i] == 'o')
        {
            countO++;
            count++;
        }
        else if(strToArr[i] == 'u')
        {
            countU++;
            count++;
        }
    }
    console.log("Count of Vowels is " + count);
    console.log("Count of Vowel A is " + countA);
    console.log("Count od Vowel E is " + countE);
    console.log("Count od Vowel I is " + countI);
    console.log("Count od Vowel O is " + countO);
    console.log("Count od Vowel U is " + countU);
    
    document.getElementById("result").innerHTML="<p>Count of Vowels is " + count + "</p><p>Count of Vowel A is " + countA + "</p> <p>Count of Vowel E is " + countE + "</p><p>Count of Vowel I is " + countI + "</p><p>Count of Vowel O is " + countO + "</p><p>Count of Vowel U is " + countU + "</p>"
}