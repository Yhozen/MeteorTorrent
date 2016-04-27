import React from 'react';
import TrackerReact from "meteor/ultimatejs:tracker-react";

// import ResolutionSingle from "./ResolutionSingle.jsx";



export default class App extends TrackerReact(React.Component) {
  render() {
    return (
      <div>
        <h1> Hello world from react </h1>
      </div>
    )
  }
}
