

//iteracion 1 mix for e includes

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

 let catergorias = [];

  for (const movie of movies) {
    movies.categories.forEach(categorias => {
        if(!categorias.includes(categorias)){
          categorias.push(categorias);
        }
    });
  }

  console.log(`categorias unicas: ${categorias}`);

  //iteracion 2 mix fors

const movies1 = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
//for...of
let totalVolumen = 0;
let cantidadSonidos = 0;

 for (const user of users) {
    for (const sound of object.values(user.avoritesSound)) {
        totalVolumen += sound.volume;
        cantidadSonidos++
    }
 }
 let media = totalVolumen / cantidadSonidos;
console.log(`Media utilizando for...of: ${media}`);

//for...in

let totalVolumen2 = 0;
let cantidadSonidos2 = 0;

for (const userIndex in users) {
   let user = users[userIndex];
   for (const soundIndex in user.favoritesSound) {
    let sound = user.favoritesSounds[soundIndex];
    totalVolumen += sound.volume;
    cantidadSonidos++;
   }
}
let media2 = totalVolumen / cantidadSonidos;
console.log("Media utilizando for...in:", media2);

//iteracion 3 mix fors

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let contadorSonidos = {};

for (const user of users) {
    for (const soundName in user.favoritesSound) {
        if (contadorSonidos[soundName]) {
            contadorSonidos[soundName]++;
        }else{
            contadorSonidos[soundName] = 1;
        }
    }
}

console.log("contador sonidos");
console.log(contadorSonidos);


let contadorSonidos2= {};

for (const userIndex in users) {
  let user = users[userIndex];
  for (const soundName in user.favoritesSounds) {
    if (contadorSonidos2[soundName]) {
      contadorSonidos2[soundName]++;
    } else {
      contadorSonidos2[soundName] = 1;
    }
  }
}

console.log("Contador de sonidos");
console.log(contadorSonidos2);

//iteracion 4 metodos findArrayIndex

let animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array,texto) {
   for (let i = 0; i < array.length; i++) {
    if (array[i] === texto) {
        return i;
    } else {
        return -1;
    }
    
   }
};
console.log(findArrayIndex(animales, "Caracol"));
console.log(findArrayIndex(animales, "Mosquito"));
console.log(findArrayIndex(animales, "elefante"));


//iteracion 5 funcion rollDice

function rollDice(numCaras){
let numAleatorio = math.random();
let resultado = math.floor(numAleatorio * numCaras);
return resultado;
}
let numCaras = 6; // Dado de 6 caras
let tirada = rollDice(numCaras);
console.log(`Resultado de la tirada: ${tirada}`);

//iteracion 6 funcion swap 

let personajes=['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swap(array,param1,param2) {
    if (param1 >=0 && param1 <array.length && param2 >=0 && param2 < array.length) {
        let temp = array[param1];
        array[param1] = array[param2];
        array[param2] = temp;
        return array;
    } else {
        console.log("");
        return array
    }
}
console.log(`array original: ${personajes}`);
let arrayModificado = swap(personajes,1,3);
console.log(`array modificado: ${arrayModificado}`);