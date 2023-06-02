import {imgSortie} from "./config.js";

export function displayPicture(img){
    document.getElementById("la_photo").firstElementChild.setAttribute("src", `${imgSortie}/small/${img}`);
}

export const insertCategorie = categorieData => {
    console.log(categorieData)
    document.querySelector("#la_categorie")
        .innerText = "categorie:"+categorieData.categorie.nom
}

export const insertComment = CommentData => {
    console.log(CommentData)
    CommentData.comments.forEach(com =>{
        document.querySelector("#les_commentaires")
            .innerText = com.pseudo+": "+com.content;
    })

}
