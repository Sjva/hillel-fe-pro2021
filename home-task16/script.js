
    const loginEl = document.getElementById("input-login");
    const pasEl = document.getElementById("input-pass");
    const pushBtnEl = document.getElementById("check-btn");
    let listEl = document.querySelector("ul");

    // Проверка инпута на введенный текст
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

    // клик по кнопке формы
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
            listEl.classList.add("success");
        })
            .catch(e => {
                verMessageEl.innerText = `Ошибка при вводе логина или пароля.`;
                verMessageEl.classList.add("error");
                pasEl.value = "";
                throw new Error('Auth error'); //останаливает выполение ф-й при ошибке
            })
            .then(() => {
                return listUser();
            })
            .then(e => {
                addList(e);
            })
            .catch(e => {
            console.log("The list of users is not loaded for some reason")
        })

    });

    // получить список пользователей
    function listUser () {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://reqres.in/api/users?page=1");
            xhr.send();
            xhr.onload = (e) => {
                const response = JSON.parse(e.target.response);
                const status = e.target.status;

                if (status >= 200 && status < 400) {
                    resolve(JSON.parse(e.target.response));
                } else {
                    reject(JSON.parse(e.target.response));
                }
            };
        });
    }

    // функция для отрисовки списка юзеров
    function addList(response) {
        const itemTemplate = document.getElementById("item-template").innerHTML;

        return response.data.forEach(e => {
            let listLiEl = document.createElement("li");
            listLiEl.innerHTML = itemTemplate.replaceAll("{{ava}}", e.avatar).replaceAll("{{name}}", e.first_name).replaceAll("{{last_name}}", e.last_name);
            listEl.appendChild(listLiEl);
        });
    }


