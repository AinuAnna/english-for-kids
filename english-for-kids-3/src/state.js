import { cards, cardsMain } from "./data/cards.data.js";


export class State {
    _state = {
        isMenuOpened: false,
        isTrain: true,
        // if there is no selected category then we on the "main" page
        selectedCategory: null,
        categories: cardsMain,
        cards: [],
    };

    _listeners = [];

    // takes listener and write it in new array of listeners
    subscribe(listener) {
        this._listeners.push(listener);
        return () => {
            this._listeners = this._listeners.filter(x => x !== listener);
        }
    }

    update(state) {
        this._state = state;
        this._listeners.forEach(x => x(this._state));
        console.log(this._state);
    }

    getState() {
        return this._state;
    }

    setCategory(category) {
        this.update({
            ...this._state,
            selectedCategory: category,
            cards: cards[category] || [],
        });
    }

    setMenuState(isOpened) {
        this.update({
            ...this._state,
            isMenuOpened: isOpened,
        })
    }

    static get instance() {
        return this._instance || (this._instance = new State());
    }
}
