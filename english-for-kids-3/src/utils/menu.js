import { State } from '../state.js';

const mainPage = {
    text: 'Main Page',
    category: null,
    image: 'assets/img/main-page/home.jpg',
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
        sideBar.style.width = state.isMenuOpened ? "300px" : "0";

        container.innerHTML = "";
        const elements = [mainPage, ...state.categories].map(c => this.createMenu(c, state.selectedCategory));
        container.append(...elements);
    }

    openNav() {
        State.instance.setMenuState(true);
    }

    closeNav() {
        State.instance.setMenuState(false);
    }

    createMenu(res, selectedCategory) {
        const menu = document.createElement('li');

        const a = document.createElement('a');
        a.setAttribute('href', '#');
        menu.append(a);
        if (res.category === selectedCategory) {
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
            State.instance.setCategory(res.category);
            State.instance.setMenuState(false);
        }

        return menu;
    }


} 