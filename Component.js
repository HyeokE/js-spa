export default class Component {
    constructor (target) {
        this.target = target;
        this.setup();
        this.render();
        this.setEvent();
    }
    setup () {};
    template () { return ''; }
    render () {
        this.target.innerHTML = this.template();
    }
    setEvent () {}
    addEvent (eventType, selector, callback) {
        const children = [...this.target.querySelector(selector)];
        const isTarget = (target) => {
           return children.includes(target) || this.target.contains(selector)
        }
        this.target.addEventListener(eventType, event => {
            if (isTarget(event.target)) {
                callback(event);
            }
        });
    }

    setState (newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
}