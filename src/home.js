export function home() {
    const contentDiv = document.getElementById("content");
  
    const heading = document.createElement("h1");
    const image = document.createElement("img");
    const paragraphOne = document.createElement("p");
    const paragraphTwo = document.createElement("p");

    heading.textContent = "What is the crime? Enjoying a succulent Chinese meal?";
    image.src = "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    image.alt = "Chinese food";
    paragraphOne.textContent = "Damn Chinese food is so tasty, I wonder if any will be served on the resort in Mexico?";
    paragraphTwo.textContent = "holy moly my webpage is being loaded dynamically and using modules in another file to render this text!";
  
    contentDiv.appendChild(heading);
    contentDiv.appendChild(image);
    contentDiv.appendChild(paragraphOne);
    contentDiv.appendChild(paragraphTwo);
  }
  