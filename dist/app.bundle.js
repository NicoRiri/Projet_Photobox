(() => {
  // config.js
  var apiEntree = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/api";
  var imgSortie = "https://webetu.iutnc.univ-lorraine.fr/www/canals5/phox/img";

  // photoloader.js
  function loadPicture(idPicture) {
    return new Promise((resolve, reject) => {
      fetch(`${apiEntree}/photos/${idPicture}`, { credentials: "include" }).then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Erreur lors de la r\xE9cup\xE9ration des donn\xE9es de la photo.");
        }
      }).then((photoData) => {
        resolve(photoData);
      }).catch((error) => {
        reject(error);
      });
    });
  }
  function loadRessource(uri) {
    return fetch(`${apiEntree}/${uri}`, { credentials: "include" }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(new Error(res.statusText));
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  // ui.js
  function displayPicture(img) {
    let photo = document.createElement("main");
    photo.id = "photo" + img.photo.id;
    photo.innerHTML = `
    <h1>Photo : ${img.photo.id}</h1>
    <button id="gallerie" onclick="window.location.href = 'index2.html';">gallerie</button>
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
  var insertCategorie = (categorieData) => {
    document.querySelector("#la_categorie").innerText = "categorie:" + categorieData.categorie.nom;
  };
  var insertComment = (CommentData) => {
    CommentData.comments.forEach((com) => {
      let li = document.createElement("li");
      li.innerText = com.pseudo + ": " + com.content;
      document.querySelector("#les_commentaires").append(li);
    });
  };

  // index.js
  function getPicture(id) {
    loadPicture(id).then((photoData) => {
      displayPicture(photoData);
      getCategorie(photoData).then((res) => {
        insertCategorie(res);
      });
      getComment(photoData).then((res) => {
        insertComment(res);
      });
    }).catch((error) => {
      console.error("Erreur :", error.message);
    });
  }
  function getCategorie(info) {
    return loadRessource(`photos/${info.photo.id}/categorie/`).then((res) => {
      return res;
    });
  }
  function getComment(info) {
    return loadRessource(`photos/${info.photo.id}/comments/`).then((res) => {
      return res;
    });
  }

  // gallery_ui.js
  function display_gallerie(gallerie) {
    const galleryContainer = document.querySelector("#gallery");
    galleryContainer.innerHTML = "";
    gallerie.then((res) => {
      res.photos.forEach((element) => {
        let gall = document.createElement("img");
        gall.src = `${imgSortie}/small/${element.photo.file}`;
        gall.setAttribute("data-photoId", element.photo.id);
        galleryContainer.appendChild(gall);
        gall.addEventListener("click", () => {
          const photoId = element.photo.id;
          getPicture(photoId);
        });
      });
    });
  }

  // gallery.js
  var next = "";
  var prev = "";
  var first = "";
  var last = "";
  function load() {
    return loadRessource(`photos`).then((res) => {
      next = res.links.next.href.replace("/www/canals5/phox/api/", "");
      prev = res.links.prev.href.replace("/www/canals5/phox/api/", "");
      first = res.links.first.href.replace("/www/canals5/phox/api/", "");
      last = res.links.last.href.replace("/www/canals5/phox/api/", "");
      return res;
    });
  }
  function goNext() {
    let pro = loadRessource(next);
    display_gallerie(pro);
    pro.then((res) => {
      next = res.links.next.href.replace("/www/canals5/phox/api/", "");
      prev = res.links.prev.href.replace("/www/canals5/phox/api/", "");
      first = res.links.first.href.replace("/www/canals5/phox/api/", "");
      last = res.links.last.href.replace("/www/canals5/phox/api/", "");
    });
  }
  function goPrev() {
    let pro = loadRessource(prev);
    display_gallerie(pro);
    pro.then((res) => {
      next = res.links.next.href.replace("/www/canals5/phox/api/", "");
      prev = res.links.prev.href.replace("/www/canals5/phox/api/", "");
      first = res.links.first.href.replace("/www/canals5/phox/api/", "");
      last = res.links.last.href.replace("/www/canals5/phox/api/", "");
    });
  }
  function goFirst() {
    let pro = loadRessource(first);
    display_gallerie(pro);
    pro.then((res) => {
      next = res.links.next.href.replace("/www/canals5/phox/api/", "");
      prev = res.links.prev.href.replace("/www/canals5/phox/api/", "");
      first = res.links.first.href.replace("/www/canals5/phox/api/", "");
      last = res.links.last.href.replace("/www/canals5/phox/api/", "");
    });
  }
  function goLast() {
    let pro = loadRessource(last);
    display_gallerie(pro);
    pro.then((res) => {
      next = res.links.next.href.replace("/www/canals5/phox/api/", "");
      prev = res.links.prev.href.replace("/www/canals5/phox/api/", "");
      first = res.links.first.href.replace("/www/canals5/phox/api/", "");
      last = res.links.last.href.replace("/www/canals5/phox/api/", "");
    });
  }

  // index2.js
  display_gallerie(load());
  document.querySelector("#previous_page").addEventListener("click", goPrev);
  document.querySelector("#next_page").addEventListener("click", goNext);
  document.querySelector("#first_page").addEventListener("click", goFirst);
  document.querySelector("#last_page").addEventListener("click", goLast);
})();
