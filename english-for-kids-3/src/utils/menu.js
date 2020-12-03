import { State } from '../state.js';

const mainPage = {
    category: 'Main Page',
    image: 'assets/img/main-page/home.jpg',
    newIconClass: 'fa-home',
}

export class Menu {
    constructor() {
        this.render();
        State.instance.subscribe(() => this.render());
    }

    render() {
        const container = document.querySelector("#sidebar");
        const state = State.instance.getState();

        const main = this.createMenu(mainPage);
        const elements = state.categories.map(c => this.createMenu(c));
        container.append(main, ...elements);
    }

    static openNav() {
        document.getElementById("sidebar").style.width = "300px";
    }

    static closeNav() {
        document.getElementById("sidebar").style.width = "0";
    }

    createMenu(res) {
        const menu = document.createElement('li');

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        menu.append(a);

        const icon = document.createElement('i');
        icon.classList.add('fas');

        icon.classList.add(res.newIconClass);

        const category = document.createTextNode(res.category);

        a.append(icon, category);

        const container = document.querySelector("#menuList");
        container.appendChild(menu);

        return container;
    }


} 