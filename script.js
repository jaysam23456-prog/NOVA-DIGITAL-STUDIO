document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. PORTFOLIO CATEGORY FILTERS
    // =====================================

    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioCards = document.querySelectorAll(".portfolio-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            portfolioCards.forEach(function (card) {
                const category = card.dataset.category;

                if (
                    selectedCategory === "all" ||
                    category === selectedCategory
                ) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });

        });
    });


    // =====================================
    // 2. PROJECT DETAILS POPUPS
    // =====================================

    const modal = document.getElementById("project-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeButton = document.getElementById("modal-close");
    const projectButtons = document.querySelectorAll(".project-btn");

    const projectDetails = {
        website: {
            title: "Nexora Business Website",
            description:
                "A demonstration of a modern business website concept. " +
                "We can discuss creating a customised website for your business."
        },

        logo: {
            title: "Nova Creative Identity",
            description:
                "A sample brand identity concept exploring a bold symbol " +
                "and modern typography. Your logo can be designed around your ideas."
        },

        cv: {
            title: "Professional CV Concept",
            description:
                "A sample CV layout designed for clear presentation. " +
                "We can format your information into a professional document."
        }
    };

    function closeModal() {
        if (!modal) return;

        modal.classList.remove("open");
        modal.setAttribute("aria-hidden", "true");
    }

    projectButtons.forEach(function (button) {
        button.addEventListener("click", function () {

            if (!modal || !modalTitle || !modalDescription) return;

            const project = projectDetails[button.dataset.project];

            if (!project) return;

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;

            modal.classList.add("open");
            modal.setAttribute("aria-hidden", "false");
        });
    });

    if (closeButton) {
        closeButton.addEventListener("click", closeModal);
    }

    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });


    // =====================================
    // 3. CONTACT FORM — WHATSAPP
    // =====================================

    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name = document
                .getElementById("customer-name").value.trim();

            const email = document
                .getElementById("customer-email").value.trim();

            const service = document
                .getElementById("project-service").value;

            const details = document
                .getElementById("project-details").value.trim();

            if (!name || !email || !service || !details) {
                alert("Please complete all the fields.");
                return;
            }

            // Use your own WhatsApp number in Ghana's international format.
            // Example format: 233241234567
            const businessWhatsApp = "233209961786";

            if (!/^233\d{9}$/.test(businessWhatsApp)) {
                alert("Please check the business WhatsApp number.");
                return;
            }

            const message =
                "HELLO SHY KHID DIGITAL STUDIO!\n\n" +
                "I would like to discuss a project with you.\n\n" +
                "Name: " + name + "\n" +
                "Email: " + email + "\n" +
                "Service: " + service + "\n\n" +
                "MY IDEA:\n" + details + "\n\n" +
                "Please reply to discuss my project. Thank you!";

            const whatsappLink =
                "https://wa.me/" +
                businessWhatsApp +
                "?text=" +
                encodeURIComponent(message);

            // Open WhatsApp with the customer's message prepared.
            const whatsappWindow = window.open(
                whatsappLink,
                "_blank"
            );

            // Help if the browser blocks the new window.
            if (!whatsappWindow) {
                window.location.href = whatsappLink;
            }

        });
    }


    // =====================================
    // 4. WEBSITE READY
    // =====================================

    

// =====================================
// 5. PRICING BUTTONS — WHATSAPP
// =====================================

const priceButtons = document.querySelectorAll(".price-button");

priceButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const service = button.dataset.service;
        const price = button.dataset.price;

        const businessWhatsApp = "233209961786";

        const message =
            "HELLO SHY KHID DIGITAL STUDIO!\n\n" +
            "I am interested in your " + service + " service.\n" +
            "Advertised starting price: " + price + "\n\n" +
            "Please tell me more about the service and the final price.";

        const whatsappLink =
            "https://wa.me/" +
            businessWhatsApp +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappLink, "_blank");

    });

});


    console.log("NOVA DIGITAL STUDIO is ready!");

});

