import { imgSortie} from "./config.js";

export function display_gallerie(gallerie) {

    gallerie.then(res => {
        console.log(res)
        res.photos.forEach(element => {
            let gall = document.createElement('img');
            gall.src = `${imgSortie}/small/${element.photo.file}`;
            document.body.appendChild(gall)
        })
    })


}