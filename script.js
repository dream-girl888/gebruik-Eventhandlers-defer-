//opdracht 1: alert button bij het klikken
/*const clickButton = document.querySelector("btn-alert");

function alertButton() {
  alert("button clicked")
};
clickButton.addEventListener("onclick", alertButton);
*/


//opdracht 2 achtergrond kleur wijzigen als je klikt
const backgroundButton = document.querySelector("blue-background");
const backgroundChange = () => {
  backgroundButton.classList.add("red-background");
};
backgroundButton.addEventListener("click", backgroundChange);

//opdracht 3
const togggleButton = document.querySelector("blue-background");
const toggleColor = () => {
  togggleButton.classList.toggle("red-background");
};
togggleButton.addEventListener("click", toggleColor);