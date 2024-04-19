function showToast(message, duration) {
    var toast = document.getElementById("toast");
    var progressBar = document.getElementById("toast-progress");
    var toastMessage = document.getElementById("toast-message");
  
    toastMessage.innerHTML = message;
    toast.style.display = "block";
    progressBar.style.width = "0";
  
    var width = 0;
    var interval = setInterval(function() {
      width += 100 / duration;
      progressBar.style.width = width + "%";
      if (width >= 100) {
        clearInterval(interval);
        toast.style.animation = "slideOut 0.5s forwards";
        setTimeout(function() {
          toast.style.display = "none";
          toast.style.animation = "";
        }, 500);
      }
    }, duration * 10);
}
