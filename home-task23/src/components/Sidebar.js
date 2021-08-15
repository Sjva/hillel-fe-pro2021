import React, { Component } from 'react';

const  Sidebar = ({ onLogout }) => (
            <aside className="sidebar-tweet p20">
                  <ul className="sidebar-tweet-list">
                     <li><a href="/"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                     <li><a href="/"><i className="fa fa-user" aria-hidden="true"></i> Profile</a></li>
                     <li><a href="/" onClick={onLogout} ><i className="fa fa-sign-out" aria-hidden="true"></i> Log out</a></li>
                  </ul>
                  <a href="/" className="sidebar-tweet-btn">Send your suntweet</a>
            </aside>
);


export default Sidebar;