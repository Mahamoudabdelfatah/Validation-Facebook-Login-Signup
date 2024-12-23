let emailLabeld = document.querySelector(".emailLabeld");
let emailInput = document.querySelector(".emailInput");
let passwordLabeld = document.querySelector(".passwordLabeld");
let passwordInput = document.querySelector(".passwordInput");

function handleForm() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailLabeld.classList.replace("d-none", "d-block");

        passwordLabeld.classList.replace("d-block","d-none");
        return false;
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(passwordInput.value)){
        passwordLabeld.classList.replace("d-none","d-block");

        emailLabeld.classList.replace("d-block","d-none");
        return false;
    }
    return true;
}