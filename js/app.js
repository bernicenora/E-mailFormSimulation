// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message');


// Event Listeners

eventListeners();

// Functions

function eventListeners(){
    // App initialization
    document.addEventListener('DOMContentLoaded', appInit);

    // Validate the Form
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}

// Initialize the App
function appInit(){
    // Disable the send button on load
    sendBtn.disabled = true;
}

// To validate the input fields
function validateField(){
    let errors;

    //Validate the length of the field
    validateLength(this);

    // Validate the email
    if (this.type === 'email'){
        validateEmail(this);
    }
}

// Validates the length of the fields

function validateLength(field){
//    console.log(field.value.length);
    if (field.value.length > 0){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}

// Validate e-mail - Checks for '@' in the email
function validateEmail(field){
    let emailText = field.value;

    //check if the emailText contains the '@' sysmbol
    if (emailText.indexOf('@') !== -1){
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    }else{
        field.style.borderBottomColor = 'red';
        field.classList.add('error');
    }
}
