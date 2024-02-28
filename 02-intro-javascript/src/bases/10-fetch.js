const apiKey = "Is7CQZJKtxNfjnM4HFJ2khaYnzw8b9nZ";

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( response => response.json())
    .then(({data})=> {
        const {url} = data;
        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    })
    .catch(console.warn);