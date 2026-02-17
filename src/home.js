export function home() {
    const contentDiv = document.getElementById("content");
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
  
    const heading = document.createElement("h1");
    const paragraphOne = document.createElement("p");
    const paragraphTwo = document.createElement("p");

    heading.textContent = "Welcome to Super Real Szechuan Restaurant! Absolutely real and not fake since February 2026!";

    const imageSources = [
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=1384&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1623669219949-2bb00f351eee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1614277786110-1a64e457c4c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1562403492-454d4b075cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D"
    ];

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("home-images");

    imageSources.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Szechuan food";
      imageContainer.appendChild(img);
    });

    paragraphOne.textContent = "Damn Chinese food is so tasty, I wonder if any will be served on the resort in Mexico? Anyways, this restaurant was founded by Damon Martin-Durocher on February 12th, 2026 - when he created his GitHub repository for this project and made his initial commit. This very real restaurant is supposed to have a quite wordy and inspirational message on its landing page, to sort of mock what many restaurants have on their websites. This project is about making a mock restaurant website after all. So as I yap and yap and yap - I'd like to take a minute to tell you about Super Real Szechuan. We are a very non-fictional restaurant based in Saskatoon, Saskatchewan. Our recipes were absolutely not stolen from Szechuan Kitchen located on Broadway Avenue, they were merely inspired by them after Damon grabbed food from there one singular time (and has not been back) on his way home and thought 'Boy do I ever need to write a bunch on nonsense for this project in order to make a nice wall of text on the landing page'";
    paragraphTwo.textContent = "Holy moly my webpage is being loaded dynamically and using modules in another file to render this text! Anyways, now that I've managed to create a large wall of text, here is a smaller text blurb about the restaurant. It is fake, and has been since it's inception - this is entirely satire.";
  
    homeContainer.appendChild(heading);
    homeContainer.appendChild(imageContainer);
    homeContainer.appendChild(paragraphOne);
    homeContainer.appendChild(paragraphTwo);
    contentDiv.appendChild(homeContainer);
}
  