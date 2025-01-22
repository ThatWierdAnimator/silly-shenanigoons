let storedLatitude = localStorage.getItem('latitude');
let storedLongitude = localStorage.getItem('longitude');

// This function alerts the user of their coordinates (in case they forgot)
function showCoords(latitude, longitude) {
    if (!latitude && !longitude) {
        alert('No coordinates found (you are safe)');
    } else {
        alert(`${latitude}N ${longitude}W`);
    }
    
}

// This function grabs and saves the users coordinates
// This prompts when the site is opened
navigator.geolocation.getCurrentPosition((position) => {
    localStorage.setItem("latitude", latitude);
    localStorage.setItem("longitude", longitude);
});

// This function will update the stored coords whenever its called
function updateCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
    });
}

// Shows location when the show location button is clicked
document.getElementById('showLocation').addEventListener('click', () => {
    showCoords(storedLatitude, storedLongitude);
});

document.getElementById('updateLocation').addEventListener('click', () => {
    updateCoords();
});