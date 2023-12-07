import React, { useRef, useState } from "react";
import { Return, Search } from "../../svg";
import useClickOutside from "../../helpers/clickOutside";

export default function SearchMenu({ setShowSearchMenu }) {
  const menu = useRef(null);
  const input = useRef(null);
  const color = "#65676b";
  const [iconVisible, setIconVisible] = useState(true);
  useClickOutside(menu, () => {
    setShowSearchMenu(false);
  });
  return (
    <div className="header_left search_area scrollbar" ref={menu}>
      <div className="search_wrap">
        <div className="header_logo">
          <div
            className="circle hover1"
            onClick={() => {
              setShowSearchMenu(false);
            }}
          >
            <Return color={color} />
          </div>
        </div>
        <div
          className="search"
          onClick={() => {
            input.current.focus();
          }}
        >
          {iconVisible && (
            <div>
              <Search color={color} />
            </div>
          )}
          <input
            type="text"
            placeholder="Search"
            ref={input}
            onFocus={() => {
              setIconVisible(false);
            }}
          />
        </div>
      </div>
      <div className="search_history_header">
        <span>Recent searches</span>
        <a>Edit</a>
      </div>
      <div className="search_history"></div>
      <div className="search_results_scrollbar"></div>
    </div>
  );
}
