const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen);
});



const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modification: ${document.lastModified}`;



const temples = [
    {
        templeName: "Abidjan Ivory Coast Temple",
        location: "Abidjan, Côte d'Ivoire",
        dedicated: "2025, October 25",
        area: 10000,
        imageUrl: "images/abidjan-ivory-coast-temple.jpg"
    },
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January 11",
        area: 17500,
        imageUrl: "images/accra-ghana-temple.jpg"
    },
    {
        templeName: "Paris France Temple",
        location: "Le Chesnay, France",
        dedicated: "2017, May 21",
        area: 44175,
        imageUrl: "images/paris-france-temple.jpeg"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March 10",
        area: 41010,
        imageUrl: "images/rome-italy-temple.jpg"
    },
    {
        templeName: "London England Temple",
        location: "London, England",
        dedicated: "1958, September 7",
        area: 46000,
        imageUrl: "images/london-england-temple.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April 6",
        area: 253015,
        imageUrl: "images/salt-lake-temple-eternal-peace.webp"
    },
    {
        templeName: "Nairobi Kenya Temple",
        location: "Nairobi, Kenya",
        dedicated: "2025, February 16",
        area: 20000,
        imageUrl: "images/nairobi-kenya-temple.jpg"
    },
    {
        templeName: "Durban South Africa Temple",
        location: "Durban, South Africa",
        dedicated: "2024, February 18",
        area: 19000,
        imageUrl: "images/durban-south-africa-temple.jpeg"
    },
    {
        templeName: "Washington DC Temple",
        location: "Kensington, Maryland",
        dedicated: "1974, November 19",
        area: 160000,
        imageUrl: "images/washington-dc-temple.jpg"
    },
    {
        templeName: "Johannesburg South Africa Temple",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August 24",
        area: 19100,
        imageUrl: "images/johannesburg-south-africa-temple.jpeg"
    }
];



const templeContainer = document.querySelector("#temple-gallery");
const pageTitle = document.querySelector("#page-title");



function displayTemples(templeList) {

    templeContainer.innerHTML = "";

    templeList.forEach((temple) => {

        const card = document.createElement("figure");

        const image = document.createElement("img");

        image.src = temple.imageUrl;
        image.alt = temple.templeName;
        image.loading = "lazy";

        const caption = document.createElement("figcaption");

        caption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        card.appendChild(image);
        card.appendChild(caption);

        templeContainer.appendChild(card);
    });
}



function filterTemples(filter) {

    let filteredTemples = temples;

    switch (filter) {

        case "old":
            filteredTemples = temples.filter(
                (temple) => new Date(temple.dedicated) < new Date("1900-01-01")
            );
            pageTitle.textContent = "Old Temples";
            break;

        case "new":
            filteredTemples = temples.filter(
                (temple) => new Date(temple.dedicated) > new Date("2000-01-01")
            );
            pageTitle.textContent = "New Temples";
            break;

        case "large":
            filteredTemples = temples.filter(
                (temple) => temple.area > 90000
            );
            pageTitle.textContent = "Large Temples";
            break;

        case "small":
            filteredTemples = temples.filter(
                (temple) => temple.area < 10000
            );
            pageTitle.textContent = "Small Temples";
            break;

        default:
            pageTitle.textContent = "Home";
    }

    displayTemples(filteredTemples);
}



const filterLinks = document.querySelectorAll("[data-filter]");

filterLinks.forEach((link) => {

    link.addEventListener("click", (event) => {

        event.preventDefault();

        const filter = link.dataset.filter;

        filterTemples(filter);

        navigation.classList.remove("open");
        menuButton.classList.remove("open");

        menuButton.setAttribute("aria-expanded", "false");
    });
});



displayTemples(temples);
