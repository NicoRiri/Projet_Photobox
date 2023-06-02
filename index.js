import { loadPicture, loadRessource } from './photoloader.js';
import * as ui from "./ui.js";

function getPicture(id) {
    loadPicture(id)
        .then(photoData => {
            ui.displayPicture(photoData.photo.file);
            getCategorie(photoData)
            getComment(photoData)
        })
        .catch(error => {
            console.error('Erreur :', error.message);
        });
}

function getCategorie(info){
    loadRessource(`photos/${info.photo.id}/categorie/`)
        .then(res =>{
            console.log(res)
        })
}

function getComment(info){
    loadRessource(`photos/${info.photo.id}/comments/`)
        .then(res =>{
            console.log(res)
        })
}


getPicture(7)
