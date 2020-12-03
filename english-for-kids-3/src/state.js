import { cards, cardsMain } from "./data/cards.data.js";


export class State {
    _state = {
        isTrain: true,
        // if there is no selected category then we on the "main" page
        selectedCategory: null,
        categories: cardsMain,
        cards: cards,
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
    }

    getState() {
        return this._state;
    }

    static get instance() {
        return this._instance || (this._instance = new State());
    }
}
