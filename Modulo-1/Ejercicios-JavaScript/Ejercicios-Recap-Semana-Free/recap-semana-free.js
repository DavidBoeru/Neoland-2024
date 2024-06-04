// ejercicio 1

for (let i = 5; i <=50; i +=5) {
    console.log(i);
}

// ejercicio 2

for (let i = 100; i >=0; i -= 5) {
    console.log(i);
}

//ejercicio 3

let numerosAleatorios = [
    10, 25, 23 , 60, 89, 45, 68, 90, 39, 22
]

console.log(numerosAleatorios);

// ejercicio 4

let	colores	= ["azul", "verde", "rosa", "naranja", "rojo", "marron"];

let color3 = colores[2];
console.log(color3);

//ejercicio 5

let	colores1 = ["azul", "verde", "rosa", "naranja", "rojo", "marron"];

 if (colores1.length > 0 ) {
    let primerColor = colores1[0];
    if (typeof primerColor === "string" && primerColor.length > 0) {
        console.log("primer caracter del primer string", primerColor.charAt(0));
    } else {
        console.log("el primer elemento del array no es una cadena o esta vacio");
    }
 }

 //ejercicio 6 

 let frase = ["las", "posiciones", "array", "se cuentan", "a partir", "del", "cero"];

console.log(frase);

//ejercicio 7 

let primerArray = ["hola", "me", "llamo", "David",];

let segundoArray = ["y", "tengo", 22, "años"];

let juntos = primerArray.concat(segundoArray);

console.log(juntos);

//ejercicio 8

let lista1 = [1,2,3,4,5,6];

let lista2 = [7,8,9,10,11,12];

function transElemento(lista1, lista2) {
    if(lista1.length >0 && lista2.length >0){
       let elementTrans = lista1.pop();
       lista2.push(elementTrans);
       console.log("elemento transferido:", elementTrans);
    }else{
        console.log("almenos uno de los arrays esta vacio");
    }
}

transElemento(lista1, lista2);

console.log(`array1 despues de la transferencia: ${lista1}`);

console.log(`array2 despues de la tranferencia: ${lista2}`);


//ejercicio 9 

let array1 = [1, 2, [3, 4]];
let array2 = [1, 2, [3, 4, [5, 6]]];

let nuevoArray1 = [].concat(...array1);
console.log(nuevoArray1);

let nuevoArray2 = array2.slice(0, 3).concat(array2[2].slice(2));
console.log(nuevoArray2);

let fewArray2 = array2.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatArray(val) : val), []);
console.log(fewtArray2);

//ejercicio 10

