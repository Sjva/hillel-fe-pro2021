import React, { Component } from 'react';
import {Link} from "react-router-dom";


const Header = props => (
    <header className="p20">
       <div className="container">
          <a href="/" className="logo">
              <Link to="/"> <img src="../images/logo.jpg" alt="" className="logo-img"/></Link>
             <span>SunTweet</span>
          </a>
      </div>
    </header>);

export default Header;