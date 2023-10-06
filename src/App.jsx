import React from "react";
import Menu from "./headless/Menu";
import Disclosure from "./headless/Disclosure";
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
      <div>
        <Disclosure />
      </div>
    </div>
  );
};

export default App;
