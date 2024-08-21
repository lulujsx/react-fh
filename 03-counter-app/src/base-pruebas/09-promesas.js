import { getHeroeById } from './08-imp-exp'


export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getHeroeById( id );
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( 'No se pudo encontrar el héroe' );
            }
        }, 1000 ) //cuando la promesa se resuelve, en 2 segundos despues tenemos el heroe que se encontro
                  //o sino tenemos un mensaje de error
    
    });


}


getHeroeByIdAsync(1)
    .then( console.log )
    .catch( console.warn );