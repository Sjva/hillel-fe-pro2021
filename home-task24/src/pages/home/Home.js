import React, { Component } from 'react';
import {
    Header,
    SunTweetForm,
    Sidebar,
    Feed
} from '../../components';


class Home extends Component {
    constructor() {
        super();
        this.state = {
            tweets: []
        };
    }

    componentDidMount() {
        fetch('http://143.198.136.212/api/tweets/public')
            .then(e => e.json())
            .then(e => {
                this.setState({
                    tweets: e.reverse()
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
                        <SunTweetForm onCreate={this.onTweetAdd }/>
                        <Feed tweets={this.state.tweets}/>
                    </div>
                    <Sidebar onLogout={this.props.onLogout} />
                </div>
            </main>
        </>;
    }
}

export default Home;