'use strict'
const inputs = document.querySelectorAll('input');
const inputPassword = document.querySelectorAll('input[type="password"]');
const rePassword = document.querySelector('input#repass');
const password = document.querySelector('input#pass');
const submit = document.querySelector('button');
const form = document.querySelector('form');
let passText = document.querySelector(".pass-text");


console.log(password.value, rePassword.value)
inputs.forEach(input => {

    input.addEventListener('input', () => {
        if(!input.value) input.style.border = 'none';
        if(input.value && !input.validity.valid) input.style.border = '1px solid red';
        if(input.value && input.validity.valid === true) input.style.border = '2px solid  green';
     })


})

// Give password an error class for a starter

    document.addEventListener('DOMContentLoaded', () => {
        inputPassword.forEach(input => {

            if(!input.value) input.style.border = '1px solid red'
        })
    })
    

    inputPassword.forEach(input => {
        input.addEventListener('input', (e) => {
            if(e.target) passText.innerText = "";
            if(password.value !== rePassword.value) {
                submit.disabled = true;
                passText.textContent = "*Passwords do not match";
                e.target.style.border = '1px solid red';
            }

            if(password.value === rePassword.value) {
                submit.disabled = false;
                input.style.border = '1px solid green !important';
            }
        })
    })



