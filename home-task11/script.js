
let listEl = document.querySelector("ul");
let inputEl = document.getElementById("input-text");
let pushBtnEl = document.getElementById("push-btn");

function createElementsItem (){
    let listLiEl = document.createElement("li");
    let myDate = new Date();
    let dataItemList = `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}`;

    // дбавить елементы в li.
    listLiEl.insertAdjacentHTML("afterBegin", `<input class="checkbox" type="checkbox"><span class="list-item">${inputEl.value}</span><pre class="data">${dataItemList}</pre><i class="fa fa-trash" aria-hidden="true"></i><i class="fa fa-clone" aria-hidden="true"></i>`);

    listEl.appendChild(listLiEl);
    inputEl.value = "";
}


// клик по странице для старта функций (зачеркнуть, удалить, копировать)
document.addEventListener("click", (event) => {
    let element = event.target;

    // запуск функций по клику на кнопку
    if (element === pushBtnEl) {
        if (!inputEl.value) return; //проверка на пуcтой инпут
        createElementsItem ();
    } else if (element.type === "checkbox") {  // клик на чекбокс
        if (element.checked) {
            element.nextSibling.classList.add("strikethrough");
        }
        else {
            element.nextSibling.classList.remove("strikethrough");
        }
    } else if (element.classList.contains('fa-trash')) { // удаляем строку по клику на корзину
        element.parentElement.remove();
    } else if (element.classList.contains('fa-clone')) {  // копируем li по клику на иконку копирования
        let cloneItem = element.parentElement.cloneNode(true);
        element.parentElement.parentElement.append(cloneItem);
        let myNewDate = new Date();
        cloneItem.childNodes[2].innerText = `${myNewDate.getDate()}/${myNewDate.getMonth() + 1}/${myNewDate.getFullYear()} ${myNewDate.getHours()}:${myNewDate.getMinutes()}`;
    }
});