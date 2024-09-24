import React from "react";
import '../css/Sidebar.css'

export const Sidebar = (props) => {
  return (
    <aside
      className="position-absolute p-3 mobileresponse"
      style={{
        ...props.sidebar,
        ...props.searchstyle,
      }}
    >
      <div className="d-flex justify-content-between align-items-center px-2">
        <h2>Menu Bar</h2>
        <span>
          <img
            onClick={props.SidebarVisible}
            width={24}
            src="https://cdn-icons-png.flaticon.com/128/491/491721.png"
            alt=""
          />
        </span>
      </div>
      <div className="d-flex justify-content-center flex-column gap-3 mt-4">
        <span>
          <a className="text-decoration-none" href="">
            Home
          </a>
        </span>
        <span>
          <a className="text-decoration-none" href="/contact">
            Contact
          </a>
        </span>
        <span>
          <a className="text-decoration-none" href="/history">
            History
          </a>
        </span>
      </div>
    </aside>
  );
};
