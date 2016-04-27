Template.torrents.helpers({
    torrents: function () {
      return Torrents.find({}, {sort: {createdAt: -1}});
    }
});

Template.torrent.helpers({
  torrente: function () {
    var torrentId = Torrents.findOne({ "_id": this._id }).magnetURL;
    return torrentId
  }
});
