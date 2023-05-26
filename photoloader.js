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
