import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";
import { contact } from "./contact.js";
import "./styles.css";
home();

const nav = document.querySelector("nav");

function clearContent() {
  const contentDiv = document.getElementById("content");
  contentDiv.textContent = "";
}

nav.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  clearContent();

  switch (e.target.id) {
    case "home-button":
      home();
      break;
    case "menu-button":
      menu();
      break;
    case "about-button":
      about();
      break;
    case "contact-button":
      contact();
      break;
  }
});
