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
      <div>
        <p> In order to add a torrent you need to host it in other WebTorrent page (for example <a href="http://instant.io">instant.io</a>  ) but in the final version you will be able to host it right here</p>
        <form className="form-horizontal" onSubmit={this.submit.bind(this)}>
          <div className="input-group input-group-sm">
            <input type="text" name="name" className="form-control" placeholder="Write name here" />
            <input type="text" name="text" className="form-control" placeholder="Write MagnetURL" />
            <input type="text" name="url" className="form-control" placeholder="Write url of the image" />
            <button type="submit" className="btn btn-primary btn-raised btn-lg" >Submit </button>
          </div>
        </form>
      </div>
    )
  }
}
