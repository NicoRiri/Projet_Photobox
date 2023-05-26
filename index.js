import { loadPicture } from './photoloader.js';

function getPicture(id) {
    loadPicture(id)
        .then(photoData => {
            console.log('Id :', photoData.photo.id);
            console.log('Titre :', photoData.photo.titre);
            console.log('URL :', photoData.photo.file);
        })
        .catch(error => {
            console.error('Erreur :', error.message);
        });
}

getPicture(7);
