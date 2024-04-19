let passwordInput = document.getElementById('passwordInput');
let showHide = document.getElementById('showHide');
let passwordStrength = document.getElementById('passwordStrength');
let info = document.getElementById('passwordInfo');

showHide.addEventListener('click', function () {
    showHidePassword();
});

passwordInput.addEventListener('input', function () {
    let password = passwordInput.value;
    let strength = 0;

    // Vérifie la longueur du mot de passe
    if (password.length >= 8) strength += 1;

    // Vérifie s'il contient au moins un chiffre
    if (/\d/.test(password)) strength += 1;

    // Vérifie s'il contient au moins une lettre minuscule et une majuscule
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;

    // Vérifie s'il contient au moins un caractère spécial
    if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

    // Affiche la force du mot de passe
    switch (strength) {
        case 0:
            info.textContent = "Very Weak";
            break;
        case 1:
            info.textContent = "Weak";
            break;
        case 2:
            info.textContent = "Medium";
            break;
        case 3:
            info.textContent = "Strong";
            break;
        case 4:
            info.textContent = "Very Strong";
            break;
    }

    // Met à jour la couleur de la barre de force du mot de passe
    updateStrengthMeter(strength);
});
