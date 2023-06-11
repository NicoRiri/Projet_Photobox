import { imgSortie } from "./config.js";
import {loadPicture} from "./photoloader.js";
import * as ui from "./ui.js";

export function display_gallerie(gallerie) {
    const galleryContainer = document.querySelector('#gallery');
    galleryContainer.innerHTML = "";

    gallerie.then(res => {
        res.photos.forEach(element => {
            let gall = document.createElement('img');
            gall.src = `${imgSortie}/small/${element.photo.file}`;
            gall.setAttribute('data-photoId', element.photo.id);
            galleryContainer.appendChild(gall);
        });
    });
}