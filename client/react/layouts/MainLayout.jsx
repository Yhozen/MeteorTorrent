import React from "react";

export const MainLayout = ({content}) => (
  <div className="main-layout container">
  <nav className="navbar navbar-default navbar-fixed-top">
      <div className="col-md-4"><a href="/"><h1>VIDEOS</h1></a></div>
      <div className="col-md-4"><a href="/imagenes"><h1>Imagenes</h1></a></div>
      <div className="col-md-4"><a href="/add"><h1>+</h1></a></div>
  </nav>
    <div className="container">
      {content}
    </div>


  </div>
)
