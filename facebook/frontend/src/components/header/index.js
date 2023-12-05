import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Friends, Gaming, HomeActive, Logo, Market, Search, Watch } from "../../svg";

const Header = () => {
  const color = "#65676b";
  return (
    <header>
      <div className="header_left">
        <Link to="/" className="header_logo">
          <div className="circle">
            <Logo />
          </div>
        </Link>
        <div className="search search1">
          <Search color={color} />
          <input type="text" placeholder="Search" className="hide_input" />
        </div>
      </div>
      <div className="header_middle">
        <Link tp="/" className="middle_icon">
          <HomeActive />
        </Link>
        <Link tp="/" className="middle_icon">
          <Friends />
        </Link>
        <Link tp="/" className="middle_icon">
          <Watch />
        </Link>
        <Link tp="/" className="middle_icon">
          <Market />
        </Link>
        <Link tp="/" className="middle_icon">
          <Gaming />
        </Link>
      </div>
      <div className="header_right"></div>
    </header>
  );
};

export default Header;
