import {loadRessource} from './photoloader.js';


export function load() {
    return loadRessource("photos")
        .then(res => {
            return res;
        })
}

