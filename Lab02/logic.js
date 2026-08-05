console.log(777)
function validateLogin() {
    var user = document.getElementById("user").value.trim();
    var password = document.getElementById("password").value.trim();
    if(user == "")
    {
        alert("Please enter your username");
        return false;
    }
    if(password == "")
    {
        alert("Please enter your password");
        return false;
    }
    if(user != ""){
        var emailCheck = isEmail(user);
        console.log(emailCheck);
    }
    function isEmail(email) {
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regex.test(email);
    }
}