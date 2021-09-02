import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

const  Sidebar = ({ onLogout }) => (
            <aside className="sidebar-tweet p20">
                  <ul className="sidebar-tweet-list">
                     <li><Link to="/"><i className="fa fa-home" aria-hidden="true"></i> <span>Home</span></Link></li>
                     <li><Link to="/profile"><i className="fa fa-user" aria-hidden="true"></i> <span>Profile</span></Link></li>
                     <li><a href="/" onClick={onLogout} ><i className="fa fa-sign-out" aria-hidden="true"></i> <span>Log out</span></a></li>
                  </ul>
                  {/*<a href="/" className="sidebar-tweet-btn">Send your suntweet</a>*/}
            </aside>
);


export default Sidebar;