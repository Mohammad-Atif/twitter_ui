document.getElementById("loginBtn").onclick = function(){
    fetch('http://localhost:8082/api/v1/tweets/register',{
        method: 'POST',
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
        body: JSON.stringify({
            "name": "Atif5",
            "password": "1234Ati"
        })
    })
    .then(data => {
        return data.json()
    })
    .then(data => console.log(data))
}