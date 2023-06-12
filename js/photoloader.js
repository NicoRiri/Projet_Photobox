import {apiEntree} from './config.js';

export function loadPicture(idPicture) {
    return new Promise((resolve, reject) => {
        fetch(`${apiEntree}/photos/${idPicture}`, { credentials: 'include' })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erreur lors de la récupération des données de la photo.');
                }
            })
            .then(photoData => {
                resolve(photoData);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function loadRessource(uri){
    return fetch(`${apiEntree}/${uri}`, { credentials: 'include' })
        .then(res =>{
            if (res.ok){
                return res.json()
            } else {
                return Promise.reject(new Error(res.statusText))
            }
        })
        .catch(error =>{
            console.log(error)
        })
}