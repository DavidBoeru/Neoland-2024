
//* -- 1.1

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ulCountries = document.createElement('ul');

countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ulCountries.appendChild(li);
});

document.body.appendChild(ulCountries);

//* -- 1.2

const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();

//* -- 1.3

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');

cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
});

printHereDiv.appendChild(ulCars);

//* -- 1.4

const countries2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

const containerDiv = document.createElement('div');

countries.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
    const img = document.createElement('img');
    img.src = country.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    containerDiv.appendChild(div);
});

document.body.appendChild(containerDiv);


//* -- 1.5

const btnDeleteLast = document.createElement('button');
btnDeleteLast.textContent = 'Eliminar último elemento';
btnDeleteLast.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    const lastDiv = divs[divs.length - 1];
    lastDiv.remove();
});

document.body.appendChild(btnDeleteLast);

//* -- 1.6

const divs = document.querySelectorAll('div');

divs.forEach((div, index) => {
    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Eliminar elemento';
    btnDelete.addEventListener('click', () => {
        div.remove();
    });
    div.appendChild(btnDelete);
});