let	colores2 = ["azul",	"verde", "rosa", "naranja",	"rojo",	
"marron"];

 colores2.sort((a,b) => b.localeCompare(a));

 console.log(colores2);


 //ejercicio 11

 let numeros = [40,	100, 1,	5, 25, 10];	 
 
 numeros.sort(function(a, b) {
     return a - b;
 });

  console.log(numeros);

  //ejercicio 12

  function fibonacci(n) {
    if (n <= 0) {
        return []
    } else if(n === 0) {
        return [0];
    } else if(n ===1) {
        return [0,1];
    } else {
       let fibArray = [0,1];
       for (let i = 2; i< n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        
       }
        
       }
    }
      
    let resultadoFib = fibonacci(5);

    console.log(resultadoFib);


    //ejercicio 13

    function gradosFahrenheit(celsius) {
        let fahrenheit = (celsius * 1.8) + 32;
        return fahrenheit

    }

    let valorCelsius = 20;
    
    let resultado = gradosFahrenheit(valorCelsius);

    console.log(`${valorCelsius} grados celsius son ${resultado} grados fahrenheit`);

    //ejercicio 14

    let gradosFahrenheit = celsius => (celsius * 1.8) + 32;

    let valorCelsius2 = 20;

    let resultado2 = gradosFahrenheit(valorCelsius2);

    console.log(`${valorCelsius2} grados celsius son ${resultado2} grados fahrenheit`);

   //ejercicio 15

   function compLetras(frase) {
    if (frase === frase.toUpperCase()) {
        return `la frase ${frase} tiene todo mayuscula`
    } else if(frase === frase.toLowerCase()){
        return `la frase ${frase} tiene todo minuscula`
    }else{
      return `la frase ${frase} tiene mayusculas y minusculas`
    }
   }
   let fraseMayus = "BUENOS DIAS";

   compLetras(fraseMayus);

   //ejercicio 16

   function esPalindromo(frase) {
    let fraseMinuscula = frase.toLowerCase();
    let fraseSinEspacios = fraseMinuscula.replace.replace(/\s/g, '');
    let arrayFrase = fraseSinEspacios.split('');
    let arrayInvertido = arrayFrase.slice().reverse();

    let esPalindromo = JSON.stringify(arrayFrase) === JSON.stringify(arrayInvertido);
    return esPalindro;
   }

   function mostrarResultado(frase) {
    let resultado = esPalindromo(frase);
    if (resultado) {
        alert(`${frase} es un palíndromo.`);
    } else {
        alert(`${frase} no es un palíndromo.`);
    }
}
 
 let frasePalindromo = "A Mercedes, ese de crema.";
 let fraseNoPalindromo = "hola gente";

 mostrarResultado(frasePalindromo);
 mostrarResultado(fraseNoPalindromo);

 //ejercicio 17

 let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

 let empiezanPorM = dias.filter(function(dia){
     return dia.charAt(0).toLowerCase() === "m";

 });
 console.log(empiezanPorM);

 //ejercicio 18

 let num = [100, 2, 20, 35, 4, 44];

  num.sort(function(a,b){
    return a - b;
  });

  let menorDe10 = num.filter(function(numero){
return numero >10;
  });

  console.log(`en forma creciente ${num}`);
  console.log(`numeros menores de 10 ${menorDe10}`);

  //ejercicio 19

  function sumaNumeros(el) {
    let suma = el.reduce(function(acumulador,numero){
      return acumulador + numero;
    },0);
    return suma;
}

 let numeros3 = [10,12,4,6,100];
 let resultado3 = sumaNumeros(numeros3);

 console.log(`la suma de todos los numeros es: ${resultado3}`);


 //ejercicio 20

 function diferencia(array1,array2) {
    let combinado = new Set ([...array1,...array2]);
   let resultado = array1.filter(element => !combinado.has(element));
    return resultado; 
 }

 let a = [1,2,3,4];
 let b = [1,2];
let resultado4 = diferencia(a,b);
console.log(resultado4);


//ejercicio 21

let fruta = {
    tipo : "sandia",
    color : "verde",
    peso : 6,
};

console.log(`el tipo de fruta es: ${fruta.tipo}`);
console.log(`el color de la fruta es: ${fruta.color}`);
console.log(`el peso de la fruta es: ${fruta.peso} kg`);

//ejercicio 22


let jugadores = [
    { nombre: "Ana", puntos: [21, 3, 5, 78, 25], temporada: false },
    { nombre: "Pedro", puntos: [55, 66, 77, 55, 66], temporada: true },
    { nombre: "Juan", puntos: [12, 83, 40, 65, 10], temporada: true },
    { nombre: "Marta", puntos: [24, 90, 36, 78, 20], temporada: true },
  ];

  function mejorJugador(jugadores) {
    let mejorJugador1 = null;
    let mejorMedia = 0;
    for (const jugador of jugadores) {
        let puntuacionMedia = jugador.puntos.reduce((total,punto)=>total + punto, 0)
        jugador.puntos.length;
        if (mediaPuntuacion > mejorMedia) {
            mejorMedia = mediaPuntuacion;
            mejorJugador = jugador.nombre;
          }

    }
  }
  const estaInscrito = jugadores.find(
    (jugador) => jugador.nombre === mejorJugador
  ).temporada;

//ejercicio 23

let estudiante = {Bea: 5, Sebas: 9, Laura: 5, Elena: 8, Liviu: 6, Raul: 4, Angel: 2};
function calcularMedia(estudiantes) {
    let sumaNotas = 0;
    let media;
    let resultadoAlumnos = {};
    for(let estudiante in estudiantes){
        sumaNotas += estudiantes[estudiante];
    }
    media = sumaNotas/Object.keys(estudiantes).length;
    media *= 1.1;
    media = Math.floor(media);
    console.log(media);
    for(let estudiante in estudiantes){
        if (estudiantes[estudiante] >= 5) {
            resultadoAlumnos[estudiante] = `Aprobado con un ${estudiantes[estudiante]*media/10} sobre ${media}`
        } else {
            resultadoAlumnos[estudiante] = `Suspenso con un ${estudiantes[estudiante]*media/10} sobre ${media}`
        }
    }
    return resultadoAlumnos;
}
console.log(calcularMedia(estudiante));