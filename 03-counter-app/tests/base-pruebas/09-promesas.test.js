import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',()=>{

    test('getHeroeByIdAsync debe retornar un heroe',()=>{

        const id = 1;
        const heroe = getHeroeByIdAsync(id);
        console.log(heroe);
    });
});