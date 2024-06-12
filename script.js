document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const contactList = document.getElementById("contactList");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("nameInput");
        const emailInput = document.getElementById("emailInput");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name === '' || email === '') {
            alert("Please enter both name and email.");
            return;
        }

        addContact(name, email);

        nameInput.value = '';
        emailInput.value = '';
    });

    function addContact(name, email) {
        const contactItem = document.createElement("div");
        contactItem.classList.add("contact-item");
        contactItem.innerHTML = `
            <strong>Name:</strong> ${name} <br>
            <strong>Email:</strong> ${email}
        `;
        contactList.appendChild(contactItem);
    }
});
