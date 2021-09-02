import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';
import {
    Header,
    Sidebar,
    Feed
} from '../../components';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            tweets: [],
            email: ''
        };
    }

    componentDidMount() {
        fetch('http://143.198.136.212/api/tweets/public')
            .then(e => e.json())
            .then(e => {

                this.setState({
                    tweets: e.filter(tweet => tweet.authorId.email === this.props.login).reverse()
                });
            });
    }

    onTweetAdd = tweet => {

        this.setState({
            tweets: [tweet, ...this.state.tweets]
        });
    };

    render() {
        return <>
            <Header />
            <main>
                <div className="container">
                    <div className="main-content">
                        <Feed tweets={this.state.tweets}/>
                    </div>
                    <Sidebar onLogout={this.props.onLogout} />
                </div>
            </main>
        </>;
    }
}

export default Profile;