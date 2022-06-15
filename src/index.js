import generateJoke from "./generateJoke";
import "./styles/main.scss";
import logo from "./assets/logo.svg";

document.addEventListener("DOMContentLoaded", () => {
  const joke = document.getElementById("joke");
  const p = document.createElement("p");

  const laughImg = document.getElementById("laughImg");
  laughImg.src = logo;
  p.innerText = generateJoke();

  joke.appendChild(p);
});

console.log(generateJoke());
