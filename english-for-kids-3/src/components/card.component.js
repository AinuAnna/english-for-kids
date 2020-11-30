import cards from '../data/cards.data.js';
import cardsMain from '../data/cards.data.js';

//TODO
// function getDivWithClass(className) {
//     const element = document.createElement('div');
//     element.classList.add(className);
// }

function createCard(res) {
    const card = document.createElement("div");
    
    const cardClass = document.createElement("div");
    card.classList.add('card');
    card.appendChild(cardClass);

    const front = document.createElement("div");
    cardClass.classList.add('front');
    cardClass.appendChild(front);

    const cardImg = document.createElement("div");
    front.classList.add('card-img');
    front.appendChild(cardImg);
    const image = document.createTextNode(res.image);
    front.appendChild(image);

    const description = document.createElement("div");
    cardImg.classList.add('description');
    cardImg.appendChild(description);

    const descriptionText = document.createElement("div");
    description.classList.add('description-text');
    description.appendChild(descriptionText);

    const category = document.createTextNode(res.category);
    descriptionText.appendChild(category);

    const container = document.querySelector("#card");
    container.appendChild(card);
}
cardsMain.forEach(res => {
    createCard(res);
});


