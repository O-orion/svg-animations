import { Cards } from "./Card.js";
import { Icones } from "./Icones.js"

// no carragemento da janela chamamos a instância do cards
window.onload = () => {
    let animaCards = new Cards();
    let animaIcones =  new Icones(); 

    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))

    animaIcones.animaIcones()
}
