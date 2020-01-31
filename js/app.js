// Variables
const sendBtn = document.getElementById('sendBtn');


// Event Listeners

eventListeners();

// Functions

function eventListeners(){
    // App initialization
    document.addEventListener('DOMContentLoaded', appInit);



}

// Initialize the App
function appInit(){
    // Disable the send button on load
    sendBtn.disabled = true;
}