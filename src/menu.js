export function menu() {
    const contentDiv = document.getElementById("content");
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    contentDiv.appendChild(menuContainer);
}