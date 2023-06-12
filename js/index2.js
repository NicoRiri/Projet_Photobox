import {display_gallerie} from "./gallery_ui.js";
import {goFirst, goLast, goNext, goPrev, load} from "./gallery.js";

display_gallerie(load())

document.querySelector("#previous_page").addEventListener('click', goPrev)
document.querySelector("#next_page").addEventListener('click', goNext)
document.querySelector("#first_page").addEventListener('click', goFirst)
document.querySelector("#last_page").addEventListener('click', goLast)