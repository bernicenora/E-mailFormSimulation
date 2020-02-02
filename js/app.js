// Variables
const sendBtn = document.getElementById('sendBtn'),
    email = document.getElementById('email'),
    subject = document.getElementById('subject'),
    message = document.getElementById('message'),
    resetBtn = document.getElementById('resetBtn'),
    sendEmailForm = document.getElementById('email-form');

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

    // Send e-mail and reset form
    sendEmailForm.addEventListener('submit', sendMail);
    resetBtn.addEventListener('click',resetForm);
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

    //Both will return errors, then check if there are any errors
    errors = document.querySelectorAll('.error');

    //Check if the inputs are not empty
    if (email.value !== '' && subject.value !== '' && message.value !== ''){
        if (errors.length === 0){
            // The Send Button should be enabled
            sendBtn.disabled = false;
        }
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


// Function to send e-mail
function sendMail(e){
    e.preventDefault();

    //show the spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    // Show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    // Hide the spinner and show the sent image
    setTimeout(function(){
        // Hide the spinner
        spinner.style.display = 'none';

        //Show the sent image
        document.querySelector('#loaders').appendChild(sendEmailImg);

        //After 5 seconds, hide the image and reset the form
        setTimeout(function(){
            sendEmailForm.reset();
            sendEmailImg.remove();
            sendBtn.disabled = true;
        }, 5000);
    },3000);
}

// Function to reset the Form
function resetForm(){
    sendEmailForm.reset();
    sendBtn.disabled = true;
}
