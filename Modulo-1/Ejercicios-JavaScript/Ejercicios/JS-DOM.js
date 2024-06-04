
//!   Iteración #1: Interacción con el DOM

 /* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="showme">Pillame!</button>
		<h1 id="pillado">Aqui estoy 8)</h1>
		<p>Soy el power ranger Amarillo</p>
    <p>Soy el power ranger Rojo</p>
    <p>Soy el power ranger Azul</p>
    <p>Soy el power ranger Negro</p>
		<h4 class="pokemon">Bulbasaur</h4>
    <h4 class="pokemon">Charmander</h4>
    <h4 class="pokemon">Pikachu</h4>
    <h4 class="pokemon">Squirtle</h4>
		<span data-function="testMe">Batman</span>
    <span data-function="testMe">Robin</span>
    <span data-function="testMe">Rick</span>
    <span data-function="testMe">Morty</span>
</body>
</html> */ 

//* -- 1.1

const button = document.querySelector('.showme');
console.log(button);

//* -- 1.2

const h1 = document.querySelector('#pillado');
console.log(h1);

//* -- 1.3

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

//* -- 1.4

const pokemons = document.querySelectorAll('.pokemon');
console.log(pokemons);

//* -- 1.5

const elements = document.querySelectorAll('[data-function="testMe"]');
console.log(elements);

//* -- 1.6

const thirdCharacter = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdCharacter);


//!  Iteración #2: Modificando el DOM

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
	<h2 class="fn-insert-here"></h2>
	<p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
  <p>No me elimines!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p class="fn-remove-me">Eliminame!</p>
  <p>No me elimines!</p>
	<div></div><div></div>
	<div class="fn-insert-here"></div>
  <div class="fn-insert-here"></div>
</body>
</html> */

//* -- 2.1

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

//* -- 2.2

const divWithP = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'Soy un párrafo dentro de un div.';
divWithP.appendChild(p);
document.body.appendChild(divWithP);

//* -- 2.3

const divWithSixP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const p = document.createElement('p');
  p.textContent = `Soy el párrafo número ${i + 1}.`;
  divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

//* -- 2.4

const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

//* -- 2.5

const h2 = document.querySelector('h2.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub';

//* -- 2.6

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
  const li = document.createElement('li');
  li.textContent = app;
  ul.appendChild(li);
});
document.body.appendChild(ul);

//* -- 2.7

const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
  element.remove();
});

//* -- 2.8

const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
const divs = document.querySelectorAll('div');
const secondDiv = divs[1];
document.body.insertBefore(pMiddle, secondDiv);

//* -- 2.9

const divsWithClass = document.querySelectorAll('.fn-insert-here');
divsWithClass.forEach(div => {
  const p = document.createElement('p');
  p.textContent = 'Voy dentro!';
  div.appendChild(p);
});
