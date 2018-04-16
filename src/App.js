import React, { Component } from "react";
import ReactDOM from "react-dom";
import Report from "./report";
import Header from "./header";

const App = () => {
  return (
    <div>
      <Header />
      <Report />
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
