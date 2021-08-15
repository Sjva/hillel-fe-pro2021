import React, { Component } from 'react';
import {
    Header,
    SunTweetForm,
    SunTweet,
    Sidebar
} from '../../components';


class Home extends Component {

    render() {
        return <>
            <Header />
            <main>
                <div className="container">
                    <div className="main-content">
                        <SunTweetForm />

                        <SunTweet />
                        <SunTweet />
                        <SunTweet />
                        <SunTweet />
                    </div>
                    <Sidebar onLogout={this.props.onLogout} />
                </div>
            </main>
        </>;
    }
}

export default Home;