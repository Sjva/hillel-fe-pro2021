
function Accordion(element) {
    /*
        Provide code here
        1 - блоки по-умолчанию должны быть закрыты
        2 - сделать следующие методы
            - toggle(index) - открываем/закрываем блок по индексу
            - addBlock(title, description) - добавляем новый блок
            - getOpenIndexes() - возвращает индексы открытых блоков
            - closeAll() - закрывает все блоки
            - openAll() - открывает все блоки
    */
    this.element = element;
    this.init = accordionInit;
    this.toggle = toggleItem;
    this.addBlock = addBlock;
    this._onItemClick = function (e) {
        console.dir(e.target);
        e.target.parentElement.classList.toggle('open');
    };
    this.element.addEventListener('click', this._onItemClick.bind(this))

}

function accordionInit() {
    Array.prototype.forEach.call(this.element.children, e => {
        e.classList.add('block');
        e.children[0].classList.add('title');
        e.children[1].classList.add('content');
    });
}

function toggleItem(index) {
    this.element.children[index].classList.toggle('open')
}

function addBlock(title, description) {
    this.element.insertAdjacentHTML('beforeEnd', `<div class="block"> <div class="title">${title}</div><div class="content">${description}</div></div>`)
}

const mainAccordion = new Accordion(document.getElementById('accordion'));
mainAccordion.init();

// mainAccordion.toggle(0);

setTimeout(() => {
    mainAccordion.addBlock('trtrtr', 'rtryjjjcdc')
},3000);