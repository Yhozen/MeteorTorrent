
//
// FlowRouter.route("/", {
//   name:"home",
//   action () {
//     BlazeLayout.render("MainLayout", {main:"torrents"})
//   }
// });
//

// FlowRouter.route("/imagenes", {
//   name:"Imagenes",
//   action () {
//     BlazeLayout.render("MainLayout", {main:"imagenes"})
//   }
// });
import React from "react";
import { mount } from "react-mounter";

import { MainLayout } from "./layouts/MainLayout.jsx";
import App from "./jsx/App.jsx"
import AddForm from "./jsx/AddForm.jsx";
// import Torrent from "./jsx/Torrent.jsx"

FlowRouter.route("/", {
  action() {
    mount(MainLayout, {
      content: (<App />)
    }
    )
  }
});

FlowRouter.route("/add", {
  name:"add",
  action () {
    mount(MainLayout, {
      content: (<AddForm />)
    })
  }
});
