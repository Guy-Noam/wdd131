
// Footer: current year
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// Footer: last modified date
document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

// Weather data
const temperature = 29;
const windSpeed = 12;

// Calculate wind chill
function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

// Display wind chill when conditions allow it
const windChillElement = document.querySelector("#windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}
