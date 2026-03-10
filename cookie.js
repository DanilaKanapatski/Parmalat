document.addEventListener("DOMContentLoaded", function () {

    const popup = document.getElementById("cookiePopup");
    const btn = document.getElementById("cookieAccept");

    if(localStorage.getItem("cookieAccepted")){
        popup.style.display = "none";
    }

    btn.addEventListener("click", function(){
        localStorage.setItem("cookieAccepted", "true");
        popup.style.display = "none";
    });

});