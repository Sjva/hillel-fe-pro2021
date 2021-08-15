import React, {Component} from 'react';

class Tweet extends Component {
    render() {
        return (
            <div className="tweet nes-container is-rounded p20">
                <div className="avatar">
                    <img className="nes-avatar is-rounded is-large" alt="ava" src="./images/ava.jpg" />
                </div>
               <div className="content-suntweet-user">
                   <div className="suntweet-user-data">
                   <ul className="tweet-title">
                       <li className="tweet-name">Donatello Turtle</li>
                       <li className="tweet-nickname">@Donturtle</li>
                       <li className="tweet-date nes-text">1h ago</li>
                   </ul>
                   <p className="tweet-content">
                         Черепашки-ниндзя (англ. Teenage Mutant Ninja Turtles, сокр. TMNT, в Европе — Teenage
                         Mutant Hero Turtles, сокр. TMHT) — вымышленная команда из четырёх черепах-мутантов,
                         которые обучаются искусству ниндзюцу со своим сэнсэем, крысой-мутантом, мастером
                         Сплинтером.
                   </p>
                </div>
                 <ul className="tweet-actions-container">
                  <li className="tweet-action">
                       <i className="fa fa-heart-o action-icon" aria-hidden="true"></i>
                      <span className="counter">3</span>
                   </li>

                  <li className="tweet-action">
                      <i className="fa fa-reply-all action-icon" aria-hidden="true"></i>
                      <span className="counter">3</span>
                  </li>

                  <li className="tweet-action">
                       <i className="fa fa-comment action-icon" aria-hidden="true"></i>
                       <span className="counter">8</span>
                  </li>
                 </ul>
               </div>
            </div>
         );
    }
}

export default Tweet;
