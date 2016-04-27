FlowRouter.route("/add", {
  name:"add",
  action () {
    BlazeLayout.render("MainLayout", {main:"add"})
  }
});

FlowRouter.route("/", {
  name:"home",
  action () {
    BlazeLayout.render("MainLayout", {main:"torrents"})
  }
});

FlowRouter.route("/video/:id", {
  name:"VideoPlayer",
  action () {
    BlazeLayout.render("MainLayout", {main:"VideoPlayer"})
  }
});

FlowRouter.route("/imagenes", {
  name:"Imagenes",
  action () {
    BlazeLayout.render("MainLayout", {main:"imagenes"})
  }
});
