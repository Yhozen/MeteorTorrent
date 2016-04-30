
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
//Libraries
import React from "react";
import { mount } from "react-mounter";

//Layouts
import { MainLayout } from "./layouts/MainLayout.jsx";
//Components (pages)
import App from "./jsx/App.jsx"
import AddForm from "./jsx/AddForm.jsx";
import VideoPlayer from "./jsx/VideoPlayer.jsx";
import Images from "./jsx/Images.jsx"
// import Torrent from "./jsx/Torrent.jsx"

FlowRouter.route("/", {
  name: "home",
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

FlowRouter.route("/video/:id", {
  name:"VideoPlayer",
  action () {
    mount(MainLayout, {
      content: (<VideoPlayer />)
    })
  }
});
FlowRouter.route("/images", {
  name:"Images",
  action () {
    mount(MainLayout, {
      content: (<Images />)
    })
  }
});
