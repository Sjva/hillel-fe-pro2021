import React, {Component} from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            login: '',
            password: ''
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

    submitFormLogin = () => {
        const {
            login,
            password
        } = this.state;

        const {
            onAuth
        } = this.props;

        fetch('http://143.198.136.212/api/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
                email: login,
                password: password
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
                onAuth(token);
            });
    };


    render() {
        const {
            login,
            password
        } = this.state;
        return (
            <div className="forms-block">
                <p className="reg-message">If you do not have a username or password, please <a href="/">register</a></p>
                <form id="form-login" action="/" method="post">
                    <input type="text" onInput={this.loginField} id="input-login" className="form-input" title="Enter логин" placeholder="Enter login" value={login}/>
                    <input type="password" onInput={this.passwordField} id="input-pass" className="form-input" title="Enter пароль" placeholder="Enter password" value={password}/>
                    <button onClick={this.submitFormLogin} id="check-btn" type="button" title="Push me">
                        <i className="fa fa-sign-in" aria-hidden="true"></i>Login
                    </button>
                </form>
            </div>

        );
    }
}

export default Login;

// "email": "slavalevko@email.com",
//   "password": "levko",
