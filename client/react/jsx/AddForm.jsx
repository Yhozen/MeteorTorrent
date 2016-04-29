import React from 'react';



export default class AddForm extends React.Component {
  submit(e) {
    e.preventDefault();
    // Get value from form element
    var text = e.target.text.value;
    var name = e.target.name.value;
    var url = e.target.url.value;
    text = text.toString();
    name = name.toString();
    url = url.toString();

    // Insert a task into the collection
    Meteor.call("addTorrent", text, name, url)
    // Clear form
    e.target.text.value = "";
    e.target.name.value = "";
    e.target.url.value = "";
  }
  render() {
    return (
      <form className="new-torrent" onSubmit={this.submit.bind(this)}>
        <div className="form-group">
          <input type="text" name="name" className="col-xs-12" placeholder="Write name here" />
          <input type="text" name="text" className="col-xs-12" placeholder="Write MagnetURL" />
          <input type="text" name="url" className="col-xs-12" placeholder="Write url of the image" />
          <input type="submit" className="btn btn-primary btn-raised" value="Submit" />
        </div>
      </form>
    )
  }
}
