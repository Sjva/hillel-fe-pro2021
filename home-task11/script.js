
let listEl = document.querySelector("ul");
let inputEl = document.getElementById("input-text");
let pushBtnEl = document.getElementById("push-btn");

let dataItem = () => {
    let myDate = new Date();
    return `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}`;
};

function createElementsItem (){
    let listLiEl = document.createElement("li");
    const itemTemplate = document.getElementById("item-template").innerHTML;

    // дбавить елементы в li.
    listLiEl.innerHTML = itemTemplate.replaceAll("{{label}}", inputEl.value).replaceAll("{{date}}", dataItem());

    listEl.appendChild(listLiEl);
    inputEl.value = "";
}


// клик по странице для старта функций (зачеркнуть, удалить, копировать)
document.addEventListener("click", (event) => {
    let element = event.target;

    // запуск функций по клику на кнопку
    if (element.classList.contains("btn-submit")) {
        if (!inputEl.value) return; //проверка на пуcтой инпут
        createElementsItem ();
    } else if (element.type === "checkbox") {  // клик на чекбокс
        element.nextSibling.classList.toggle("strikethrough");
    } else if (element.classList.contains('fa-trash')) { // удаляем строку по клику на корзину
        element.parentElement.remove();
    } else if (element.classList.contains('fa-clone')) {  // копируем li по клику на иконку копирования
        let cloneItem = element.parentElement.cloneNode(true);
        listEl.append(cloneItem);
        cloneItem.childNodes[3].innerHTML = dataItem();
    }
});
