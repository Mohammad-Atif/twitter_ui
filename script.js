document.getElementById("btn").onclick = function(){
   document.getElementById("tweetingBox").innerHTML += `
   <h1>Clicked</h1>
   `
}

document.getElementById("userImg").onclick = function(){
    document.getElementById("tweetingBox").remove();
}