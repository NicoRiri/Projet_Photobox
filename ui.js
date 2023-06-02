import {imgSortie} from "./config.js";

export function displayPicture(img){
    document.getElementById("la_photo").firstElementChild.setAttribute("src", `${imgSortie}/large/${img}`);
}