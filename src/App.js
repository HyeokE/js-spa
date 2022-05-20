import Items from "./components/Items.js";

export default class App{
    constructor(target) {
        this.target = target;
        new Items(this.target);
    }
}

