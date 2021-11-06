

//opdracht 1: alert button bij het klikken. function naam mag niet zelfde zijn als element. en getelementbyid gebruiken ipv queryselector
const alertButton = document.getElementById("mybutton");

const alertButton1 = function () {
  alert("button clicked");
};
alertButton.addEventListener("click", alertButton1);



//opdracht 2 achtergrond kleur wijzigen als je klikt. 
const changeClassBlueBackground = function () { //als klik op button wordt de class red background toegevoegd aan body element
  const bodyElement = document.body;
  bodyElement.classList.add("red-background");
};

const attachEventToChangeColorButton = function () { //klik event vast maken aan nieuwe button
  const changeColorButton = document.getElementById("change-background-button");
  changeColorButton.addEventListener("click", changeClassBlueBackground);
};

attachEventToChangeColorButton();


//opdracht 3 rood-blauw achtergrond

const toggleColor = function () {
  const bodyElement1 = document.body;
  bodyElement1.classList.toggle("red-background");
};

const attachEventToChangeColorButton1 = function () {
  const changeColorButton1 = document.getElementById("toggle-button");
  changeColorButton1.addEventListener("click", toggleColor);
};

attachEventToChangeColorButton1();

