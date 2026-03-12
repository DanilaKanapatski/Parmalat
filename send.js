document.addEventListener("DOMContentLoaded", () => {

    const sendForm = document.querySelector("#guideForm");
    if(!sendForm) return;

    const email = sendForm.querySelector('input[name="email"]');
    const phone = sendForm.querySelector('input[name="phone"]');
    const agree = sendForm.querySelector('input[name="agree"]');
    const btn = sendForm.querySelector(".request-btn");

    function validateForm(){

        if(
            email.value.trim() !== "" &&
            phone.value.trim() !== "" &&
            agree.checked
        ){
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }

    }

    email.addEventListener("input", validateForm);
    phone.addEventListener("input", validateForm);
    agree.addEventListener("change", validateForm);

    sendForm.addEventListener("submit", function(e){

        if(!btn.classList.contains("active")){
            e.preventDefault();
        }

    });

});