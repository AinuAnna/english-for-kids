import { State } from '../state.js';

export class Menu {
    constructor() {
        this.render();
        State.instance.subscribe(() => this.render());
    }

    render() {
        const container = document.querySelector("#sidebar");
        const state = State.instance.getState();

        const elements = state.categories.map(c => this.createMenu(c));
        container.append(...elements);
    }
    openNav() {
        document.getElementById("sidebar").style.width = "300px";
    }

    closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }

    createMenu(res) {
        const menu = document.createElement('li');

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        menu.append(a);

        const icon = document.createElement('i');
        icon.style.backgroundImage = `url(${res.menuIcon})`;
        icon.classList.add('fas');

        const category = document.createTextNode(res.category);

        a.append(icon, category);

        const container = document.querySelector("#menuList");
        container.appendChild(menu);

        return container;
    }


} 