
export const getImagen = async() => {

    try {

        const apiKey = '';//'Is7CQZJKtxNfjnM4HFJ2khaYnzw8b9nZ';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
       return "No se encontro la imagen";
    }
    
    
    
}

 getImagen();



