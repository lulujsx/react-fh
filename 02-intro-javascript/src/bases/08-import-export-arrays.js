import heroes, {owners} from "../data/heroes";

console.log(heroes);

// Una función de callback es una función que se pasa a otra función como un argumento, 
// que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

export const getHeroeById = (id) => {
    const result = heroes.find((heroe)=> heroe.id === id);
    return result;
}

console.log(getHeroeById(2));

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe)=> heroe.owner === owner);
}

console.log(getHeroesByOwner('DC'));