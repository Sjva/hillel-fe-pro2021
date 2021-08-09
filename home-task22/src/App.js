import React, { Component } from 'react';
import {
    Header,
    SunTweetForm,
    SunTweet,
    Sidebar
} from './components';

class App extends Component {
    render() {
        return <>
                <Header />
                <main>
                   <div className="container">
                      <div class="main-content">
                       <SunTweetForm />

                       <SunTweet />
                       <SunTweet />
                       <SunTweet />
                       <SunTweet />
                      </div>
                     <Sidebar />
                    </div>
                 </main>
            </>;
    }
}
export default App;