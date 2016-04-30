Meteor.publish("torrents", function () {
  return Torrents.find();
});
Meteor.publish("torrentOne", function (_id) {
  return Torrents.find({ _id: _id });
});
