import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Pruebas en 11-async-await.js',()=>{

    //test('getImagen debe de retornar la URL de la imagen', async ()=>{
    test('getImagen debe de retornar error si no tenemos APIKey', async ()=>{
        const response = await getImagen();
        //console.log(url); 
        //expect(typeof url).toBe('string'); 
        expect(response).toBe("No se encontro la imagen")
    });
}); 