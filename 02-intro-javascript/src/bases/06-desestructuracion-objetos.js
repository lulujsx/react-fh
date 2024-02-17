// Desestructuración de objetos
// Asignacion Desestructurante
// documentacion -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    // rango: 'Soldado'
}

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const museContextO = ({nombre,edad,rango="Coder"}) => {
    
    // console.log(nombre,edad,rango);
    return {
        nombreHeroe: nombre,
        anios: edad,
        latlng: {
            lat: 14.666,
            lng: -14.666,
        }
    }
}

const {nombreHeroe,anios,latlng:{lat,lng}} = museContextO(persona);

console.log(nombreHeroe, anios, lat, lng);
