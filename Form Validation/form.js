let form = document.querySelector("#form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
    const nameValue = name.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const passwordValue = password.value;


    if (nameValue == "") {
        e.preventDefault();
        alert("Please enter name");
        name.focus();
        return false;
    }
    if (!isNaN(nameValue)) {
        e.preventDefault();
        alert("Please enter valid name");
        name.focus();
        return false;
    }
    if (emailValue == "") {
        e.preventDefault();
        alert("Please enter email");
        email.focus();
        return false;
    }
    if (phoneValue == "") {
        e.preventDefault();
        alert("Please enter phone number");
        phone.focus();
        return false;
    }
    if (phoneValue.length < 10 || phoneValue.length > 10) {
        e.preventDefault();
        alert("Please enter valid phone number");
        phone.focus();
        return false;
    }
    if (passwordValue == "") {
        e.preventDefault();
        alert("Please enter password");
        password.focus();
        return false;
    }
    if (passwordValue.length < 5) {
        e.preventDefault();
        alert("Password shold be greater tha 5 characters");
        password.focus();
        return false;
    }
});