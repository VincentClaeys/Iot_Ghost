const btnUnlock = document.getElementById("btnPassword");
const inputPassword = document.getElementById("password");
const correctPassword = "Vincent123";
const faultPassword = document.getElementById("foultPassword");

btnUnlock.onclick = function passwordChecker(){
    const valueInputPassword = inputPassword.value;
    console.log(valueInputPassword);


    if (valueInputPassword == correctPassword) {
console.log("goed gedaan, u hebt het juist")
    } else if (valueInputPassword == "") {
        faultPassword.innerHTML = "geef een antwoord in!"
    } else {
        faultPassword.innerHTML = "Het antwoord dat u heb gegeven is fout!"
    }
    
}






