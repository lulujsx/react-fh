const getImage = async () => {
    try{
        const apiKey = "Is7CQZJKtxNfjnM4HFJ2khaYnzw8b9nZ";
    
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await response.json();
        const {avatar_url} = data.data.user;
        // console.log(data.data);
        const img = document.createElement('img');
        img.src = avatar_url;
        document.body.append(img);

    } catch(error) {
        console.error(error);
    }
    
}

getImage()
