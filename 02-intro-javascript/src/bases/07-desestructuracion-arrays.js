const personajes = ["Goku","Vegeta","Trunks"];

const [,,personaje3] = personajes;

console.log(personaje3);

const retornaArreglo = () => {
    return ["ABX",123];
}

const [letras,numeros] = retornaArreglo();

console.log(letras,numeros);

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre


const museState = (valor) => {
    return [valor,()=>{console.log("hola mundix")}];
}

const [nombre,setNombre] = museState('Goku');

console.log(nombre);
setNombre();