const inputs = document.querySelectorAll('input');



inputs.forEach(input => {

    input.addEventListener('input', () => {

        if(input.value && input.validity.valid === false) input.style.border = '1px solid red';
        if(input.value && input.validity.valid === true) input.style.border = '2px solid  green';

    })


})

