Template.inputVideo.events({
  "submit .new-torrent": function (event) {
    // Prevent default browser form submit
    event.preventDefault();
    // Get value from form element
    var text = event.target.text.value;
    text = text.toString();
    // Insert a task into the collection
    Meteor.call("addTorrent", text)
    // Clear form
    event.target.text.value = "";
  }
});
