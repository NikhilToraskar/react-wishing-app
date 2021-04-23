import React from 'react';
import './App.css';

const App = () => {
  // let curDate = new Date(2021, 4, 23, 1);
  let curDate = new Date();
  curDate = curDate.getHours();
  let greetings = '';
  const cssStyle = {};

  if (curDate >= 1 && curDate < 12) {
    greetings = "Good Morning";
    cssStyle.color = "Green";
  } else if (curDate >= 12 && curDate < 19) {
    greetings = "Good Afternoon";
    cssStyle.color = "Orange";
  } else {
    greetings = "Good Night";
    cssStyle.color = "Black";
  }
  return (
    <div className="bounded-app">
      <h1>Hello friend, <span style={cssStyle}>{greetings}</span></h1>
    </div>
  );
}

export default App;
