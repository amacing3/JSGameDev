//userName button
var userName;
var button = document.getElementById("name");
var enterName = function () {
    userName = prompt("Enter your name.");
}
button.addEventListener ("click", enterName);

//startGame button
var startButton = document.getElementById("startGame");
var startGameHandler = function startMyGame() {
    if(userName == undefined){
        alert("Please enter a valid name.");
    } else {
        alert("Ready to play.");
    }
}
startButton.addEventListener("click", startGameHandler);

var gameButton = function gameButtonConstruct() {
    var button;
    var fire = function fireWeaponHandler() {
        alert("Fire");
    }
}

var fireWeaponButton = new gameButton();
fireWeaponButton.button = document.getElementById("fireWeapon");
fireWeaponButton.button.addEventListener('click', fireWeaponButton.fire);