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

const btnFormEl = document.getElementById('add-text-btn');
const btnOpenAccEl = document.getElementById('open-all-blocks');
const btnCloseAccEl = document.getElementById('close-all-blocks');
const blockAccEl = document.getElementsByClassName('block');

function Accordion(element) {
    this.element = element;
    this.init = accordionInit;
    this.toggle = toggleItem;
    this.addBlock = addBlock;
    this.btnOpenEl = btnOpenEl;
    this.btnCloseEl = btnCloseEl;
    this.getOpenIndexes = getOpenIndexes;
    this._onItemClick = function (e) {
        e.target.parentElement.classList.toggle('open');
        console.log(mainAccordion.getOpenIndexes()); //index array open blocks
    };
    this.element.addEventListener('click', this._onItemClick.bind(this))

}
// add class in html element
function accordionInit() {
    Array.prototype.forEach.call(this.element.children, e => {
        e.classList.add('block');
        e.children[0].classList.add('title');
        e.children[1].classList.add('content');
    });
}
// add class open
function toggleItem(index) {
    this.element.children[index].classList.toggle('open');
}

// add elem html in new accordion block
function addBlock(title, description) {
    this.element.insertAdjacentHTML('beforeEnd', `<div class="block"> <div class="title">${title}</div><div class="content">${description}</div></div>`)
}

// add form text in new accordion block
 btnFormEl.addEventListener('click', (e) => {
    const titleFormEl = document.getElementById('title-text');
    const contentFormEl = document.getElementById('content-text');

    e.preventDefault();

    if (!titleFormEl.value || !contentFormEl.value) return;
    mainAccordion.addBlock(titleFormEl.value, contentFormEl.value);
     titleFormEl.value = "";
     contentFormEl.value = "";
});

// open all blocks
function btnOpenEl() {
    btnOpenAccEl.addEventListener ('click', () => {
        Array.prototype.forEach.call(blockAccEl, e => {
            e.classList.add('open');
            console.log(mainAccordion.getOpenIndexes()); //index array open blocks
        });
    });
}

// close all blocks
function btnCloseEl() {
    btnCloseAccEl.addEventListener('click', () => {
        Array.prototype.forEach.call(blockAccEl, e => {
            e.classList.remove('open');
        });
    });
}

// get index open blocks
function getOpenIndexes() {
    let elements = document.querySelectorAll('open');
    let indexOpenBlocks = [];
    for (let i = 0; i <  blockAccEl.length; i++) {
        if(blockAccEl[i].classList.contains('open')){
            indexOpenBlocks.push(i);
        }
    }
    return indexOpenBlocks;
}

const mainAccordion = new Accordion(document.getElementById('accordion'));
mainAccordion.init();
mainAccordion.btnOpenEl();
mainAccordion.btnCloseEl();

