import React from "react";
import "./App.css";
import DataList from "./components/dataList"
import DateInput from "./components/DateInput"

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <DateInput/>
      <DataList/>
    </div>
  );
}

export default App;
