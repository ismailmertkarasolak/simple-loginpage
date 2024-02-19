var username = "Mert";
var password = "mert123";

document.getElementById("mySubmit").onclick = function(){
    let enteredUsername = document.getElementById("myUsername").value;
    let enteredPassword = document.getElementById("myPassword").value;

    //console.log(enteredUsername);
    //console.log(enteredPassword);

    if (enteredUsername === username && enteredPassword === password){
        console.log("Login Successfully!");
        document.getElementById("logincheck").innerHTML = "Login Successfully!!"
        document.getElementById("myH1").innerHTML = "Hello "+ username;
        window.location.href = "https://ismailmertkarasolak.github.io/rackpaperScissors/";
    } else {
        console.log("Login Failed!! Try Again.");
        document.getElementById("logincheck").innerHTML = "Login Failed!! Try Again."
    }   

};
