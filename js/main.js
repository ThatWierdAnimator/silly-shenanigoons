// This function alerts the user of their coordinates (in case they forgot)
function showCoords(latitude, longitude) {
    if (!latitude && !longitude) {
        alert('No coordinates found (you are safe)');
    } else {
        alert(`${latitude}, ${longitude}`);
    }
}

// This function grabs and saves the users coordinates
// This prompts when the site is opened
navigator.geolocation.getCurrentPosition((position) => {
    localStorage.setItem("latitude", position.coords.latitude);
    localStorage.setItem("longitude", position.coords.longitude);
});

// This function will update the stored coords whenever its called
function updateCoords() {
    navigator.geolocation.getCurrentPosition((position) => {
        localStorage.setItem("latitude", position.coords.latitude);
        localStorage.setItem("longitude", position.coords.longitude);
    });
}

// Shows location when the show location button is clicked
document.getElementById('showLocation').addEventListener('click', () => {
    showCoords(localStorage.getItem('latitude'), localStorage.getItem('longitude'));
});

document.getElementById('updateLocation').addEventListener('click', () => {
    updateCoords();
});

// Removes location from local storage
document.getElementById('removeLocation').addEventListener('click', () => {
    localStorage.removeItem('latitude');
    localStorage.removeItem('longitude');
});