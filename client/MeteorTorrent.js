Meteor.startup(function(){
  var client = new WebTorrent()


  var torrentId = 'magnet:?xt=urn:btih:881935e0a790b707d1b04fbecf20596036ed1f18&dn=tytyty.mp4&tr=udp%3A%2F%2Fexodus.desync.com%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.webtorrent.io'//'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d'
  var torrentId2= 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d'

  client.add(torrentId, function (torrent) {
    // Torrents can contain many files. Let's use the first.
    var file = torrent.files[0]

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('#main')
  });
  client.add(torrentId2, function (torrent) {
    // Torrents can contain many files. Let's use the first.
    var file = torrent.files[0]

    // Display the file by adding it to the DOM. Supports video, audio, image, etc. files
    file.appendTo('#main2')
  });

});
