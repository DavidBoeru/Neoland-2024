//*  -- 1.1

const btnToClick = document.getElementById('btnToClick');

btnToClick.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});

//*  -- 1.2

const inputFocus = document.querySelector('.focus');

inputFocus.addEventListener('focus', () => {
    console.log('Valor del input en focus:', inputFocus.value);
});

//*  -- 1.3

const inputValue = document.querySelector('.value');

inputValue.addEventListener('input', () => {
    console.log('Valor del input en input:', inputValue.value);
});