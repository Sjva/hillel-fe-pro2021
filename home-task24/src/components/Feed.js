import React, { Component } from 'react';
import SunTweet from "./SunTweet";

class Feed extends Component {
    // onTweetLike = (id) => {
        // const {tweets} = this.state;
        // const index = tweets.findIndex(e => e.id === id);
        // tweets[index].likes++;
        // this.setState({tweets});
    // };

    render() {

        const { tweets } = this.props;

        return <>
            {tweets.map(e => <SunTweet

                content={e.content}
                firstName={e.authorId.firstName}
                email={e.authorId.email}
                lastName={e.authorId.lastName}
                nickname={e.authorId.nickname}
                createdAt={new Date(e.createdAt).toLocaleString()}
                // likes={e.likes}
                id={e._id}
                key={e._id}
                onLikeClick={this.onTweetLike}
            />)}
        </>

    }
}

export default Feed;