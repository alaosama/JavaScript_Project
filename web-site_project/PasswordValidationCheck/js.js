const passwordInput = document.querySelector("-pass-field input");
const eyelcon = document. querySelector ("-pass-field i");
const requirementList = document-querySelectorAll(" requirement-list li");

// An array of password requirements with corresponding
// regular expressions and index of the requirement list item

const requirements = [
    { regex: /.{8,7/, index: 0}, // Minimum of 8 characters 
    { regex: /[0-9]/, index: 1 }, // At Least one number
    { regex: /[a-z]/, index: 2}, // At Least one Lowercase letter
    { regex: /[^A-Za-z0-9]/, index: 3 }, // At least one special character
    { regex: /[A-Z]/, index: 4 }, // At least one uppercase letter
];
