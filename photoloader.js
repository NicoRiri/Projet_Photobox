const loadPicture = function (idPicture) {
    fetch("https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api/photos/"+idPicture, {credentials : "include"})
        .then((result) => {
            if (result.ok){
                return result.json()
            } else {
                return Promise.reject(new Error("Réponse non okay"+result.statusText))
            }
        })
        .catch(function (e){
            console.log(e.statusText)
        })
}

export default loadPicture
