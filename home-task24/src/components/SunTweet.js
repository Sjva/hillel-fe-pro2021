import React, {Component} from 'react';

const SunTweet = ({ content,  likes = 0, onLikeClick, id, firstName, lastName, nickname, createdAt}) => (
    <div className="tweet nes-container is-rounded p20">
        <div className="avatar">
            <img className="nes-avatar is-rounded is-large" alt="ava" src="./images/ava.jpg" />
        </div>
        <div className="content-suntweet-user">
            <div className="suntweet-user-data">
                <ul className="tweet-title">
                    <li className="tweet-name">{firstName} {lastName}</li>
                    <li className="tweet-nickname">{nickname}</li>
                    <li className="tweet-date nes-text">{createdAt}</li>
                </ul>
                <p className="tweet-content">{content}</p>
            </div>
            {/*<ul className="tweet-actions-container">*/}
                {/*<li className="tweet-action" onClick={() => onLikeClick(id)}>*/}
                    {/*<i className="fa fa-heart-o action-icon" aria-hidden="true"></i>*/}
                    {/*<span className="counter">{likes}</span>*/}
                {/*</li>*/}

                {/*<li className="tweet-action">*/}
                    {/*<i className="fa fa-reply-all action-icon" aria-hidden="true"></i>*/}
                    {/*<span className="counter">3</span>*/}
                {/*</li>*/}

                {/*<li className="tweet-action">*/}
                    {/*<i className="fa fa-comment action-icon" aria-hidden="true"></i>*/}
                    {/*<span className="counter">8</span>*/}
                {/*</li>*/}
            {/*</ul>*/}
        </div>
    </div>
);

export default SunTweet;
