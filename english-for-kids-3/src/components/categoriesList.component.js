import { State } from "../state.js";

export class CategoriesList {
    constructor() {
        this.render();
        State.instance.subscribe(() => this.render());
    }

    render() {
        const container = document.querySelector("#categories");
        const state = State.instance.getState();
        const isVisible = state.selectedCategoryId == null;

        container.innerHTML = "";
        if (!isVisible) {
            return;
        }

        const elements = state.categories.map(c => this.renderCategory(c));
        container.append(...elements);
    }

    renderCategory(res) {
        const card = this.getDivWithClass('card');
        card.onclick = () => {
            State.instance.setCategory(res.categoryId);
        }
        card.setAttribute("level", res.level);

        const front = this.getDivWithClass('front');
        card.appendChild(front);

        const cardImg = this.getDivWithClass('card-img');
        cardImg.style.backgroundImage = `url(${res.image})`;

        const description = this.getDivWithClass('description');

        front.append(cardImg, description);

        const descriptionText = this.getDivWithClass('description-text');
        description.appendChild(descriptionText);

        const descriptionTitle = this.getDivWithClass('description-title');
        descriptionText.appendChild(descriptionTitle);

        const category = document.createTextNode(res.category);
        descriptionTitle.appendChild(category);

        return card;
    }

    getDivWithClass(className) {
        const element = document.createElement('div');
        element.classList.add(className);
        return element;
    }
}
