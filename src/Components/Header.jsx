import React from "react";

export const Header = (props) => {
  return (
    <nav>
      <div
        className="d-flex justify-content-around bg-red-600 align-items-center border-bottom py-3"
        style={{ boxShadow: "0px 3px 10px grey" }}
      >
        <div>
          <a className="fs-4 text-decoration-none" href="">
            {props.title.toUpperCase()}
          </a>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <div>
            {props.Theme ? (
              <button
                className="btn border"
                style={props.searchstyle}
                onClick={props.Theme}
              >
                {props.texttheme}
              </button>
            ) : (
              <span>React JS</span>
            )}
          </div>
          <div>
            <span onClick={props.SidebarVisible}>
              <img
                width={30}
                src="https://cdn-icons-png.flaticon.com/128/7915/7915462.png"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
