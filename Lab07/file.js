async function abc() {
    alert("Hello World");
    let op = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 seconds");
        }, 2000);
    
    })
    let data = await op.then(function (data) {
        alert(data);
    });
    alert("End of function");
}