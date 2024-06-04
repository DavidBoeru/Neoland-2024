
 //iteracion 1 usa includes

 let products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

  for (let i = 0; i < array.length; i++) {
    
    if (products[i].includes("camiseta")){
        console.log(products);
    }
  }



  //iteracion 2 condicionales avanzados

  let alumnos = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

 function verificarAprobacion(alumnos){
    for(let i = 0; i < alumnos.length; i++){
  let alumn = alumns[i]
  let approvedQuarters = [alumn.T1, alumn.T2, alumn.T3].filter(Boolean);
  alumn.isApproved = approvedQuarters.length >= 2;
  console.log(`${alumn.name}: ${alumn.isApproved ? 'Aprobado' : 'No Aprobado'}`);

    }
 }

  verificarAprobacion(alumnos);


  //iteracion 3  probando for...of

  let placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

  for (const lugares of placesToTravel) {
    console.log(lugares);
  }

   // iteracion 4 probando for...in


   const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

 for (const datos in alien) {
    console.log(`${datos}: ${alien}`);
 }

  //iteracion 5 probando for

  const placesToTravel1 = [
    {id: 5, name: 'Japan'},
    {id: 11, name: 'Venecia'},
    {id: 23, name: 'Murcia'},
    {id: 40, name: 'Santander'},
    {id: 44, name: 'Filipinas'},
    {id: 59, name: 'Madagascar'}
    ]
     
    for (let i = placesToTravel1.length - 1; i >= 0; i--) {
        if (placesToTravel1[i].id === 11 || placesToTravel1[i].id === 40) {
            placesToTravel1.splice(i,1);
        }
        
    }

    console.log(placesToTravel);

    //iteracion 6 mixed for...of e includes

    const toys = [
        {id: 5, name: 'Buzz MyYear'}, 
        {id: 11, name: 'Action Woman'}, 
        {id: 23, name: 'Barbie Man'}, 
        {id: 40, name: 'El gato con Guantes'},
        {id: 40, name: 'El gato felix'}
        ]

        for (const juguetes of toys) {
            if (toys.name.includes("gato")) {
                let index = toys.indexOf(juguetes);
                toys.splice(index,1);
            }
        }

        console.log(toys);


        //iteracion 7  for...of avanzado

        const popularToys = [];
        const toys1 = [
            {id: 5, name: 'Buzz MyYear', sellCount: 10}, 
            {id: 11, name: 'Action Woman', sellCount: 24}, 
            {id: 23, name: 'Barbie Man', sellCount: 15}, 
            {id: 40, name: 'El gato con Guantes', sellCount: 8},
            {id: 40, name: 'El gato felix', sellCount: 35}
        ]

        for (const juguetes of toys1) {
            if (toys1.sellCount > 15) {
                popularToys.push(juguetes)
            }
        }
	
      console.log(popularToys);