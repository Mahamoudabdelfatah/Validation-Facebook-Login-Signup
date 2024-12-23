let userNameLabel = document.querySelector(".userNameLabel");
let userNameInput = document.querySelector(".userNameInput");
function userName() {
    userNameLabel.classList.replace("text-danger", "text-primary");
    userNameLabel.innerHTML = "First Name :";
}

let lastNameLabel = document.querySelector(".lastNameLabel");
let lastNameInput = document.querySelector(".lastNameInput");
function lastName() {
    lastNameLabel.classList.replace("text-danger", "text-primary");
    lastNameLabel.innerHTML = "Last Name :"
}

let emailLabel = document.querySelector(".emailLabel");
let emailInput = document.querySelector(".emailInput");
function email() {
    emailLabel.classList.replace("text-danger", "text-primary");
    emailLabel.innerHTML = "Email :"
}

let phoneLabel = document.querySelector(".phoneLabel");
let phoneInput = document.querySelector(".phoneInput");
function phone() {
    phoneLabel.classList.replace("text-danger", "text-primary");
    phoneLabel.innerHTML = "Phone Number :"
}

let passwordLabel = document.querySelector(".passwordLabel");
let passwordInput = document.querySelector(".passwordInput");
function pass1() {
    passwordLabel.classList.replace("text-danger", "text-primary");
    passwordLabel.innerHTML = "Password :"
}

let password2Label = document.querySelector(".password2Label");
let password2Input = document.querySelector(".password2Input");
function pass2() {
    password2Label.classList.replace("text-danger", "text-primary");
    password2Label.innerHTML = "Confirm Password :"
}

let labelGender = document.querySelector(".labelGender")
let maleInput = document.querySelector(".maleInput")
let femaleInput = document.querySelector(".femaleInput")
function gender() {
    labelGender.classList.replace("text-danger", "text-primary");
    labelGender.innerHTML = "Gender :"
}

let birthLabel = document.querySelector(".birthLabel");
let birthInput = document.querySelector(".birthInput");
function birthDate() {
    birthLabel.classList.replace("text-danger", "text-primary");
    birthLabel.innerHTML = "Birthdate :"
}

function handleForm() {
    if (userNameInput.value.length < 3 || userNameInput.value.includes(" ") || userNameInput.value[0] !== userNameInput.value[0].toUpperCase()) {
        userNameLabel.classList.replace("text-primary", "text-danger");
        userNameLabel.innerHTML = "Invaild User Name";
        lastName();
        email();
        phone();
        pass1();
        pass2();
        gender();
        birthDate();
        return false;
    } else if (lastNameInput.value.length < 3 || lastNameInput.value.includes(" ") || lastNameInput.value[0] !== lastNameInput.value[0].toUpperCase()) {
        lastNameLabel.classList.replace("text-primary", "text-danger");
        lastNameLabel.innerHTML = "Invaild User Name";
        userName();
        email();
        phone();
        pass1();
        pass2();
        gender();
        birthDate();
        return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
        emailLabel.classList.replace("text-primary", "text-danger")
        emailLabel.innerHTML = "Invalid Email"
        userName();
        lastName();
        phone();
        pass1();
        pass2();
        gender();
        birthDate();
        return false;
    } else if (!/^01[0125][0-9]{8}$/.test(phoneInput.value)) {
        phoneLabel.classList.replace("text-primary", "text-danger");
        phoneLabel.innerHTML = "Invalid Phone";
        userName();
        lastName();
        email();
        pass1();
        pass2();
        gender();
        birthDate();
        return false;
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(passwordInput.value)) {
        passwordLabel.classList.replace("text-primary", "text-danger");
        passwordLabel.innerHTML = "Invalid Password";
        userName();
        lastName();
        email();
        phone();
        pass2();
        gender();
        birthDate();
        return false;
    } else if (passwordInput.value != password2Input.value) {
        password2Label.classList.replace("text-primary", "text-danger");
        password2Label.innerHTML = "Invalid Password";
        userName();
        lastName();
        email();
        phone();
        pass1();
        gender();
        birthDate();
        return false;
    } else if (!maleInput.checked && !femaleInput.checked) {
        labelGender.classList.replace("text-primary", "text-danger");
        labelGender.innerHTML = "Invaild gender";
        userName();
        lastName();
        email();
        phone();
        pass1();
        pass2();
        birthDate();
        return false;
    } else if (!birthInput.value) {
        birthLabel.classList.replace("text-primary", "text-danger");
        birthLabel.innerHTML = "Invaild Date";
        userName();
        lastName();
        email();
        phone();
        pass1();
        pass2();
        gender()
        return false;
    }
    return true;
}