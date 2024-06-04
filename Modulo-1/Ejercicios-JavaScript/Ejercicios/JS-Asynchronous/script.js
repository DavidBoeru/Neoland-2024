
//!   ITERACION #1: Fetch

//* -- 1.1

fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));


//* -- 1.2

const fetchButton = document.getElementById('fetchButton');
const nameInput = document.getElementById('nameInput');
const resultsDiv = document.getElementById('results');

fetchButton.addEventListener('click', () => {
    const name = nameInput.value;
    fetch(`${baseUrl}?name=${name}`)
        .then(response => response.json())
        .then(data => {
           
        })
        .catch(error => console.error('Error:', error));
});

//* -- 1.3

const nameInput2 = document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const container = document.createElement('div');
document.body.appendChild(container);

button.addEventListener('click', () => {
    const name = nameInput2.value;
    fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const { name, age } = data;
            const paragraph = document.createElement('p');
            paragraph.textContent = `El nombre ${name} tiene un ${age} porciento de ser de ${name}.`;
            container.appendChild(paragraph);
        })
        .catch(error => console.error(error));
});

//*  -- 1.4 

button.addEventListener('click', () => {
    const name = nameInput.value;
    fetch(`https://api.agify.io?name=${name}`)
        .then(response => response.json())
        .then(data => {
            const { name, age } = data;
            const paragraph = document.createElement('p');
            paragraph.textContent = `El nombre ${name} tiene un ${age} porciento de ser de ${name}.`;
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                container.removeChild(paragraph);
                container.removeChild(deleteButton);
            });
            container.appendChild(paragraph);
            container.appendChild(deleteButton);
        })
        .catch(error => console.error(error));
});


//!  ITERACION #2: async-await

//* -- 2.1

const runTimeOut = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    });

    await promise;
    console.log('Time out!');
};

runTimeOut();

//* -- 2.2

const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const characters = await response.json();
    console.log(characters);
};

getCharacters();