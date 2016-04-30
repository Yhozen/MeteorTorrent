import React from "react";

export const MainLayout = ({content}) => (
  <div className="main-layout">
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
        <div className="col-xs-4"><a className="navBtn" href="/"><h1 className="text-center">Videos</h1></a></div>
        <div className="col-xs-4"><a className="navBtn" href="/images"><h1 className="text-center">Images</h1></a></div>
        <div className="col-xs-4"><a className="navBtn" href="/add"><h1 className="text-center">+</h1></a></div>
    </div>
  </nav>
    <div className="container">
      {content}
    </div>


  </div>
)
