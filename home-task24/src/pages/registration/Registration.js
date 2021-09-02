import React, {Component} from 'react';
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


class Registration extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: '',
            firstName: '',
            lastName: '',
            nickname: ''
        };
    }


    loginField = e => {
        this.setState({
            login: e.target.value
        });
    };

    passwordField = e => {
        this.setState({
            password: e.target.value
        });
    };

    nameField = e => {
        this.setState({
            firstName: e.target.value
        });
    };

    lastNameField = e => {
        this.setState({
            lastName: e.target.value
        });
    };

    nicknameField = e => {
        this.setState({
            nickname: e.target.value
        });
    };



    submitFormReg = () => {
        const {
            login,
            password,
            firstName,
            lastName,
            nickname
        } = this.state;

        const {
            onAuth
        } = this.props;

        fetch('http://143.198.136.212/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({
                email: login,
                password: password,
                firstName: firstName,
                lastName: lastName,
                nickname: nickname
            }),
            headers: {
                'content-type': 'application/json',
            }
        }).then(e => {
            if (e.status >= 400) {
                throw e;
            }
            return e;
        })
            .then(e => e.json())
            .then(({token}) => {
                document.location.href = '/login';
            });
    };


    render() {
        const {
            login,
            password,
            firstName,
            lastName,
            nickname
        } = this.state;
        return (
            <div className="forms-block">
                <p className="reg-message">If you have a username and password, please <Link to="/login">login</Link></p>
                <form id="form-registration" action="/" method="post">
                    <input type="text"  onInput={this.loginField} id="reg-email" className="form-input" placeholder="Enter email" value={login}/>
                    <input type="password" onInput={this.passwordField}  id="reg-pass" className="form-input" placeholder="Enter password" value={password}/>
                    <input type="text" onInput={this.nameField} id="reg-name" className="form-input" placeholder="Enter name" value={firstName}/>

                    <input type="text" onInput={this.lastNameField} id="reg-lastName" className="form-input" placeholder="Enter last name" value={lastName}/>
                    <input type="text" onInput={this.nicknameField} id="reg-nickName" className="form-input" placeholder="Enter nickname" value={nickname}/>
                    <button onClick={this.submitFormReg} id="reg-check-btn" type="button" title="Push me">
                        <i className="fa fa-user-plus" aria-hidden="true"></i> Registration
                    </button>
                </form>
            </div>
        );
    }
}

export default Registration;
