
    let listEl = document.querySelector("ul");
    let inputEl = document.getElementById("input-text");
    let pushBtn = document.getElementById("push-btn");

    pushBtn.onclick = () => {
        let listLiEl = document.createElement("li");
        listLiEl.innerText = inputEl.value;
        listEl.appendChild(listLiEl);
        inputEl.value = "";
    };
