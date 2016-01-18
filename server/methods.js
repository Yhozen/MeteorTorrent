Meteor.methods({ //News Methods
  addTorrent :function (magnetURL) {
    if (magnetURL == "") {

    } else {
    Torrents.insert({
      magnetURL: magnetURL,
      createdAt: new Date()
    }); }
  },
  deleteTorrent : function (id){
    Torrents.remove(id);
  }
});
