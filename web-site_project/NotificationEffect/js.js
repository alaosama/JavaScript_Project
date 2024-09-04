let toastBox = document.getElementById('toastBox');
let successMsg = '<img src="Assets/success.png" alt="Success Icon" /> Successfully submitted';
let errorMsg = '<img src="Assets/error.png" alt="Error Icon" /> Please fix the error';
let invalidMsg = '<img src="Assets/invalid.png" alt="Invalid Icon" /> Invalid input, check again';


function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if (msg.includes('error')) {
        toast.classList.add('error');
    } else if (msg.includes('invalid')) {
        toast.classList.add('invalid');
    } else {
        toast.classList.add('success');
    }

    setTimeout(() => {
        toast.remove();
    }, 6000);
}

