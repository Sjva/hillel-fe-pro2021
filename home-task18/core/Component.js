export default class Component {
    constructor(template, entryId) {
        const el = document.createElement('div');
        el.insertAdjacentHTML('afterbegin', template);
        this._componentEl = el;
        this.entryEl = document.getElementById(entryId);
    }

    getIdEl(id){
        return this._componentEl.querySelector(`#${id}`);
    }

    render() {
        this.entryEl.insertAdjacentElement('afterbegin', this._componentEl);
    }

    dispose() {
        this._componentEl.remove();
    }
}