import { State } from '../state.js'

export class CardList {
    constructor() {
        this.render();
        State.instance.subscribe(() => this.render());
    }

    render() {
        const container = document.querySelector("#cards");
        const state = State.instance.getState();

        const elements = state.cards.map(c => this.createCard(c));
        container.append(...elements);
    }

    createCard(res) {
        const cards = this.getDivWithClass('card');

        const front = this.getDivWithClass('front');
        cards.appendChild(front);

        const cardImg = this.getDivWithClass('card-img');
        cardImg.style.backgroundImage = `url(${res.image})`;

        const description = this.getDivWithClass('description');

        front.append(cardImg, description);

        const descriptionText = this.getDivWithClass('description-text');
        description.appendChild(descriptionText);

        const descriptionTitle = this.getDivWithClass('description-title');
        descriptionText.appendChild(descriptionTitle);

        const word = document.createTextNode(res.word);
        descriptionTitle.appendChild(word);

        const rtButton = this.getDivWithClass('rotate-btn')
        description.appendChild(rtButton);

        const rotate = document.createElement('img');
        rotate.setAttribute('src', 'assets/img/rotate-img.svg');
        rotate.classList.add('btn-rotate');
        rtButton.appendChild(rotate);

        const back = this.getDivWithClass('back');
        cards.appendChild(back);

        const cardImg2 = this.getDivWithClass('card-img');
        cardImg2.style.backgroundImage = `url(${res.image})`;

        const description2 = this.getDivWithClass('description');

        back.append(cardImg2, description2);

        const descriptionText2 = this.getDivWithClass('description-text');
        description2.appendChild(descriptionText2);

        const descriptionTitle2 = this.getDivWithClass('description-title');
        descriptionText2.appendChild(descriptionTitle2);

        const translation = document.createTextNode(res.translation);
        descriptionTitle2.appendChild(translation);

        const container = document.querySelector("#cards");
        container.appendChild(cards);
    }

    getDivWithClass(className) {
        const element = document.createElement('div');
        element.classList.add(className);
        return element;
    }
    rotateCards() {
        let rotateButton = this.querySelector('.rotate-btn');
        let front = this.rotate.querySelector('.front');
        let back = this.rotate.querySelector('back');

        rotateButton.addEventListener('click', function () {
            front.classList.add('front-rotate');
            back.classList.add('back-rotate');
        });
        this.card.addEventListener('mouseleave', function () {
            front.classList.remove('front-rotate');
            back.classList.remove('back-rotate');
        });
    }

}
