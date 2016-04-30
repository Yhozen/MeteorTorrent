import React from "react";

export const MainLayout = ({content}) => (
  <div className="main-layout">
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
        <div className="col-md-4"><a href="/"><h1>Videos</h1></a></div>
        <div className="col-md-4"><a href="/images"><h1>Images</h1></a></div>
        <div className="col-md-4"><a href="/add"><h1>+</h1></a></div>
    </div>
  </nav>
    <div className="container">
      {content}
    </div>


  </div>
)
