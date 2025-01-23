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



let iframe = document.getElementById('maps');

let lat = localStorage.getItem('latitude');
let long = localStorage.getItem('longitude');

iframe.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509167!2d144.95373531531506!3d-37.81720997975187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f123f5b%3A0x5045675218ceed28!2s${}%20${}!5e0!3m2!1sen!2sus!4v1616730255295!5m2!1sen!2sus');

