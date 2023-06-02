import { loadPicture, loadRessource } from './photoloader.js';
import {displayPicture} from "./ui.js";

function getPicture(id) {
    loadPicture(id)
        .then(photoData => {
            console.log('Id :', photoData.photo.id);
            console.log('Titre :', photoData.photo.titre);
            console.log('URL :', photoData.photo.file);
            displayPicture(photoData.photo.file);
            getCategorie(photoData)
        })
        .catch(error => {
            console.error('Erreur :', error.message);
        });
}

function getCategorie(info){
    loadRessource(`photos/${info.photo.id}/categorie/`)
        .then(function(data) {})

}
getPicture(7)
