FlowRouter.route("/", {
  name:"home",
  action () {
    BlazeLayout.render("MainLayout", {main:"videoTemp"})
  }
});

// FlowRouter.route("/video/:id", {
//   name:"home",
//   action () {
//     BlazeLayout.render("MainLayout", {main:"test"})
//   }
// });
