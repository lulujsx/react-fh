import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en 09-promesas',()=>{

    test('getHeroeByIdAsync debe retornar un heroe',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }); 
                done();
            });

    });

    test('getHeroeByIdAsync debe de retornar un error si heroe no existe',(done)=>{

        const id = 1000;
        getHeroeByIdAsync(id)
            .then((response)=>{
                expect(response).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el heroe ${id}`);

                done();
            });

    });
});