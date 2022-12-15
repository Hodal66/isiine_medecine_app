// const lab = document.querySelector("lab");
const homePage = document.querySelector(".home");
const backToHomeButton = document.querySelector(".backToHome");
const laboratoryPage = document.querySelector("#lab");
const pharmaciePage = document.querySelector("#falmacie");
const medecinePage = document.querySelector("#medecine");

homePage.addEventListener("click", goToHomePage);
laboratoryPage.addEventListener("click", goToLaboratoryPage);
pharmaciePage.addEventListener("click", goToPharmaciePage);
medecinePage.addEventListener("click", goToMedecinePage);
backToHomeButton.addEventListener("click", goToEveryPageToHomePage);
function goToHomePage(event) {
  event.preventDefault();
  window.location.href = "./index.html";
}
function goToLaboratoryPage(event) {
  event.preventDefault();
  window.location.href = "./lab.htm";
}
function goToEveryPageToHomePage(event) {
  event.preventDefault();
  alert("Do you want to go back");
  window.location.href = "./index.html";
}
function goToPharmaciePage(event) {
  event.preventDefault();
  window.location.href = "./medecine.html";
}
function goToMedecinePage(event) {
  event.preventDefault();
  window.location.href = "./internal.html";
}
