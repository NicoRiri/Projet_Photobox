import { loadPicture, loadRessource } from './photoloader.js';
import { loadPicture } from './photoloader.js';
import {displayPicture} from "./ui.js";

function getPicture(id) {
    loadPicture(id)
        .then(photoData => {
            console.log('Id :', photoData.photo.id);
            console.log('Titre :', photoData.photo.titre);
            console.log('URL :', photoData.photo.file);
            displayPicture(photoData.photo.file);
        })
        .catch(error => {
            console.error('Erreur :', error.message);
        });
}

function getCategorie(info){
    const cat = loadRessource(`photos/${info.photo.id}/categorie/`)
    console.log(cat.categorie.nom)

}
getPicture(7)
getCategorie((loadPicture(7).photo.id))
