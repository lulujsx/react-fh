//Template string

const nombre = "Rory";
const apellido = "Vallejos";

//const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `
${ nombre } 
${ apellido }
${ 1 + 1 }
`; // comilla invertida : ALT + 96

console.log( nombreCompleto );

function getSaludo(nombre){
   // return 'Hola Mundo';
   return 'Hola ' + nombre;
}
console.log(`Este es un texto: ${ getSaludo( nombre ) }`);