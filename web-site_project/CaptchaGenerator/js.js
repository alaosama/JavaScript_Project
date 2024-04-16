// Selecting necessary DOM elements

const captchaTextBox = document.querySelector(".captch_box input");

const refreshButton = document.querySelector(".refresh_button");

const captchaInputBox = document.querySelector(".captch_input input");

const message = document.querySelector(".message");

const submitButton = document.querySelector(".button");

// Variable to store generated captcha

let captchaText = null;

// Function To Generate Captcha

const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2, 7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char) => (Math. random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("");
    captchaTextBox.value = captchaText;
    console.log(captchaText);
}

const refreshBtnClick = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaKeyUpValidate();
}
