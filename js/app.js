// This is the main JavaScript file for AtlasGuard.
console.log("AtlasGuard app is running!");

// Initialize the map centered on Miami
var map = L.map('map').setView([25.7617, -80.1918], 10);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fictional cyber risk data for Miami and South Florida
const cyberRiskData = [
    {
        lat: 25.7743,
        lng: -80.1937,
        name: "Downtown Miami",
        risk: "High",
        details: "High risk of public Wi-Fi scams and phishing attacks. Avoid unsecured networks."
    },
    {
        lat: 25.7907,
        lng: -80.1301,
        name: "South Beach",
        risk: "High",
        details: "Tourist hotspot with many rogue Wi-Fi networks. Be cautious of QR code scams on flyers."
    },
    {
        lat: 25.9566,
        lng: -80.1399,
        name: "Aventura Mall",
        risk: "Medium",
        details: "Risk of skimmers on ATMs and credit card readers. Use tap-to-pay where possible."
    },
    {
        lat: 26.1224,
        lng: -80.1373,
        name: "Fort Lauderdale Beach",
        risk: "Medium",
        details: "Be aware of unsolicited emails with fake booking confirmations."
    },
    {
        lat: 25.6780,
        lng: -80.4325,
        name: "Kendall",
        risk: "Low",
        details: "Lower risk, but always use strong passwords and be cautious of suspicious emails."
    }
];

// Add markers for each risk location
cyberRiskData.forEach(location => {
    const riskColor = location.risk === "High" ? "red" : location.risk === "Medium" ? "orange" : "green";
    const marker = L.circleMarker([location.lat, location.lng], {
        color: riskColor,
        radius: 8
    }).addTo(map);

    marker.bindPopup(`<b>${location.name}</b><br>Risk Level: ${location.risk}<br>${location.details}`);
});


// Security Features
const wifiScanBtn = document.getElementById('wifi-scan-btn');
const wifiScanResult = document.getElementById('wifi-scan-result');
wifiScanBtn.addEventListener('click', () => {
    wifiScanResult.textContent = 'Scanning for rogue Wi-Fi networks... Found a suspicious network: "Free_Miami_WiFi". We recommend you disconnect immediately.';
});

const qrScanBtn = document.getElementById('qr-scan-btn');
const qrScanResult = document.getElementById('qr-scan-result');
qrScanBtn.addEventListener('click', () => {
    qrScanResult.textContent = 'Warning: Be cautious of QR codes on parking meters in Miami, some may lead to fraudulent payment sites. Use our mobile app to verify QR codes before scanning.';
});

const phishingAlertBtn = document.getElementById('phishing-alert-btn');
const phishingAlertResult = document.getElementById('phishing-alert-result');
phishingAlertBtn.addEventListener('click', () => phishingAlertResult.textContent = 'Active Phishing Alert: A new phishing campaign is targeting travelers to Miami with fake hotel booking confirmations. Please verify all emails with your hotel directly.');

// Sign-up Form
const signupForm = document.getElementById('signup-form');
const signupMessage = document.getElementById('signup-message');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    signupMessage.textContent = `Thank you for signing up, ${name}! A confirmation email has been sent to your email address.`;
    signupForm.reset();
});
