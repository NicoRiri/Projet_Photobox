import { loadPicture, loadRessource } from './photoloader.js';
import * as ui from "./ui.js";

export function getPicture(id) {
    loadPicture(id)
        .then(photoData => {
            ui.displayPicture(photoData);
            getCategorie(photoData)
                .then(res =>{
                    ui.insertCategorie(res)
                })
            getComment(photoData)
                .then(res =>{
                    ui.insertComment(res)
                })

        })
        .catch(error => {
            console.error('Erreur :', error.message);
        });
}

function getCategorie(info){
    return loadRessource(`photos/${info.photo.id}/categorie/`)
        .then(res =>{
            return res;
        })
}

function getComment(info){
    return loadRessource(`photos/${info.photo.id}/comments/`)
        .then(res =>{
            return res;
        })
}
