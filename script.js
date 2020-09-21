var WinnerEle = document.body.querySelector(".Winner");
var playerEle = document.body.querySelector(".PHealth");
var dragonEle = document.body.querySelector(".DHealth");
var dragonhealth = 10;
var userhealth = 5;

while (dragonhealth >= 0 && userhealth >= 0) {
  var inputdamage = Number(prompt(
    "How many times will you attempt to hit the dragon? 1?2?3?4?5?"
  ));

  var actualdamage = Math.floor(Math.random() * inputdamage) + 1;
  if (actualdamage > 5) {
    dragonhealth = dragonhealth - 1;
  } else {
    dragonhealth = dragonhealth - actualdamage;
  }

  var userDamage = Math.floor(Math.random() * 2) + 1;
  userhealth = userhealth - userDamage;

  dragonEle.innerHTML = "The Dragon's Health is " + dragonhealth;
  playerEle.innerHTML = "The Player's Health is " + userhealth;
}
// == compares two things
if (dragonhealth == userhealth) {  
  WinnerEle.innerHTML =
    "Nobody won";
}
  else if(dragonhealth <= 0) {
  WinnerEle.innerHTML =
    "Good show lad, you defeated thy dragon";
}
else if (userhealth <= 0) {
  WinnerEle.innerHTML =
    "You done goofed chief. You've been terminated";
}