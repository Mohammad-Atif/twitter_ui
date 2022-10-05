document.getElementById("loginBtn").onclick = function(){
    let personName = document.getElementById("name").value;
    let password =  document.getElementById("pass").value;
    if(personName.length == 0) {
        alert("Please Enter Name");
        document.getElementById("name").focus();
        return;
    }
    if(password.length == 0) {
        alert("Please Enter Password");
        document.getElementById("pass").focus();
        return;
    }

    fetch('http://localhost:8082/api/v1/tweets/login',{
        method: 'POST',
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: JSON.stringify({
            "name": personName,
            "password": password
        })
    })
    .then(data => {
        return data.json()
    })
    .then(data =>{
        if(data["name"] != null) {
            window.location.href = "http://127.0.0.1:5500/HomePage.html";
        }
        else {
            alert("Authentication Failed , Please Sign Up");
        }
    } )
}

document.getElementById("signUpBtn").onclick = function(){
    window.location.href = "http://127.0.0.1:5500/SignUpPage.html";
}

