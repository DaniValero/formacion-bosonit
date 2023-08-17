// EJERCICIO 1
// Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
  { id: 1, name: "Pepe" },
  { id: 2, name: "Juan" },
  { id: 3, name: "Alba" },
  { id: 4, name: "Toby" },
  { id: 5, name: "Lala" },
];

console.log(arrNames[2]);

// EJERCICIO 2
// Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, "", undefined, 3, null, "test"];

let arrayClean = []

for (i = 0; i < arrDirty.length; i++) {
  if (arrDirty[i]) {
    arrayClean.push(arrDirty[i])
  }
}

console.log(arrayClean)

// Ejercicio 3
// Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Paris", country: "France", capital: true },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Rome", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

const resultado = arrCities.filter(ciudad => ciudad.capital)

console.log(resultado)

// Ejercicio 4
// Dado tres arrays de números, sacar en un nuevo array la intersección de estos. 

const arrNumber1 = [1, 2, 3];
const arrNumber2 = [1, 2, 3, 4, 5];
const arrNumber3 = [1, 4, 7, 2];

const mixArr = arrNumber1.concat(arrNumber2).concat(arrNumber3)



let interArray = [];


for (let i = 0; i < mixArr.length; i++) {
  

  if (
    arrNumber1.includes(mixArr[i]) &&
    arrNumber2.includes(mixArr[i]) &&
    arrNumber3.includes(mixArr[i])
  ) {
    interArray.push(mixArr[i]);
  }

}

console.log([...new Set(interArray)])


// Ejercicio 5
// Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
// Ejemplo: {city: "Logroño", isSpain: "true"}

const arrCities2 = [
  { city: "Logroño", country: "Spain", capital: false },
  { city: "Bordeaux", country: "France", capital: false },
  { city: "Madrid", country: "Spain", capital: true },
  { city: "Florence", country: "Italy", capital: true },
  { city: "Oslo", country: "Norway", capital: true },
  { city: "Jaén", country: "Spain", capital: false },
];

const cities = arrCities2.filter((ciudad) => !ciudad.capital && ciudad.country === "Spain");

cities.map((e) => {
  e.isSpain = true
  delete e.country
  delete e.capital
})

console.log(cities)


// Ejercicio 6
// Crea una función que redondee un número float a un número específico de decimales. 
// La función debe tener dos parámetros: 
// Primer parámetro es un número float con x decimales
// Según parámetro es un int que indique el número de decimales al que redondear
// Evitar usar el método toFixed()

// Ejemplo de uso de la función:
// const roundedResult = roundTo(2.123, 2);
// console.log(roundedResult); // 2.12


// const roundedResult = roundTo(1.123456789, 6);
// console.log(roundedResult); // 1.123457

function redondeo(numero, decimales) {

  // Math.round(numero * (decimales * 10)) / (10 * decimales)
  const resultado = parseFloat(numero).toPrecision(decimales + 1)

  return resultado
}

console.log(redondeo(1.123456789, 6));



// Ejercicio 7
// Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
// La fundación debe tener dos parámetros:
// Primer parámetro es un objeto con x número de campos y valores
// Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro
// Ejemplo de uso de la función:

// const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')


// console.log(result); // {a: 1, c: 3}




