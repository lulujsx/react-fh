import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe('Pruebas en 08-imp-exp',()=>{

    test('getHeroeById debe retornar un heroe por ID',()=>{

        const id = 5;
        const heroe = getHeroeById(id); 
        console.log(heroe);

        expect(heroe).toEqual({
            id: 5,
            name: 'Wolverine',
            owner: 'Marvel'
        });

    });

    test('getHeroeById debe retornar undefined si no existe',()=>{
        const id = 666;
        const heroe = getHeroeById(id);

        //expect(heroe).toBe(undefined); undefined es considerado primitivo

        expect(heroe).toBeFalsy(); //que tenga un valor nulo(null)/negativo(false)


    });

    //Tarea en getHeroesByOwner
    //Debe de retornar un arreglo con los heroes de DC
    //length === 3
    //toEqual al arreglo filtrado

    //debe retornar un arreglo con los heroes de Marvel
    //length === 2

    test('getHeroesByOwner debe retornar un arreglo con los heroes de DC',()=>{

        const owner = 'DC';
        const heroes_dc = getHeroesByOwner(owner);
        //console.log(heroes_dc);

        expect(heroes_dc.length).toBe(3);
        expect(heroes_dc).toEqual([{"id": 1, "name": "Batman", "owner": "DC"}, {"id": 3, "name": "Superman", "owner": "DC"}, {"id": 4, "name": "Flash", "owner": "DC"}]);

    })

    test('getHeroesByOwner debe retornar un arreglo con los heroes de Marvel',()=>{

        const owner = 'Marvel';
        const heroes_marvel = getHeroesByOwner(owner);

        expect(heroes_marvel.length).toBe(2);
        expect(heroes_marvel).toEqual(heroes.filter((heroe) => heroe.owner === owner));

    })



})