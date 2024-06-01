document.addEventListener('DOMContentLoaded', () => {
    
});
const usuarios = {
    "pepito@gmail.com": "pepito",
    "jose@gmail.com": "jose",
  }; 

const loginForm = document.getElementById("form-login");
const emailInput = document.getElementById("email");
const contraInput = document.getElementById("contra");
const emailError = document.getElementById("email-error");
const contraError = document.getElementById("contra-error");

emailInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    emailError.textContent = "*Este campo es obligatorio";
});

contraInput.addEventListener("invalid", (e) => {
    e.preventDefault();
    contraError.textContent = "*Este campo es obligatorio";
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (emailInput.value === ""){
        emailError.textContent = "*Este campo es obligatorio";
        emailInput.focus();
    } else {
        emailError.textContent = "";
    }

    if (contraInput.value === "") {
        contraError.textContent = "*Este campo es obligatorio";
        contraInput.focus();
    } else {
        contraError.textContent = "";
    }

    if (usuarios[emailInput.value] === contraInput.value){
        const cartel = document.createElement('div');
    cartel.textContent = 'Iniciaste sesión con éxito';
    cartel.style.position = 'absolute';
    cartel.style.top = '50%';
    cartel.style.left = '50%';
    cartel.style.transform = 'translate(-50%, -50%)';
    cartel.style.background = 'green';
    cartel.style.color = 'white';
    cartel.style.padding = '10px';
    cartel.style.borderRadius = '10px';
    document.body.appendChild(cartel);

    setTimeout(() => {
        cartel.remove();
        window.location.href = '../index.html';
    }, 1000);
    } else {
        mensaje.textContent = "El mail o contraseña ingresados son incorrectos";
        mensaje.style.backgroundColor = "red";
        mensaje.style.display = "block";
    }
});
