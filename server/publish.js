Meteor.publish("torrents", function () {
  return Torrents.find();
});
