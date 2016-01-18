Template.torrents.helpers({
    torrents: function () {
      return Torrents.find({}, {sort: {createdAt: -1}});
    }
});

Template.torrent.helpers({
  torrente: function () {
    var client = new WebTorrent();
    var torrentId = Torrents.findOne({ "_id": this._id }).magnetURL;
    var torrentDiv = "#" + this._id;

    client.add(torrentId, function (torrent) {
      // Torrents can contain many files. Let's use the first.
      var file = torrent.files[0]

      // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
      file.renderTo(torrentDiv)
    });
  },
});
