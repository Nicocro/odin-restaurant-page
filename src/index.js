import "./style.css";
import { createCard, logStuff } from "./page";
import AmbienteImg from "./assets/ambiente.jpg";
import KitchenImg from "./assets/kitchen.jpg";
import storiaImg from "./assets/storia.png";

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => alert("Allerta"));

const contentDiv = document.querySelector("#content");

const cardStoria = createCard("Storia", storiaImg, "la nostra storia");
const cardKitchen = createCard("Cucina", KitchenImg, "la nostra cucina");
const cardAmbient = createCard("Ambiente", AmbienteImg, "il nostro ambiente");

logStuff("diomerda");

contentDiv.appendChild(cardKitchen);
contentDiv.appendChild(cardStoria);
contentDiv.appendChild(cardAmbient);

// document.querySelector("#storia").src = storiaImg;
// document.querySelector("#cucina").src = KitchenImg;
// document.querySelector("#ambiente").src = AmbienteImg;
