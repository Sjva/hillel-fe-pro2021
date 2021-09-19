import React, { Component } from 'react';

class SunTweetForm extends Component {
    render() {
        return (
            <div className="form-suntweet p20">
            <p>Tell the world about yourself.</p>
               <form method="dialog">
                <textarea id="textarea_field" className="nes-textarea"></textarea>
                <button className="suntweet-btn btn">Send suntweet</button>
              </form>
            </div>
        );
    }
}

export default SunTweetForm;