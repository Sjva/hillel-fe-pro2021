import { checkUserCredentials } from '../../api.js';
import Component from "../../core/Component.js"

export class LoginFormComponent extends Component{
    constructor(template, entryId, onSuccess) {
        super(template, entryId);
        this.onSuccess = onSuccess;

        this.loginInputEl = this.getIdEl('login-input');
        this.passwordInputEl = this.getIdEl('password-input');

        this.errorInfo = this.getIdEl('error-message');
        this.loginInputEl.addEventListener('input', this.validate);
        this.passwordInputEl.addEventListener('input', this.validate);

        this.getIdEl('sign-in-btn')
            .addEventListener('click', this.onSignInClick.bind(this));
    }

    validate(evtObject) {
        const inputEl = evtObject.target;
        if (!inputEl.value) {
            inputEl.classList.add('is-error');
        } else {
            inputEl.classList.remove('is-error');
        }
    }

    onSignInClick() {
        const login = this.loginInputEl.value;
        const password = this.passwordInputEl.value;
        this.errorInfo.classList.add('hidden');
        
        checkUserCredentials(login, password).then(e => {
            this.onSuccess(e);
        }).catch((e) => {
            console.log(e);
            this.errorInfo.classList.remove('hidden');
        });
    }
}