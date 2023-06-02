import {loadResource} from './photoloader.js';
import {apiEntree} from "./config.js";

function load() {
    fetch(loadResource({apiEntree}))
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Erreur lors de la récupération des données des photos.');
            }
        }).then(data => {
        resolve(data);
    })
        .catch(error => {
            reject(error);
        });
}