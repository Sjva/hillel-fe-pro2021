
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

    // Отправка запроса
    function verificationMes (login, password){
        const requestBody = {
            email: login,
            password: password
        };

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "https://reqres.in/api/login");
            xhr.setRequestHeader("content-type", "application/json");
            xhr.send(JSON.stringify(requestBody));
            xhr.onload = (e) => {
                const status = e.target.status;
                if(status >= 200 && status < 400) {
                    resolve(JSON.parse(e.target.response))
                }else{
                    reject(JSON.parse(e.target.response));
                }
            }
        });
    }

    pushBtnEl.addEventListener("click", (e) => {
        const login = loginEl.value;
        const password = pasEl.value;
        const verMessageEl = document.getElementById("verification-mes");
        const formEl = document.getElementById("form-login");
        e.preventDefault();

        verificationMes(login, password).then((e) => {
            formEl.style.display = "none";
            verMessageEl.innerText = `Успешная верификация.`;
            verMessageEl.classList.add("success");
        }).catch(e => {
            verMessageEl.innerText = `Ошибка при вводе логина или пароля.`;
            verMessageEl.classList.add("error");
            pasEl.value = "";
        });
    });

