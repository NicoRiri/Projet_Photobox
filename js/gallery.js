import {loadRessource} from './photoloader.js';
import {display_gallerie} from "./gallery_ui.js";

let next = ""
let prev = ""
let first = ""
let last = ""

export function load() {
    return loadRessource(`photos`)
        .then(res => {
            next = res.links.next.href.replace("/www/canals5/phox/api/", "")
            prev = res.links.prev.href.replace("/www/canals5/phox/api/", "")
            first = res.links.first.href.replace("/www/canals5/phox/api/", "")
            last = res.links.last.href.replace("/www/canals5/phox/api/", "")
            return res;
        })
}

export function goNext() {
    let pro = loadRessource(next)
    display_gallerie(pro)
    pro.then(res => {
        next = res.links.next.href.replace("/www/canals5/phox/api/", "")
        prev = res.links.prev.href.replace("/www/canals5/phox/api/", "")
        first = res.links.first.href.replace("/www/canals5/phox/api/", "")
        last = res.links.last.href.replace("/www/canals5/phox/api/", "")
    })
}



export function goPrev() {
    let pro = loadRessource(prev)
    display_gallerie(pro)
    pro.then(res => {
        next = res.links.next.href.replace("/www/canals5/phox/api/", "")
        prev = res.links.prev.href.replace("/www/canals5/phox/api/", "")
        first = res.links.first.href.replace("/www/canals5/phox/api/", "")
        last = res.links.last.href.replace("/www/canals5/phox/api/", "")
    })
}

export function goFirst() {
    let pro = loadRessource(first)
    display_gallerie(pro)
    pro.then(res => {
        next = res.links.next.href.replace("/www/canals5/phox/api/", "")
        prev = res.links.prev.href.replace("/www/canals5/phox/api/", "")
        first = res.links.first.href.replace("/www/canals5/phox/api/", "")
        last = res.links.last.href.replace("/www/canals5/phox/api/", "")
    })
}

export function goLast() {
    let pro = loadRessource(last)
    display_gallerie(pro)
    pro.then(res => {
        next = res.links.next.href.replace("/www/canals5/phox/api/", "")
        prev = res.links.prev.href.replace("/www/canals5/phox/api/", "")
        first = res.links.first.href.replace("/www/canals5/phox/api/", "")
        last = res.links.last.href.replace("/www/canals5/phox/api/", "")
    })
}