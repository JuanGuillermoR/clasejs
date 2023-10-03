/*let nombre = 'Juan';
console.log(`Hola tú nombre es ${nombre}`);

const numero = 10+2;
console.log(`La suma de 10 + 2 es: ${numero}`);


//----------------------------------
// 1. Entrada del programa Input (I)
//----------------------------------
var items = [2, 3, 5, 7, 11, 13, 17]; // index es el cursor
console.log("en la posición 3 tenemos: " + items[0])
//----------------------------------
// 2. Definición función de búsqueda
//----------------------------------
// a la función de busqueda le vamos a pasar dos parametros: el array items y el elemento_a_buscar y el objetivo del algoritmo es encontrar en que posición está el elemento_a_buscar
function search(items, elemento_a_buscar) { 
  var posicion = 0;
  var total_itemsArray = items.length;
  while (posicion < total_itemsArray) {
    if (items[posicion] == elemento_a_buscar) { 
      return posicion;
    }
    posicion++; // sumar de a un
  }
  return null;
}
//-----------------------------------------------------------
// 3. Ejecución de la función: buscar un elemento en el array
//-----------------------------------------------------------
var resultado = search(items, 13);
console.log(resultado)
//----------------------------------
// 4. Salida del programa Output (O)
//----------------------------------
var resultadoHTML = document.createElement('p');
resultadoHTML.id = 'resultado'; // Asigna el ID que desees
if (resultado !== null) {
  resultadoHTML.textContent = 'El elemento se encuentra en la posición: ' + resultado + ' :)';
} else {
  resultadoHTML.textContent = 'El elemento no se encuentra en el array :(';
}
document.body.appendChild(resultadoHTML);
*/

/*
const letters = ['a','b','c','d']
let i = 2;
// No pondre la palabra return ya que al solo tener una linea el return se hace implicitamente
const f = function(){
    console.log('Un elemento',letters[i]);
}
letters.forEach(f);

const sumar = (a,b) =>{
    console.log('resultado = ', a + b); 
}
sumar(10,20);
*/

//  02/10/2023
// Método fill() con una función tradicional
const arreglo = [1, 2, 3, 4, 5];
arreglo.fill(0, 2, 4); // Llena el arreglo con 0 desde el índice 2 al 3
console.log(arreglo); // Salida: [1, 2, 0, 0, 5]

// Método fill() con una función de flecha
const arreglo2 = [1, 2, 3, 4, 5];
const fillArrow = (arr, value, start, end) => arr.fill(value, start, end);
fillArrow(arreglo2, 0, 2, 4); // Salida: [1, 2, 0, 0, 5]
console.log(arreglo2);
