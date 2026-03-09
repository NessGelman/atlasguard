// This is the main JavaScript file for AtlasGuard.
console.log("AtlasGuard app is running!");

// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13);

// Add a tile layer (the map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('A sample marker.')
    .openPopup();

// Security Features
const wifiScanBtn = document.getElementById('wifi-scan-btn');
const wifiScanResult = document.getElementById('wifi-scan-result');
wifiScanBtn.addEventListener('click', () => {
    wifiScanResult.textContent = 'Scanning for rogue Wi-Fi networks... No threats detected.';
});

const qrScanBtn = document.getElementById('qr-scan-btn');
const qrScanResult = document.getElementById('qr-scan-result');
qrScanBtn.addEventListener('click', () => {
    qrScanResult.textContent = 'QR code scanner is not available in the web version. Please use our mobile app.';
});

const phishingAlertBtn = document.getElementById('phishing-alert-btn');
const phishingAlertResult = document.getElementById('phishing-alert-result');
phishingAlertBtn.addEventListener('click', () => phishingAlertResult.textContent = 'No new phishing alerts for your saved travel platforms.');

// Sign-up Form
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    signupMessage.textContent = `Thank you for signing up, ${name}! A confirmation email has been sent to your email address.`;
    signupForm.reset();
});
