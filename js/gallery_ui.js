import {imgSortie} from "./config.js";
import {getPicture} from "./index.js";


export function display_gallerie(gallerie) {
    const galleryContainer = document.querySelector('#gallery');
    galleryContainer.innerHTML = "";

    gallerie.then(res => {
        res.photos.forEach(element => {
            let gall = document.createElement('img');
            gall.src = `${imgSortie}/small/${element.photo.file}`;
            gall.setAttribute('data-photoId', element.photo.id);
            galleryContainer.appendChild(gall);
            gall.addEventListener('click', () => {
                const photoId = element.photo.id;

                getPicture(photoId);
            });
        });
    })
    }