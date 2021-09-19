import React, { Component } from 'react';


const Header = props => (
    <header className="p20">
       <div className="container">
          <a href="/" className="logo">
             <img src="../images/logo.jpg" alt="" className="logo-img"/>
             <span>SunTweet</span>
          </a>
      </div>
    </header>);

export default Header;