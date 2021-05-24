
    const loginEl = document.getElementById("input-login");
    const pasEl = document.getElementById("input-pass");
    const pushBtnEl = document.getElementById("check-btn");

    document.querySelectorAll("input").forEach(input => {
        input.addEventListener("blur", () => {
            if (!loginEl.value || !pasEl.value) {
                pushBtnEl.setAttribute("disabled", "disabled");
            } else {
                pushBtnEl.removeAttribute("disabled", "disabled");
            }
        });
    });

    pushBtnEl.addEventListener("click", (e) => {
        const verMessageEl = document.getElementById("verification-mes");
        const formEl = document.getElementById("form-login");

        e.preventDefault();
        if(loginEl.value === "admin" && pasEl.value === "password123"){
            formEl.style.display = "none";
            verMessageEl.innerText = `Успешная верификация.`;
            verMessageEl.classList.add("success");
        }else{
            verMessageEl.innerText = `Ошибка при вводе логина или пароля.`;
            verMessageEl.classList.add("error");
            pasEl.value = "";
        }
    });

