document.getElementById("signIn").onclick = function(){
    let personName = document.getElementById("name").value;
    let password =  document.getElementById("pass").value;
    let confirmPassword = document.getElementById("passConfirm").value;

    if(personName.length == 0) {
        alert("Please enter Valid name")
        document.getElementById("name").focus();
        return;
    }
    else if(password.length == 0) {
        alert("Please enter Valid password")
        document.getElementById("pass").focus();
        return;
    }
    else if(password != confirmPassword) {
        alert("password mismatched");
        document.getElementById("passConfirm").focus();
        return;
    }

    fetch('http://localhost:8082/api/v1/tweets/register',{
        method: 'POST',
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: JSON.stringify({
            "name": personName,
            "following":[],
            "password": password
        })
    })
    .then(data => {
        if(data.ok)
            return true;
        else {
            throw new Error('Name already Exits');
        }
    })
    .then(isTrue=>{
        window.location.href = "http://127.0.0.1:5500/LoginPage.html";
    })
    .catch(error => alert(error));
}