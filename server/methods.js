Meteor.methods({ //News Methods
  addTorrent :function (magnetURL, name, url) {
    if (magnetURL == "") {

    } else {
    Torrents.insert({
      magnetURL: magnetURL,
      name: name,
      url: url,
      createdAt: new Date()
    }); }
  },
  deleteTorrent : function (id){
    Torrents.remove(id);
  }
});
