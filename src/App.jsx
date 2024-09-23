import React from "react";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";
import Search from "./Components/Search";
import { useState } from "react";
import { Sidebar } from "./Components/sidebar";

function App() {
  const [themestyle, setThemestyle] = useState({
    color: "white",
    backgroundColor: "black",
  });
  const [texttheme, settexttheme] = useState("Night Theme");

  const Theme = () => {
    if (themestyle.color == "white") {
      setThemestyle({
        color: "black",
        backgroundColor: "white",
      });
      settexttheme("Day Theme");
    } else {
      setThemestyle({
        color: "white",
        backgroundColor: "black",
      });
      settexttheme("Night Theme");
    }
  };

  const [sidebar, setsidebar] = useState({
    display: "none",
  });

  let SidebarVisible = (e) => {
    if (sidebar.display == "none") {
      setsidebar({
        display: "block",
      });
    } else {
      setsidebar({
        display: "none",
      });
    }
  };

  return (
    <div style={{ minHeight: "100vh", ...themestyle }}>
      <Sidebar
        SidebarVisible={SidebarVisible}
        searchstyle={themestyle}
        sidebar={sidebar}
      />
      <Header
        title="Movies App"
        searchstyle={themestyle}
        Theme={Theme}
        texttheme={texttheme}
        SidebarVisible={SidebarVisible}
      />
      <Search searchstyle={themestyle} />
      <Footer />
    </div>
  );
}

export default App;
