import cards from '../data/cards.data.js';
import cardsMain from '../data/cards.data.js';

//TODO
// function getDivWithClass(className) {
//     const element = document.createElement('div');
//     element.classList.add(className);
// }

function createCard(res) {
    const card = document.createElement("div");
    card.classList.add('card');

    const front = document.createElement("div");
    front.classList.add('front');
    card.appendChild(front);

    const cardImg = document.createElement("div");
    cardImg.classList.add('card-img');
    cardImg.style.backgroundImage = `url(${res.image})`;

    const description = document.createElement("div");
    description.classList.add('description');

    front.append(cardImg, description);

    const descriptionText = document.createElement("div");
    descriptionText.classList.add('description-text');
    description.appendChild(descriptionText);

    const descriptionTitle = document.createElement("div");
    descriptionTitle.classList.add('description-title');
    descriptionText.appendChild(descriptionTitle);

    const category = document.createTextNode(res.category);
    descriptionTitle.appendChild(category);

    const container = document.querySelector("#card");
    container.appendChild(card);
}
cardsMain.forEach(res => {
    createCard(res);
});


