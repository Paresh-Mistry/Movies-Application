import React from "react";

export default function Footer() {
  const date = () => {
    const year = new Date();
    return year.getFullYear();
  };

  return (
    <footer>
      <div className="text-center py-4">
        <div>
          <small>Copyright &copy; Movies App | {date()}</small>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-3">
          <span>
            <a href="">
              <img
                width={28}
                src="https://cdn-icons-png.flaticon.com/128/733/733553.png"
                alt=""
              />
            </a>
          </span>
          <span>
            <a href="">
              <img
                width={28}
                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                alt=""
              />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
