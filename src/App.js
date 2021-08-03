import React, { useState } from "react";
import Covid from "./components/covid";
import "./App.css";

const App = () => {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };

  setInterval(UpdateTime, 1000);

  return (
    <div id="app">
      <div className="datentime">
        <p>Time</p>
        {ctime}
      </div>
      <Covid />
      <div className="footer">
        <center>&copy; Dome of Don</center>
      </div>
    </div>
  );
};

export default App;
