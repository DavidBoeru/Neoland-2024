//! ITERACION #1: Arrows

const suma = (a = 10, b = 5) => {
    console.log(`La suma de ${a} y ${b} es: ${a + b}`);
};

//* -- 1.1

console.log("Ejecutando la función sin pasar ningún parámetro:");
suma();

//* -- 1.2

console.log("Ejecutando la función pasando un solo parámetro:");
suma(7);

//* -- 1.3

console.log("Ejecutando la función pasando dos parámetros:");
suma(3, 8);

//! ITERACION #2: Destructuring

//* --2.1

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020};
const { title, gender, year } = game;
console.log("Title:", title);
console.log("Gender:", gender);
console.log("Year:", year);

//* --2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits;
console.log("Fruit 1:", fruit1);
console.log("Fruit 2:", fruit2);
console.log("Fruit 3:", fruit3);

//* --2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'};
};
const { name, race } = animalFunction();
console.log("Name:", name);
console.log("Race:", race);

//* --2.4

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020]};
const { name: carName, itv: [year1, year2, year3] } = car;
console.log("Car Name:", carName);
console.log("ITV Year 1:", year1);
console.log("ITV Year 2:", year2);
console.log("ITV Year 3:", year3);


//!  ITERACION #3: Spread Operator

//*  -- 3.1

const pointsList = [32, 54, 21, 64, 75, 43];
const pointsListCopy = [...pointsList];
console.log("Copia del array:", pointsListCopy);

//*  -- 3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log("Copia del objeto:", toyCopy);

//*  -- 3.3

const pointsList2 = [54,87,99,65,32];
const combinedPoints = [...pointsList, ...pointsList2];
console.log("Array combinado:", combinedPoints);

//*  -- 3.4

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};
const mergedToy = {...toy, ...toyUpdate};
console.log("Objeto fusionado:", mergedToy);

//*  -- 3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("Copia del array sin la posición 2:", colorsCopy);


//!  ITERACION #4: Map

//* -- 4.1

const users = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];
const names = users.map(user => user.name);
console.log("Nombres de usuarios:", names);

//* -- 4.2

const usersWithAnacleto = users.map(user => ({
    ...user,
    name: user.name.startsWith('A') ? 'Anacleto' : user.name
  }));
  console.log("Usuarios con Anacleto:", usersWithAnacleto);

//* -- 4.3

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];
const visitedCities = cities.map(city => ({
  ...city,
  name: city.isVisited ? city.name + ' (Visitado)' : city.name
}));
console.log("Ciudades visitadas:", visitedCities);


//! ITERACION #5: Filter

//* -- 5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const mayoresDe18 = ages.filter(age => age > 18);
console.log("Mayores de 18 años:", mayoresDe18);

//* -- 5.2

const pares = ages.filter(age => age % 2 === 0);
console.log("Números pares:", pares);

//* -- 5.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];
const lolStreamers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');
console.log("Streamers de League of Legends:", lolStreamers);

//* -- 5.4

const streamersConU = streamers.filter(streamer => streamer.name.includes('u'));
console.log("Streamers con 'u' en el nombre:", streamersConU);

//* -- 5.5

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const filteredStreamers = streamers.filter(streamer => {
  if (streamer.gameMorePlayed.includes('Legends')) {
    streamer.gameMorePlayed = streamer.age > 35 ? streamer.gameMorePlayed.toUpperCase() : streamer.gameMorePlayed;
    return true;
  }
  return false;
});

console.log("Streamers con 'Legends' en el juego:", filteredStreamers);

//* -- 5.6

const input = document.querySelector('input[data-function="toFilterStreamers"]');
input.addEventListener('input', function() {
  const value = this.value.toLowerCase();
  const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(value));
  console.log("Streamers filtrados:", filteredStreamers);
});

//* -- 5.7

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

document.querySelector('button[data-function="toShowFilterStreamers"]').addEventListener('click', function() {
  const input = document.querySelector('input[data-function="toFilterStreamers"]');
  const value = input.value.toLowerCase();
  const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(value));
  console.log("Streamers filtrados:", filteredStreamers);
});


//!  ITERACION #6: Find

//* -- 6.1

const numbers = [32, 21, 63, 95, 100, 67, 43];
const number100 = numbers.find(number => number === 100);
console.log("Número 100 encontrado:", number100);

//* -- 6.2

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];
const movie2010 = movies.find(movie => movie.date === 2010);
console.log("Película del año 2010:", movie2010);

//* -- 6.3

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const alienCucushumushu = aliens.find(alien => alien.name === 'Cucushumushu');
const mutationPorompompero = mutations.find(mutation => mutation.name === 'Porompompero');
const alienWithMutation = {...alienCucushumushu, mutation: mutationPorompompero};
console.log("Alien con la mutación Porompompero:", alienWithMutation);


//!  ITERACION #7: Reduce

//* -- 7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((acc, exam) => acc + exam.score, 0);
console.log("Total de las notas de todos los exámenes:", totalScore);

//* -- 7.2

const passedExamsScore = exams.filter(exam => exam.score >= 5).reduce((acc, exam) => acc + exam.score, 0);
console.log("Total de las notas de los exámenes de los alumnos aprobados:", passedExamsScore);

//* -- 7.3

const averageScore = exams.reduce((acc, exam) => acc + exam.score, 0) / exams.length;
console.log("Media de las notas de todos los exámenes:", averageScore);


//!   ITERACION #8: Bonus

//* -- 6.1

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
];

// Filtra los videojuegos por gender = 'RPG' usando .filter()
const rpgGames = videogames.filter(game => game.genders.includes('RPG'));

// Usa .reduce() para conseguir la media de sus .score
const totalScore2 = rpgGames.reduce((acc, game) => acc + game.score, 0);
const averageScore2 = totalScore2 / rpgGames.length;

console.log("Media de los scores de los videojuegos RPG:", averageScore2);