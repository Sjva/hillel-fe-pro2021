let listEl = document.querySelector("ul");
let inputEl = document.getElementById("input-text");
let pushBtnEl = document.getElementById("push-btn");

function createElementsItem (){
    let listLiEl = document.createElement("li");

    // дбавить чекбокс.
    listLiEl.insertAdjacentHTML("afterBegin", `<input class="checkbox" type="checkbox">`);

    // создал li и добавил в него span  с текстом инпута
    let listSpanEl = document.createElement("span");
    listSpanEl.classList.add("list-item");
    listLiEl.append(listSpanEl);
    listSpanEl.innerText = inputEl.value;

    // дбавить дату
    let myDate = new Date();
    let listDataEl = document.createElement("pre");
    listDataEl.classList.add("data");
    listLiEl.append(listDataEl);
    listDataEl.innerText = `${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}`;

    // удалить и копировать.
    listLiEl.insertAdjacentHTML("beforeEnd", `<i class="fa fa-trash" aria-hidden="true"></i><i class="fa fa-clone" aria-hidden="true"></i>`);

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
    }

    // клик на чекбокс
    if (element.type === "checkbox") {
        if (element.checked) {
            element.nextSibling.classList.add("strikethrough");
        }
        else {
            element.nextSibling.classList.remove("strikethrough");
        }
    }

    // удаляем строку по клику на корзину
    if (element.classList.contains('fa-trash')) {
        element.parentElement.remove();
    }

    // копируем li по клику на иконку копирования
    if (element.classList.contains('fa-clone')) {
        let cloneItem = element.parentElement.cloneNode(true);
        let copyData = new Date();
        element.parentElement.parentElement.append(cloneItem);
        cloneItem.childNodes[2].innerText = `${copyData.getDate()}/${copyData.getMonth() + 1}/${copyData.getFullYear()} ${copyData.getHours()}:${copyData.getMinutes()}`;
    }
});

