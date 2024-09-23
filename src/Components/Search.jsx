import React, { useState } from "react";
import Content from "./Content";

export default function Search(props) {
  const [searchinput, setsearchinput] = useState(""); // Holds the user search input

  // Handle input change
  let inputchange = (e) => {
    setsearchinput(e.target.value);
  };

  let handleclick = () => {
    if (searchinput) {
      props.onSearch(searchinput);
    } else {
      alert("Please enter a search term.");
    }
  };

  return (
    <main>
      <div className="container">
        <div className="my-4 d-flex align-items-center gap-2 border rounded-5 py-1 px-3">
          <div className="w-100">
            <input
              className="w-100 border-0"
              style={{
                outline: 0,
                textOverflow: "ellipsis",
                ...props.searchstyle,
              }}
              type="text"
              value={searchinput}
              onChange={inputchange}
              id="searchmovie"
              placeholder="Search Your Movie Here"
            />
          </div>
          <div>
            <button className="btn" title="Search Movies">
              <img
                width={20}
                src="https://cdn-icons-png.flaticon.com/128/10469/10469570.png"
                alt="search-icon"
              />
            </button>
          </div>
        </div>
        <Content cardstyle={props.searchstyle} search={searchinput} />
      </div>
    </main>
  );
}
