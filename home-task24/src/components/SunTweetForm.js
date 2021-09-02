import React, { Component } from 'react';

class SunTweetForm extends Component {
    constructor() {
        super();
        this.state = {
            content: ''
        };
    }

    onContentInput = e => {
        this.setState({
            content: e.target.value

        });
    };

    onTweetSubmit = () => {
        const token = localStorage.getItem('token');
        const {
            content
        } = this.state;
        fetch('http://143.198.136.212/api/tweets', {
            method: 'POST',
            body: JSON.stringify({
                content
            }),
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(e => e.json())
            .then(e => {
                console.log(e);
                this.setState({
                    content: ''
                });
                this.props.onCreate(e);
            })
            .catch(e => {
                console.error(e);
                console.log(authorId.lastName)
            });
    };



    render() {
        const {
            content
        } = this.state;
        return (

            <div className="form-suntweet p20">
            <p>Tell the world about yourself.</p>
               <form method="dialog">
                <textarea
                          className="nes-textarea"
                          value={content}
                          onInput={this.onContentInput}
                ></textarea>
                <button onClick={this.onTweetSubmit} type="button" className="suntweet-btn btn">Send suntweet</button>
              </form>
            </div>
        );
    }
}

export default SunTweetForm;