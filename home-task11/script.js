let listEl = document.querySelector("ul");
let inputEl = document.getElementById("input-text");
let pushBtnEl = document.getElementById("push-btn");
let myDate = new Date();
const dataItem = `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}`;

function createElementsItem (){
    let listLiEl = document.createElement("li");
    listLiEl.innerHtml = `
        <input class="checkbox" type="checkbox">
        <span class="list-item"></span>
        <pre class="data"></pre>
        <i class="fa fa-trash" aria-hidden="true"></i>
        <i class="fa fa-clone" aria-hidden="true"></i>
     `;

    // добавил span в li  с текстом инпута
    let listSpanEl = document.getElementsByClassName("list-item");
    listSpanEl.innerText = inputEl.value;

    // дбавить дату
    let listDataEl = document.getElementsByClassName("data");
    listDataEl.innerText = dataItem;

    listEl.appendChild(listLiEl);
    inputEl.value = "";
}

const clickElementItem = event => {
    let element = event.target;
    // запуск функций по клику на кнопку
    if (element === pushBtnEl) {
        if (!inputEl.value) return; //проверка на пуcтой инпут
        createElementsItem ();
    } else if (element.type === "checkbox") {      // клик на чекбокс
        if (element.checked) {
            element.nextSibling.classList.add("strikethrough");
        }
        else {
            element.nextSibling.classList.remove("strikethrough");
        }
    }else if (element.classList.contains('fa-trash')) {    // удаляем строку по клику на корзину
        element.parentElement.remove();
    }else if (element.classList.contains('fa-clone')) {      // копируем li по клику на иконку копирования
        let cloneItem = element.parentElement.cloneNode(true);
        element.parentElement.parentElement.append(cloneItem);
        cloneItem.childNodes[2].replace = (dataItem, dataItem);
    }
};
listEl.addEventListener('click', clickElementItem);