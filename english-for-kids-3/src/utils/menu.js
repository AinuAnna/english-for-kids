import { State } from '../state.js';

const mainPage = {
    text: 'Main Page',
    category: null,
    categoryId: null,
    newIconClass: 'fa-home',
}

export class Menu {
    constructor() {
        this.render();
        State.instance.subscribe(() => this.render());
        document.getElementById("openBtn").addEventListener("click", () => this.openNav());
        document.getElementById("closeBtn").addEventListener("click", () => this.closeNav());
    }

    render() {
        const container = document.querySelector("#menuList");
        const state = State.instance.getState();

        const sideBar = document.getElementById("sidebar");
        state.isMenuOpened ? sideBar.classList.add('opened') : sideBar.classList.remove('opened');

        container.innerHTML = "";
        const elements = [mainPage, ...state.categories].map(c => this.createMenu(c, state.selectedCategoryId));
        container.append(...elements);
    }

    openNav() {
        State.instance.setMenuState(true);
    }

    closeNav() {
        State.instance.setMenuState(false);
    }

    createMenu(res, selectedCategoryId) {
        const menu = document.createElement('li');

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        menu.append(a);

        if (res.categoryId === selectedCategoryId) {
            a.classList.add("active");
        }

        const icon = document.createElement('i');
        icon.classList.add('fas');

        icon.classList.add(res.newIconClass);

        const category = document.createTextNode(res.category || res.text);

        a.append(icon, category);

        a.onclick = (e) => {
            //clean anchor
            e.preventDefault();
            State.instance.setCategory(res.categoryId);
            State.instance.setMenuState(false);
        }

        return menu;
    }


} 