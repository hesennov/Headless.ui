import React from "react";
import Menu from "./headless/Menu";
import Listbox from "./headless/Listbox";
import "./index.css";
const App = () => {
  return (
    <div className="flex justify-around">
      <div>
        <Listbox />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default App;
