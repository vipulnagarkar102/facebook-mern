import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="login_footer">
          <div className="login_footer_wrap">
            <Link to="/">English (UK)</Link>
            <Link to="/">français</Link>
            <Link to="/">اردو ویکیپیڈیا</Link>
            <Link to="/">हिन्दी</Link>
            <Link to="/">मराठी</Link>
            <Link to="/" className="footer_square">
              <i className="plus_icon"></i>
            </Link>
          </div>
          <div className="footer_Splitter"></div>
          <div className="login_footer_wrap">
            <Link to="/">Sign Up</Link>
            <Link to="/">Log In</Link>
            <Link to="/">Messenger</Link>
            <Link to="/">Watch</Link>
            <Link to="/">Places</Link>
            <Link to="/">Games</Link>
            <Link to="/">Marketplace</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Portal</Link>
            <Link to="/">Bullet In</Link>
            <Link to="/">Local</Link>
            <Link to="/">Voting</Link>
            <Link to="/">Group</Link>
            <Link to="/">Create Ad</Link>
            <Link to="/">Create Page</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Privacy</Link>
            <Link to="/">Cookies</Link>
            <Link to="/">Terms</Link>
            <Link to="/">Help</Link>
            <Link to="/">
              <i className="adChoices_icon"></i>
            </Link>
          </div>
        </div>
  )
}

export default Footer
