import Component from "../../Component.js";

export default class Items extends Component {
    setup () {
        this.state = { items: ['item1', 'item2'] };
    }
    template () {
        const { items } = this.state;
        return `
        <section>
          <ul>
            ${items.map((item, key) => `<li>${item}<button class="deleteButton" data-index="${key}">삭제하기</button></li>`).join('')}
          </ul>
          <button class="addButton">추가하기</button>
        </section>
    `
    }
    setEvent () {
        this.addEvent('click', '.addButton', ({ target }) => {
            const {items} = this.state;
            this.setState({ items: [...items, 'item' + (items.length + 1)] });
        })
        this.addEvent('click', '.deleteButton', ({ target }) => {
            const items = [...this.state.items];
            items.splice(target.dataset.index, 1);
            this.setState({ items });
        })
    }
}