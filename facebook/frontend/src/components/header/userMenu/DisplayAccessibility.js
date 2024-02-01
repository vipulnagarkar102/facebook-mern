import React from "react";

export default function DisplayAccessibility({ setVisible }) {
  return (
    <div>
      <div className="absolute_wrap">
        <div className="absolute_wrap_header">
          <div
            className="circle hover2"
            onClick={() => {
              setVisible(0);
            }}
          >
            <i className="arrow_back_icon"></i>
          </div>
          Display & Accessibility
        </div>
        <div className="menu_main">
          <div className="small_circle">
            <i className="dark_filled_icon"></i>
          </div>
          <div className="menu_col">
            <div className="menu_span1">Dark Mode</div>
            <span className="menu_span2">
              Adjust the apperance of facebook to reduce glare
            </span>
          </div>
        </div>
        <label htmlFor="darkOff" className="hover2">
          <span>Off</span>
          <input type="radio" name="dark" id="darkOff" />
        </label>
        <label htmlFor="darkOn" className="hover2">
          <span>On</span>
          <input type="radio" name="dark" id="darkOn" />
        </label>
        <div className="menu_main">
          <div className="small_circle">
            <i className="dark_filled_icon"></i>
          </div>
          <div className="menu_col">
            <div className="menu_span1">Compact Mode</div>
            <span className="menu_span2">
              Adjust the apperance of facebook to reduce glare
            </span>
          </div>
        </div>
        <label htmlFor="compactOff" className="hover2">
          <span>Off</span>
          <input type="radio" name="compact" id="compactOff" />
        </label>
        <label htmlFor="compactOn" className="hover2">
          <span>On</span>
          <input type="radio" name="compact" id="compactOn" />
        </label>
        <div className="menu_item hover2">
        <div className="small_circle">
          <i className="keyboard_icon"></i>
        </div>
        <span>Keyboard</span>
        <div className="rArrow">
       <i className="right_icon"></i>
        </div>
      </div>
      </div>
    </div>
  );
}
