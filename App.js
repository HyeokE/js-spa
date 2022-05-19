import Component from './Component.js'
class App extends Component {
    setUp() {
        this.state = {items: [1,2,3,4]};
    }
    return() {
        const {items} = this.state;
        return `
        <div>${items.map((item)=>(
            `<div>${item}</div>`
        ))}</div>
        <button id="append">추가하기</button>
        `;
    }
    setEvent() {
        const {items} = this.state;
        this.target.querySelector('#append').addEventListener('click', () => {
            this.setState({items: [...items, items.length + 1]});
        })
    }
}
new App(document.querySelector('#app'));