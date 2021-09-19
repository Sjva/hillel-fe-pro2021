import React, { Component } from 'react';

import {
    Home,
    Login,
    Registration
} from './pages';



class App extends Component {
    constructor() {
        super();
        this.state = {
            isAuth: !!localStorage.getItem('token')
        };
    }

    onLogin = (token) => {
        localStorage.setItem('token', token);
        this.setState({
            isAuth: true
        });
    };

    onLogout = () => {
        localStorage.removeItem('token');
        this.setState({
            isAuth: false
        });
    };

    onRegistration = (token) => {
        this.setState({
            isAuth: true
        });
    };

    render() {
        const { isAuth } = this.state;
        return <>
            { isAuth ? <Home onLogout={this.onLogout} /> : <Login onAuth={this.onLogin} />  }
            { isAuth ? <Home onLogout={this.onLogout} /> : <Registration onAuth={this.onRegistration} />  }
            </>;
    }
}
export default App;