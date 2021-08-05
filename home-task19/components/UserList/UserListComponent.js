import Component from "../../core/Component.js";
import renderTemplate from "../../core/utils/render.js";
import { deleteUser, createUser, updateUser } from '../../api.js';



export class UserListComponent extends Component {
    constructor(template, entryId, onLogOut) {
        super(template, entryId);

        this.getElementById('logout-btn').addEventListener('click', onLogOut);

        this.state = {
            list: [],
            user: {}
        };

        this.addListener('#list', 'click', e => {
            e.target.classList.contains('delete') && this.onDelete(e);
            e.target.classList.contains('update') && this.onUpdateOpen(e);
        });

        this.addListener('#create-user-btn', 'click', e => {
            this.setState({
                user: {
                    first_name: '',
                    last_name: ''
                }
            });
            this.openUserModal('create');
        });

        this.addListener('#user-form', 'click', e => {
            if (e.target.classList.contains('is-primary')) {
                e.preventDefault();
                if (e.target.classList.contains('create')) {
                    this.onCreate(e);
                }
                else {
                    this.onUserUpdateConfirm(e);
                }
            }
        });
    }

    onCreate(evt) {
        const { user } = this.state;

        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;

        createUser(name, job).then(e => {
            this.state.list.push({
                'id': this.state.list.length + 1,
                'first_name': e.name,
                'last_name': '',
                'avatar': './images/ava.jpg'
            });
            this.setState({
                list: this.state.list,
            });

            this.closeUserModal();
        }).catch((e) => {
            console.log(e);
            this.errorMessageEl.classList.remove('hidden');
        });
    }

    onUserUpdateConfirm(evt) {
        const { user } = this.state;

        const name = this.realQuerySelector('#name_field').value;
        const job = this.realQuerySelector('#job_field').value;


        updateUser(user.id, name, job).then(e => {
            document.querySelector("li[data-id='" + user.id + "'] span").innerHTML = e.name;
            this.closeUserModal();
        }).catch((e) => {
            console.log(e);
            this.errorMessageEl.classList.remove('hidden');
        });

    }

    onDelete(evt) {
        const id = evt.target.parentElement.dataset['id'];

        deleteUser(id).then(e => {
            this.setState({
                list: this.state.list.filter(e => +e.id !== +id),
            });
        });
    }

    openUserModal(button) {
        const userFormEl = this.getRealElementById('user-form');
        userFormEl.querySelector('button.is-primary').classList.add(button);
        userFormEl.showModal();

    }

    closeUserModal() {
        const userFormEl = this.getRealElementById('user-form');
        userFormEl.close();
    }

    onUpdateOpen(evt) {
        const id = evt.target.parentElement.dataset['id'];

        this.setState({
            user: this.state.list.find(e => +e.id === +id)
        });

        this.openUserModal();
    }

    render() {
        const { list, user } = this.state;

        super.render();

        const listEl = this.getRealElementById('list');
        const liTpl = this.querySelector('#list > li').outerHTML;

        const userFormEl = this.getRealElementById('user-form');
        const userFormTpl = this.querySelector('#user-form').innerHTML;

        userFormEl.innerHTML = renderTemplate(userFormTpl, user);

        listEl.innerHTML = list.reduce((tpl, e) => {
            return tpl + renderTemplate(liTpl, e);
        }, '');
    }

}


