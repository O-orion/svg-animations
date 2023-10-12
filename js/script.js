import { Cards } from "./Card.js";

// no carragemento da janela chamamos a instância do cards
window.onload = () => {
    let animaCards = new Cards();
    document.addEventListener('scroll', animaCards.scrollCards.bind(animaCards))
}
