Template.inputVideo.events({
  "submit .new-torrent": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    var text = event.target.text.value;
    var name = event.target.name.value;
    var url = event.target.url.value;
    text = text.toString();
    name = name.toString();
    url = url.toString();

    // Insert a task into the collection
    Meteor.call("addTorrent", text, name, url)
    // Clear form
    event.target.text.value = "";
    event.target.name.value = "";
    event.target.url.value = "";
  }
});
