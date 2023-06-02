import {imgSortie} from "./config.js";
import {display_gallerie} from "./gallery_ui.js";

export function displayPicture(img) {
    let photo = document.createElement('main');
    photo.id = 'photo' + img.photo.id;
    photo.innerHTML = `
    <h1>Photo : ${img.photo.id}</h1>
    <button id="remove_picture">supprimer</button>
    <button id="gallerie">gallerie</button>
    <section id="la_photo">
        <img src="${imgSortie}/small/${img.photo.file}">
        <h4>${img.photo.titre}</h4>
        <p>${img.photo.descr}</p>
        <p>${img.photo.type}, ${img.photo.width}x${img.photo.height}</p>
        <h4 id="la_categorie"></h4>
        <h4>commentaires : </h4>
        <ul id = "les_commentaires">
  </ul>

</section>
</main>
    `;
    document.body.innerHTML = photo.innerHTML;
}



export const insertCategorie = categorieData => {
    console.log(categorieData)
    document.querySelector("#la_categorie")
        .innerText = "categorie:"+categorieData.categorie.nom
}

export const insertComment = CommentData => {
    console.log(CommentData)
    CommentData.comments.forEach(com => {
        let li = document.createElement("li")
        li.innerText = com.pseudo+": "+com.content;
        document.querySelector("#les_commentaires").append(li)
    })



}
