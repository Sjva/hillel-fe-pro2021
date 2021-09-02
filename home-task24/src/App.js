import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import {
    Home,
    Profile,
    Login,
    Registration,

} from './pages';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: !!localStorage.getItem('token'),
            login: localStorage.getItem('login')
        };
        this.saveUserEmail = this.saveUserEmail.bind(this);
        const login = '';

    }

    saveUserEmail(login) {
        this.setState({
            login: login
        })
    }

    onLogin = (token, login) => {
        localStorage.setItem('token', token);
        localStorage.setItem('login', login);
        this.setState({
            isAuth: true,
            login: login
        });
    };

    onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        this.setState({
            isAuth: false,
            login: ''
        });
    };

    onRegistration = (token) => {
        this.setState({
            isAuth: true,
        });
    };

    render() {
        const { isAuth} = this.state;
        const saveUserEmail = this.saveUserEmail;

        return <Router>
            <Switch>
                <Route path='/' exact>
                    {isAuth ? <Home onLogout={this.onLogout} /> : <Redirect to='/login' /> }
                </Route>
                <Route path='/profile'>
                    {isAuth ? <Profile login={this.state.login} onLogout={this.onLogout}  /> : <Redirect to='/login' /> }
                </Route>
                <Route path='/login'>
                    {isAuth ? <Redirect to='/' /> : <Login saveUserEmail={saveUserEmail.bind(this)} onAuth={this.onLogin} />}
                </Route>
                <Route path='/registration'>
                    {isAuth ? <Redirect to='/login' /> : <Registration onAuth={this.onRegistration} />}
                </Route>
            </Switch>
        </Router>;
    }
}
export default App;