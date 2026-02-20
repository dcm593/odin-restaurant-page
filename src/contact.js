export function contact() {
    const contentDiv = document.getElementById("content");

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact-wrapper");

    const contactHeading = document.createElement("h1");
    contactHeading.textContent = "Contact Us For Reservations";

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    const storeInfo = document.createElement("div");
    storeInfo.classList.add("store-info");

    storeInfo.innerHTML = `
        <h2>Restaurant Information</h2>
        <p><strong>Address:</strong> 123 Fake Broadway Ave, Saskatoon, SK</p>
        <p><strong>Phone:</strong> (306) 555-1234</p>
        <p><strong>Email:</strong> reservations@superrealszechuan.ca</p>
        <p><a href="#">Leave us a review!</a></p>
    `;

    const hours = document.createElement("div");
    hours.classList.add("hours");

    hours.innerHTML = `
        <h2>Hours of Operation</h2>
        <p><strong>Monday - Thursday:</strong> 11:00 AM - 9:00 PM</p>
        <p><strong>Friday - Saturday:</strong> 11:00 AM - 10:00 PM</p>
        <p><strong>Sunday:</strong> 12:00 PM - 8:00 PM</p>
        <p><strong>Close on all major holidays</strong></p>
    `;

    const reservationSection = document.createElement("div");
    reservationSection.classList.add("reservation");

    const reservationMsg = document.createElement("h2");
    reservationMsg.textContent = "Make a Reservation";

    const reservation = document.createElement("form");
    reservation.classList.add("reservation-form");

    reservation.innerHTML = `
        <input type="text" id="name" name="name" placeholder="Name" required>

        <input type="email" id="email" name="email" placeholder="Email" required>

        <input type="date" id="date" name="date" required>

        <input type="time" id="time" name="time" required>

        <input type="number" id="guests" name="guests" min="1" max="20" placeholder="Group Size" required>

        <textarea id="requests" name="notes" rows="4" placeholder="Please let us know if you have any allergies or special requests."></textarea>

        <button type="submit">Submit Reservation</button>
    `;

    reservationSection.append(reservationMsg, reservation);
    contactContainer.append(storeInfo, hours);
    contactWrapper.append(contactHeading, contactContainer, reservationSection);
    contentDiv.appendChild(contactWrapper);
}