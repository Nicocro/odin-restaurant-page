import "./style.css";
import { createCrad } from "./page";
import AmbienteImg from "./assets/ambiente.jpg";
import KitchenImg from "./assets/kitchen.jpg";
import storiaImg from "./assets/storia.png";

const homeButton = document.querySelector("#home-button");
homeButton.addEventListener("click", () => alert("Allerta"));

document.querySelector("#storia").src = storiaImg;
document.querySelector("#cucina").src = KitchenImg;
document.querySelector("#ambiente").src = AmbienteImg;
