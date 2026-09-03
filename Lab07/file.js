async function abc() {
    document.getElementById("result").innerHTML = "<p>Program is running, please wait for 2 seconds...</p>";
    let op = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 seconds");
        }, 2000);
    
    })
    let data = await op.then(function (data) {
       // alert(data);
        displayData(data)
    });
    // document.getElementById("result").innerHTML = "<p>End of function</p>";
}

const displayData = (data) => {
    document.getElementById("result").innerHTML = "<p>resolve: " + data + "</p>";
}