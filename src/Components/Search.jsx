import React, { useState } from "react";
import Content from "./Content";

export default function Search(props) {
  const [searchinput, setsearchinput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  let inputchange = (e) => {
    setsearchinput(e.target.value);
  };

  let handleclick = () => {
    if (searchinput) {
      setSearchTerm(searchinput);
    } else {
      alert(`Search Input Cannot be Null`);
    }
  };

  return (
    <main>
      <div className="container">
        <div className="my-4 d-flex align-items-center gap-2 border border-primary rounded-5 py-1 px-3">
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
            <button className="btn" title="Search Movies" onClick={handleclick}>
              <img
                width={20}
                src="https://cdn-icons-png.flaticon.com/128/10469/10469570.png"
                alt="search-icon"
              />
            </button>
          </div>
        </div>

        <Content cardstyle={props.searchstyle} search={searchTerm} />
      </div>
    </main>
  );
}
