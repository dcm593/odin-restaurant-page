export function menu() {
    const contentDiv = document.getElementById("content");

    const menuWrapper = document.createElement("div");
    menuWrapper.classList.add("menu-wrapper");

    const menuHeading = document.createElement("h1");
    menuHeading.textContent = "All of our dishes are hand crafted with tender love and care :)";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuItems = [
        {
            image: "https://images.unsplash.com/photo-1605704922285-e82455dba38b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a3VuZyUyMHBhbyUyMGNoaWNrZW58ZW58MHwwfDB8fHww",
            name: "Kung Pao Chicken",
            description: "A spicy stir-fry dish made with chicken, peanuts, vegetables, and chili peppers.",
            price: "$12.99"
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1712604940796-1a1dd9021bf1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwbyUyMHRvZnV8ZW58MHwwfDB8fHww",
            name: "Mapo Tofu",
            description: "A popular Szechuan dish featuring tofu set in a spicy sauce, typically made with fermented black beans and chili paste.",
            price: "$10.99"
        },
        {
            image: "https://images.unsplash.com/photo-1765188990202-843b4c1a056b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN6ZWNodWFufGVufDB8MHwwfHx8MA%3D%3D0",
            name: "Szechuan Beef",
            description: "Tender beef slices stir-fried with Szechuan peppercorns, garlic, and chili peppers for a bold and flavorful dish.",
            price: "$18.99"
        },
        {
            image: "https://media.istockphoto.com/id/2204072397/photo/dandan-noodle-soup-in-tokyo-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=BiB2aT-K6BxYYTaS8PEBlxbAYW5u-eZiWfx-40RNxvo=",
            name: "Dan Dan Noodles",
            description: "A classic Szechuan noodle dish with a spicy, savory sauce made from chili oil, Sichuan peppercorns, and minced pork.",
            price: "$11.99"
        },
        {
            image: "https://images.unsplash.com/photo-1743525699873-b0f0911e3211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3BpY3klMjBlZ2dwbGFudHxlbnwwfDB8MHx8fDA%3D",
            name: "Szechuan Eggplant",
            description: "Eggplant stir-fried with garlic, ginger, and a spicy Szechuan sauce for a delicious vegetarian option.",
            price: "$9.99"
        },
        {
            image: "https://images.unsplash.com/photo-1703945530505-2f06e3e1cf97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwcG90fGVufDB8MHwwfHx8MA%3D%3D",
            name: "Szechuan Hot Pot",
            description: "A communal dish where diners cook a variety of meats, vegetables, and noodles in a simmering pot of spicy broth.",
            price: "$24.99"
        },
        {
            image: "https://images.unsplash.com/photo-1566749006386-4cfc0d44f733?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D",
            name: "Ginger Beef",
            description: "Crispy beef strips stir-fried with ginger, garlic, and a savory sauce for a flavorful dish.",
            price: "$17.99"
         },
        {
            image: "https://images.unsplash.com/photo-1562403492-454d4b075cac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGNoaW5lc2UlMjBmb29kfGVufDB8MHwwfHx8MA%3D%3D",
            name: "Beef Bulgogi",
            description: "Thinly sliced beef marinated in a sweet and savory sauce, then grilled or stir-fried to perfection.",
            price: "$15.99"
        }
    ];

    menuItems.forEach((item) => {
        const dish = document.createElement("div");
        dish.classList.add("dish");

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;

        const dishInfo = document.createElement("div");
        dishInfo.classList.add("dish-info");

        const name = document.createElement("h3");
        name.textContent = item.name;

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("span");
        price.classList.add("price");
        price.textContent = item.price;

        dishInfo.append(name, description);
        dish.append(image, dishInfo, price);
        menuContainer.appendChild(dish);
    });

    menuWrapper.append(menuHeading, menuContainer);
    contentDiv.appendChild(menuWrapper);
}